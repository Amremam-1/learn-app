import React, { useEffect, useState } from "react";
import ResultInstructorCard from "../../components/DashboardInstructer/ResultInstructorCard";
import { RxPeople } from "react-icons/rx";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FiCheckCircle, FiAward } from "react-icons/fi";
import ResultInstructorSearch from "../../components/DashboardInstructer/ResultInstructorSearch";
import ResultInstructorPagination from "../../components/DashboardInstructer/ResultInstructorPagination";
import { usePDF } from "react-to-pdf";

const results = [
  {
    icon: <RxPeople />,
    title: "total student",
    avgNum: "12",
    colorBgIcon: "#5B4CE6",
  },
  {
    icon: <FaArrowTrendUp />,
    title: "Average Score",
    avgNum: "76%",
    colorBgIcon: "#22C55E",
  },
  {
    icon: <FiAward />,
    title: "highest score",
    avgNum: "96%",
    colorBgIcon: "#5B4CE6",
  },
  {
    icon: <FiCheckCircle />,
    title: "pass rate",
    avgNum: "83%",
    colorBgIcon: "#22C55E",
  },
];

const defaultData = [
  {
    photo: "https://i.pravatar.cc/150?u=5",
    name: "Alex Johnson",
    subtitle: "Computer Science",
    quiz1: 85,
    quiz2: 90,
    quiz3: 78,
    midterm: 88,
    final: 92,
    average: 86.6,
    grade: "A",
    status: "Passed",
    course: "physics",
  },
  {
    photo: "https://i.pravatar.cc/150?u=2",
    name: "Sarah Miller",
    subtitle: "Mathematics",
    quiz1: 45,
    quiz2: 50,
    quiz3: 40,
    midterm: 55,
    final: 48,
    average: 47.6,
    grade: "B",
    status: "passed",
    course: "physics",
  },
  {
    photo: "https://i.pravatar.cc/150?u=14",
    name: "Ali Miller",
    subtitle: "mathematics",
    quiz1: 45,
    quiz2: 50,
    quiz3: 40,
    midterm: 55,
    final: 48,
    average: 47.6,
    grade: "C",
    status: "passed",
    course: "chemistry",
  },
  {
    photo: "https://i.pravatar.cc/150?u=16",
    name: "Sami Miller",
    subtitle: "Mathematics",
    quiz1: 45,
    quiz2: 50,
    quiz3: 40,
    midterm: 55,
    final: 48,
    average: 47.6,
    grade: "F",
    status: "failed",
    course: "mathematics",
  },
  {
    photo: "https://i.pravatar.cc/150?u=14",
    name: "Sami Miller",
    subtitle: "Mathematics",
    quiz1: 45,
    quiz2: 50,
    quiz3: 40,
    midterm: 55,
    final: 48,
    average: 47.6,
    grade: "F",
    status: "failed",
    course: "mathematics",
  },
  {
    photo: "https://i.pravatar.cc/150?u=19",
    name: "Sami Miller",
    subtitle: "Mathematics",
    quiz1: 45,
    quiz2: 50,
    quiz3: 40,
    midterm: 55,
    final: 48,
    average: 47.6,
    grade: "F",
    status: "failed",
    course: "mathematics",
  },
];

const Courses = [
  { id: 1, name: "Mathematics" },
  { id: 2, name: "Chemistry" },
  { id: 3, name: "Physics" },
];

const ResultsInstructer = () => {
  const [filteredData, setFilteredData] = useState(defaultData);
  const [search, setSearch] = useState("");
  const { toPDF, targetRef } = usePDF({
    filename: "result.pdf",
  });
  const [isCourseModel, setIsCourseModel] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 10;
  const lastIndex = currentPage * studentsPerPage;
  const firstIndex = lastIndex - studentsPerPage;

  const currentStudents = filteredData.slice(firstIndex, lastIndex);

  const handleChangePage = (pageNumber) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(pageNumber);
  };

  const handleFilterWithName = () => {
    const filtered = defaultData.filter((item) =>
      item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
    );
    setFilteredData(filtered);
  };

  const handleFilterByCourse = (item) => {
    const filtered = defaultData.filter(
      (student) =>
        student.course.toLocaleLowerCase() === item.toLocaleLowerCase(),
    );
    setFilteredData(filtered);
    setIsCourseModel(false);
  };

  useEffect(() => {
    handleFilterWithName();
  }, [search]);

  return (
    <div className="grid lg:gap-6 gap-4 overflow-x-hidden">
      <h1 className="capitalize lg:text-2xl text-xl"> students results</h1>
      <div className="grid gap-5">
        <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-7 gap-3">
          {results.map((item, idx) => (
            <ResultInstructorCard
              key={idx}
              icon={item.icon}
              title={item.title}
              colorBgIcon={item.colorBgIcon}
              AvgNum={item.avgNum}
            />
          ))}
        </div>
        <ResultInstructorSearch
          search={search}
          setSearch={setSearch}
          isCourseModel={isCourseModel}
          setIsCourseModel={setIsCourseModel}
          handleFilterByCourse={handleFilterByCourse}
          Courses={Courses}
          setSelectedCourse={setSelectedCourse}
          selectedCourse={selectedCourse}
          toPDF={toPDF}
        />
        <div ref={targetRef} className="lg:w-full overflow-x-auto w-full mt-4">
          <table className="w-full capitalize lg:text-sm text-[12px] text-[#0A0A0A] table-auto">
            <thead className="bg-[#F4F6FB] rounded-tl-3xl rounded-tr-3xl">
              <tr className="border-b-2 border-[#E5E7EB]">
                <th className="py-2 text-left font-normal pl-2">Photo</th>
                <th className="text-left font-normal pl-2 lg:pl-0" colSpan={2}>
                  Student Name
                </th>
                <th className="text-left font-normal lg:pl-0 pl-2">Quiz 1</th>
                <th className="text-left font-normal lg:pl-0 pl-2">Quiz 2</th>
                <th className="text-left font-normal lg:pl-0 pl-2">Quiz 3</th>
                <th className="text-left font-normal lg:pl-0 pl-2">Midterm</th>
                <th className="text-left font-normal lg:pl-0 pl-2">Final</th>
                <th className="text-left font-normal lg:pl-0 pl-2">Average</th>
                <th className="text-left font-normal lg:pl-0 pl-2">Grade</th>
                <th className="font-normal lg:pl-0 pl-2 text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              {currentStudents.length > 0
                ? currentStudents.map((std, idx) => (
                    <Student key={idx} student={std} />
                  ))
                : ""}
            </tbody>
          </table>
        </div>
        <ResultInstructorPagination
          totalStudents={filteredData.length}
          handleChangePage={handleChangePage}
          currentPage={currentPage}
          studentsPerPage={studentsPerPage}
        />
      </div>
    </div>
  );
};

export default ResultsInstructer;

const Student = ({ student }) => {
  return (
    <tr className="text-left border-b border-[#E5E7EB]">
      <td className="pl-2">
        <img
          className="w-10 h-10 rounded-full"
          src={student.photo}
          alt={student.name}
        />
      </td>
      <td className="py-4 lg:px-0 px-3" colSpan={2}>
        <h2 className="font-medium">{student.name}</h2>
        <span className="text-[#6A7282]">{student.subtitle}</span>
      </td>
      <td className="lg:px-0 pl-2">{student.quiz1}/100</td>
      <td className="lg:px-0 pl-2">{student.quiz2}/100</td>
      <td className="lg:px-0 pl-2">{student.quiz3}/100</td>
      <td className="lg:px-0 pl-2">{student.midterm}/100</td>
      <td className="lg:px-0 pl-2">{student.final}/100</td>
      <td className="lg:px-0 pl-2">{student.average}%</td>
      <td>
        <span
          className={`${
            student.grade === "A"
              ? "bg-[#EBF3FD] text-[#2563EB]"
              : student.grade === "B"
                ? "bg-[#F0FDF4] text-[#22C55E]"
                : student.grade === "C"
                  ? "bg-[#FEFCE8] text-[##F59E0B]"
                  : student.grade === "F"
                    ? "bg-red-50 text-red-500"
                    : ""
          } rounded-[7.56px] px-2 py-1`}
        >
          {student.grade}
        </span>
      </td>
      <td className="text-center">
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            student.status.toLowerCase() === "passed"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-500"
          } `}
        >
          {student.status}
        </span>
      </td>
    </tr>
  );
};
