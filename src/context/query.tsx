"use client";

import type React from "react";
import {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";
import { useLocalStorage } from "usehooks-ts";
import { APP_KEYS } from "@/lib/constant";

interface QueryLimitContextType {
  queryCount: number;
  incrementQuery: () => void;
  resetQueries: () => void;
  remainingQueries: number;
  maxQueries: number;
}

const QueryLimitContext = createContext<QueryLimitContextType | undefined>(
  undefined
);

export const useQueryLimit = () => {
  const context = useContext(QueryLimitContext);
  if (context === undefined) {
    throw new Error("useQueryLimit must be used within a QueryLimitProvider");
  }
  return context;
};

interface QueryLimitProviderProps {
  children: React.ReactNode;
  maxQueries?: number;
}

export function QueryLimitProvider({
  children,
  maxQueries = 50,
}: QueryLimitProviderProps) {
  const [queryCount, setQueryCount] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);
  const [storedCount, setStoredCount] = useLocalStorage(
    APP_KEYS.QUERY_COUNT,
    "0"
  );

  useEffect(() => {
    if (storedCount) {
      setQueryCount(Number.parseInt(storedCount, 10));
    }
    setIsInitialized(true);
  }, [storedCount]);

  const incrementQuery = useCallback(() => {
    if (!isInitialized) return;

    const newCount = queryCount + 1;
    setQueryCount(newCount);
    setStoredCount(newCount.toString());
  }, [queryCount, isInitialized, setStoredCount]);

  const resetQueries = useCallback(() => {
    setQueryCount(0);
    setStoredCount("0");
  }, [setStoredCount]);

  const remainingQueries = Math.max(0, maxQueries - queryCount);

  const contextValue = {
    queryCount,
    incrementQuery,
    resetQueries,
    remainingQueries,
    maxQueries,
  };

  return (
    <QueryLimitContext.Provider value={contextValue}>
      {children}
    </QueryLimitContext.Provider>
  );
}
