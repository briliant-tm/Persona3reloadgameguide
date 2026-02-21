/**
 * Memoization Utilities
 * Provides utilities for optimizing expensive computations
 * Includes react-specific and general-purpose memoization helpers
 */

/**
 * Simple memoization for functions (returns cached result if inputs are equal)
 * Works with any function and caches based on argument equality
 */
export function memoize<T extends (...args: any[]) => any>(
  fn: T,
  options = { maxSize: 100 }
): T {
  const cache = new Map<string, any>();

  return ((...args: any[]) => {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn(...args);
    cache.set(key, result);

    // Implement simple LRU-like cleanup if cache gets too large
          if (cache.size > options.maxSize) {
            const firstKey = cache.keys().next().value;
            if (firstKey !== undefined) {
              cache.delete(firstKey);
            }
          }
    return result;
  }) as T;
}

/**
 * Debounce a function (delays execution until settled)
 * Useful for API calls during user input
 */
export function debounce<T extends (...args: any[]) => any>(
  fn: T,
  delay: number = 300
): T {
  let timeoutId: NodeJS.Timeout | null = null;

  return ((...args: any[]) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      fn(...args);
      timeoutId = null;
    }, delay);
  }) as T;
}

/**
 * Throttle a function (executes at most once per interval)
 * Useful for scroll/resize handlers
 */
export function throttle<T extends (...args: any[]) => any>(
  fn: T,
  interval: number = 300
): T {
  let lastRun = 0;
  let timeoutId: NodeJS.Timeout | null = null;

  return ((...args: any[]) => {
    const now = Date.now();

    if (now - lastRun >= interval) {
      lastRun = now;
      fn(...args);
    } else if (!timeoutId) {
      timeoutId = setTimeout(() => {
        lastRun = Date.now();
        fn(...args);
        timeoutId = null;
      }, interval - (now - lastRun));
    }
  }) as T;
}

/**
 * Filter personas by type (with memoization)
 * Returns new array only if inputs change
 */
export const filterPersonasByType = memoize(
  (personas: any[], type: string) => {
    if (!type || type === 'all') return personas;
    return personas.filter(p => p.arcana?.toLowerCase() === type.toLowerCase());
  }
);

/**
 * Search personas by name (with memoization)
 * Case-insensitive search
 */
export const searchPersonas = memoize(
  (personas: any[], query: string) => {
    if (!query) return personas;
    const lowerQuery = query.toLowerCase();
    return personas.filter(p =>
      p.name?.toLowerCase().includes(lowerQuery) ||
      p.arcana?.toLowerCase().includes(lowerQuery)
    );
  }
);

/**
 * Sort personas by field (with memoization)
 */
export const sortPersonas = memoize(
  (personas: any[], field: keyof any, order: 'asc' | 'desc' = 'asc') => {
    const sorted = [...personas];
    sorted.sort((a, b) => {
      const aVal = a[field];
      const bVal = b[field];

      if (aVal < bVal) return order === 'asc' ? -1 : 1;
      if (aVal > bVal) return order === 'asc' ? 1 : -1;
      return 0;
    });
    return sorted;
  }
);

/**
 * Deep equality check for React dependency arrays
 */
export function deepEqual(a: any, b: any): boolean {
  if (a === b) return true;

  if (a == null || b == null) return a === b;
  if (typeof a !== 'object' || typeof b !== 'object') return a === b;

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  return keysA.every(key => deepEqual(a[key], b[key]));
}
