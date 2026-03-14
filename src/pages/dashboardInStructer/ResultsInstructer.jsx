import ResultInstructorStats from "../../components/instructorComponents/Results/ResultInstructorStats";
import ResultInstructorSearch from "../../components/instructorComponents/Results/ResultInstructorSearch";
import Table from "../../components/Ui/Table";
import { defaultData, tableHeadItems } from "../../data/resultData";
import { useFilter } from "../../hooks/useFilter";
import { usePDF } from "react-to-pdf";
import ResultInstructorPagination from "../../../../../learn-app/src/components/DashboardInstructer/ResultInstructorPagination";
import { usePagination } from "../../hooks/usePagination";

const ResultsInstructer = () => {
  const { filteredData, handleFilterByCourse, search, setSearch } =
    useFilter(defaultData);
  const { currentItems, currentPage, handleOnChange, totalPage } =
    usePagination({ itemsPerPage: 3, dataItems: filteredData });
  const { toPDF, targetRef } = usePDF({
    filename: "result.pdf",
  });

  return (
    <div className="grid lg:gap-6 gap-4 overflow-x-hidden">
      <h1 className="capitalize lg:text-2xl text-xl"> students results</h1>
      <div className="grid gap-5">
        <ResultInstructorStats />
        <ResultInstructorSearch
          toPDF={toPDF}
          handleFilterByCourse={handleFilterByCourse}
          search={search}
          setSearch={setSearch}
        />
        <div ref={targetRef} className="overflow-x-auto table-scrollbar">
          <Table tbodyData={currentItems} theadData={tableHeadItems} />
        </div>
        <ResultInstructorPagination
          currentPage={currentPage}
          handleChangePage={handleOnChange}
          totalPages={totalPage}
        />
      </div>
    </div>
  );
};

export default ResultsInstructer;
