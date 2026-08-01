/**
 * Utility to capture, persist, and append UTM and tracking parameters
 * to checkout URLs (Wiapy, Kiwify, Hotmart, etc.).
 */

const STORAGE_KEY = 'ciencias_utm_params';

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
 * Retrieve stored UTMs from sessionStorage or localStorage
 */
export function getStoredUtms(): Record<string, string> {
  if (typeof window === 'undefined') return {};

  try {
    const sessionData = sessionStorage.getItem(STORAGE_KEY);
    if (sessionData) {
      return JSON.parse(sessionData);
    }
    const localData = localStorage.getItem(STORAGE_KEY);
    if (localData) {
      return JSON.parse(localData);
    }
  } catch (e) {
    console.warn('Error reading stored UTMs:', e);
  }

  return {};
}

/**
 * Append all captured/current UTM query parameters to a target checkout URL.
 */
export function buildCheckoutUrl(baseUrl: string): string {
  if (typeof window === 'undefined') return baseUrl;

  try {
    const urlObj = new URL(baseUrl);
    
    // 1. Get stored UTMs
    const storedUtms = captureAndStoreUtms();

    // 2. Get live URL params
    const liveParams = new URLSearchParams(window.location.search);

    // Merge: live params take priority over stored params
    const allParams: Record<string, string> = { ...storedUtms };
    liveParams.forEach((val, key) => {
      if (val) {
        allParams[key] = val;
      }
    });

    // Append to urlObj searchParams
    Object.keys(allParams).forEach((key) => {
      urlObj.searchParams.set(key, allParams[key]);
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
