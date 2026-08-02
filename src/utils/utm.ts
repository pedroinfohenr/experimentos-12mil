/**
 * Utility to capture, persist, and append UTM and tracking parameters
 * to checkout URLs (Wiapy, Kiwify, Hotmart, etc.).
 */

const STORAGE_KEY = 'ciencias_utm_params';

/**
 * Read document cookies to extract any UTMify or tracking cookies if set
 */
function getCookieParams(): Record<string, string> {
  if (typeof document === 'undefined') return {};
  const cookies: Record<string, string> = {};
  try {
    document.cookie.split(';').forEach((cookie) => {
      const [name, value] = cookie.trim().split('=');
      if (name && value) {
        if (name.startsWith('utm_') || name === 'src' || name === 'sck' || name === 'xcod' || name.includes('utmify')) {
          cookies[name] = decodeURIComponent(value);
        }
      }
    });
  } catch (e) {
    // safe fallback
  }
  return cookies;
}

/**
 * Capture UTMs from current URL search parameters and store them in sessionStorage/localStorage
 */
export function captureAndStoreUtms(): Record<string, string> {
  if (typeof window === 'undefined') return {};

  const currentParams = new URLSearchParams(window.location.search);
  const captured: Record<string, string> = {};

  // Capture all query params present in current URL
  currentParams.forEach((value, key) => {
    if (value) {
      captured[key] = value;
    }
  });

  // If parameters exist, store them
  if (Object.keys(captured).length > 0) {
    try {
      const existingStored = getStoredUtms();
      const merged = { ...existingStored, ...captured };
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
      return merged;
    } catch (e) {
      console.warn('Unable to store UTMs in storage:', e);
    }
  }

  return getStoredUtms();
}

/**
 * Retrieve stored UTMs from sessionStorage, localStorage, or Cookies
 */
export function getStoredUtms(): Record<string, string> {
  if (typeof window === 'undefined') return {};

  let stored: Record<string, string> = {};

  try {
    const sessionData = sessionStorage.getItem(STORAGE_KEY);
    if (sessionData) {
      stored = { ...stored, ...JSON.parse(sessionData) };
    }
    const localData = localStorage.getItem(STORAGE_KEY);
    if (localData) {
      stored = { ...stored, ...JSON.parse(localData) };
    }
  } catch (e) {
    console.warn('Error reading stored UTMs:', e);
  }

  // Merge cookies if any
  const cookieParams = getCookieParams();
  return { ...cookieParams, ...stored };
}

/**
 * Append all captured/current UTM query parameters to a target checkout URL.
 */
export function buildCheckoutUrl(baseUrl: string): string {
  if (typeof window === 'undefined') return baseUrl;

  try {
    const urlObj = new URL(baseUrl);
    
    // 1. Get stored UTMs (session/local storage + cookies)
    const storedUtms = captureAndStoreUtms();

    // 2. Get live URL params from current window location
    const liveParams = new URLSearchParams(window.location.search);

    // Merge: live params take priority over stored params
    const allParams: Record<string, string> = { ...storedUtms };
    liveParams.forEach((val, key) => {
      if (val) {
        allParams[key] = val;
      }
    });

    // Smart fallback for Wiapy: Ensure 'src' and 'sck' are set if utm_source or utm_campaign exist
    if (!allParams.src && (allParams.utm_source || allParams.utm_campaign)) {
      allParams.src = allParams.utm_source || allParams.utm_campaign;
    }

    if (!allParams.sck && (allParams.utm_campaign || allParams.utm_content)) {
      const sckParts = [allParams.utm_campaign, allParams.utm_content].filter(Boolean);
      if (sckParts.length > 0) {
        allParams.sck = sckParts.join('|');
      }
    }

    // Append all params to checkout URL
    Object.keys(allParams).forEach((key) => {
      if (allParams[key]) {
        urlObj.searchParams.set(key, allParams[key]);
      }
    });

    return urlObj.toString();
  } catch (e) {
    console.error('Error building checkout URL with UTMs:', e);
    // Fallback: simple query parameter string concatenation
    const search = window.location.search;
    if (search && search.length > 1) {
      const separator = baseUrl.includes('?') ? '&' : '?';
      return `${baseUrl}${separator}${search.substring(1)}`;
    }
    return baseUrl;
  }
}
