import { useMemo, useState } from "react"

export const useFilter = (initialData = []) => {
  const [search, setSearch] = useState("")
  const [filters, setFilters] = useState({})

  let result = [...initialData]

  const filteredData = useMemo(() => {
    // search filter
    if (search) {
      result = result.filter((item) =>
        Object.values(item)
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase())
      )
    }

    // dynamic filters

    Object.keys(filters).forEach((key) => {
      if (filters[key]) {
        result = result.filter(
          (item) =>
            item[key]?.toString().toLowerCase() ===
            filters[key].toString().toLowerCase()
        )
      }
    })

    return result
  }, [search, filters, initialData])

  const setFilter = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  const clearFilters = () => {
    setFilters({})
    setSearch("")
  }

  return {
    filteredData,
    search,
    setSearch,
    setFilter,
    clearFilters,
  }
}
