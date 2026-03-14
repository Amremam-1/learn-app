const ResultInstructorPagination = ({
  totalPages,
  currentPage,
  handleChangePage,
}) => {
  return (
    <div className="flex text-sm lg:ml-auto gap-4 lg:pr-8">
      <button
        className={`${currentPage === 1 ? "text-slate-400" : ""} px-4 py-3 rounded-xl border border-[#E2E8F0]`}
        onClick={() => handleChangePage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((num, i) => (
        <button
          onClick={() => handleChangePage(num)}
          className={`${currentPage === num ? "bg-[#5B4CE6] text-white rounded-xl" : ""} hover:text-primaryHover w-10 h-10`}
          key={i}
        >
          {num}
        </button>
      ))}

      <button
        className="text-[#0F172A] px-4 py-3 rounded-xl border border-[#E2E8F0]"
        onClick={() => handleChangePage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default ResultInstructorPagination;
