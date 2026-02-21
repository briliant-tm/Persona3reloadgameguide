/**
 * useHybridPersonaData Hook
 * 
 * Custom hook that provides a unified interface for fetching persona data
 * with automatic fallback to static data.
 * 
 * Features:
 * - Automatic API fetching on mount
 * - Seamless fallback to static PERSONAS data
 * - Cache management
 * - Loading and error states
 * - Type-safe with full TypeScript support
 * 
 * Usage:
 * ```tsx
 * const { personas, loading, error, fromAPI } = useHybridPersonaData();
 * ```
 */

import { useEffect } from 'react';
import { usePersonaStore } from '../store/personaStore';
import { PERSONAS } from '../data/personas';

export const useHybridPersonaData = () => {
  const {
    personas: apiPersonas,
    loading,
    error,
    fromAPI,
    fetchPersonas,
  } = usePersonaStore();

  // Fetch data on mount
  useEffect(() => {
    if (apiPersonas.length === 0) {
      fetchPersonas();
    }
  }, [apiPersonas.length, fetchPersonas]);

  // Use API data if available, otherwise fall back to static data
  const personas = apiPersonas.length > 0 ? apiPersonas : PERSONAS;

  return {
    personas,
    loading,
    error,
    fromAPI,
    fetchPersonas,
  };
};
