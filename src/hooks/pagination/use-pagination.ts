import { useState, useMemo, useCallback } from "react";

type UsePaginationResult<T> = {
  paginatedData: T[];
  totalPages: number;
  totalItems: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  recalculate: () => void;
};

export function usePagination<T>(
  data: T[],
  pageSize: number = 10
): UsePaginationResult<T> {
  const [currentPage, setCurrentPage] = useState(1);
  const [refreshKey, setRefreshKey] = useState(0);

  const recalculate = useCallback(() => {
    setRefreshKey((prev) => prev + 1); // trigger recompute
  }, []);

  const { paginatedData, totalPages, totalItems } = useMemo(() => {
    const totalItems = data.length;
    const totalPages = Math.ceil(totalItems / pageSize);

    // ensure currentPage is within bounds
    const safePage = Math.min(Math.max(currentPage, 1), totalPages || 1);

    const startIndex = (safePage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedData = data.slice(startIndex, endIndex);

    return {
      paginatedData,
      totalPages,
      totalItems,
    };
  }, [data, currentPage, pageSize, refreshKey]); // 👈 include refreshKey

  return {
    paginatedData,
    totalPages,
    totalItems,
    currentPage,
    setCurrentPage,
    recalculate, // 👈 expose externally
  };
}
