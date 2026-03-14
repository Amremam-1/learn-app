import React, { useEffect, useMemo, useState } from "react";

export const usePagination = ({ itemsPerPage, dataItems }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPage =
    dataItems.length > 0
      ? Math.ceil((dataItems?.length || 0) / itemsPerPage)
      : 1;

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;

  const currentItems = useMemo(() => {
    return dataItems?.slice(firstIndex, lastIndex) || [];
  });

  const handleOnChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPage) return;
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [dataItems?.length]);

  return {
    itemsPerPage,
    currentItems,
    handleOnChange,
    currentPage,
    totalPage,
  };
};
