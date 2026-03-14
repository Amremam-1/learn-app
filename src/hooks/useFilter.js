import { useEffect, useState } from "react";

export const useFilter = (initialData) => {
  const [filteredData, setFilteredData] = useState(initialData);
  const [search, setSearch] = useState("");

  const handleFilterByCourse = (item) => {
    if (!item) {
      setFilteredData(initialData);
      return;
    }
    const filtered = initialData.filter(
      (student) => student.course.toLowerCase() === item.toLowerCase(),
    );
    setFilteredData(filtered);
  };

  const handleFilterWithName = () => {
    const filtered = initialData.filter((item) =>
      item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
    );
    setFilteredData(filtered);
  };

  useEffect(() => {
    handleFilterWithName();
  }, [search, initialData]);

  return {
    filteredData,
    setFilteredData,
    handleFilterByCourse,
    handleFilterWithName,
    search,
    setSearch,
  };
};
