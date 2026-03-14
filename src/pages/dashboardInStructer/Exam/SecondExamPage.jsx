import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Container from "../../../components/Ui/Container";
import Button from "../../../components/Ui/Button";
function SecondExamPage() {
    const navigate = useNavigate();
  return (
    <Container>
      <div className="flex items-center gap-3 mb-6">
        <FaLongArrowAltLeft
          className="cursor-pointer"
          onClick={() => navigate(-1)}
          size={24}
        />
        <h2 className="text-2xl font-semibold">Create New Exam</h2>
      </div>

      <h4 className="mb-4 text-gray-500">Step two of three</h4>

      {/* progress */}
      <div className="flex gap-3 mb-12">
        <div className="flex-1 h-[6px] rounded-full bg-purple-500"></div>
        <div className="flex-1 h-[6px] rounded-full bg-purple-500"></div>
        <div className="flex-1 h-[6px] rounded-full  bg-[#E2E8F0]"></div>
      </div>

      {/* content */}
      <div className="flex flex-col justify-start mt-20 gap-4">
        <h2 className="text-[32px] font-bold">
          How would you like to add questions?
        </h2>
        <p className="text-gray-500">
          Choose the method that works best for your content.
        </p>
      </div>

      {/* Upload Option */}
      <div className="w-[1076px] h-[253.75px] border rounded-[16px] p-5 gap-5 my-10">
        <div className="flex justify-between items-center mb-4">
          <img src="/images/Background.png" alt="" />
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold">Upload File</h3>
            <p className="text-gray-500 text-sm">
              Upload a PDF, Word, or Excel document. Our AI will automatically
              parse the questions.
            </p>
          </div>
          <img src="/images/Border.png" alt="" />
        </div>

        {/* Upload Box */}
        <label className="w-[1034px] h-[140px] border-2 border-dashed rounded-[12px] p-8 flex flex-col justify-center items-center my-5 cursor-pointer">
          <input type="file" className="hidden" />
          <img src="/images/Vector.png" alt="" />
          <p className="mt-2 text-gray-600">Tap to browse files</p>
          <p className="text-gray-400 text-sm">PDF, DOCX, XLSX (Max 20MB)</p>
        </label>
      </div>

      {/* Type Manually */}
      <div className="w-[1076px] h-[121px] border-2 border-[#6B92E0] rounded-[12px] mt-5 flex items-center gap-4 p-4">
        <div className="flex flex-col flex-1 items-center justify-center">
          <img src="/images/Overlay.png" alt="Overlay" className="mb-2" />
          <h3 className="text-lg font-semibold">Type Manually</h3>
          <p className="text-gray-500 text-sm mt-2">
            Craft each question yourself
          </p>
        </div>
      </div>

      <div className="w-[604px] h-[96px] mt-8">
        <h3 className="text-[32px] font-bold">Question Order</h3>
        <p className="text-gray text-sm mt-1">
          Choose how questions should be presented to your students during the
          exam.
        </p>
      </div>

      {/* AI Shuffle Options */}
      <div className="w-[1080px] mt-4 flex flex-col gap-2">
        <div className="w-full h-[130px] flex justify-between items-center border-2 border-[#6B92E0] rounded-[12px] p-4">
          <img src="/images/Background (1).png" alt="" />
          <div className="flex flex-col">
            <h3 className="font-semibold text-lg">AI Shuffle Questions</h3>
            <p className="text-gray-500 text-sm">
              Our AI engine generates a unique sequence for every student to
              maintain high academic integrity.
            </p>
          </div>
          <img src="/images/Container (2).png" alt="" />
        </div>
        <div className="w-full h-[130px] flex justify-between items-center border-2 border-[#6B92E0] rounded-[12px] p-4">
          <img src="/images/Background (1).png" alt="" />
          <div className="flex flex-col">
            <h3 className="font-semibold text-lg">AI Shuffle Questions</h3>
            <p className="text-gray text-sm">
              Our AI engine generates a unique sequence for every student to
              maintain high academic integrity.
            </p>
          </div>
          <img src="/images/Border (1).png" alt="" />
        </div>
      </div>
      <div className="flex justify-between mt-6">
        <Button
          variant="secondary"
          className="px-8 py-3 rounded-lg bg-gray-200"
        >
          Cancel
        </Button>

        <NavLink
          className="px-10 py-3 rounded-lg bg-[#5B4CE6] "
          to="/instructer/exam/third"
        >
          Next
        </NavLink>
      </div>
    </Container>
  );
}

export default SecondExamPage;