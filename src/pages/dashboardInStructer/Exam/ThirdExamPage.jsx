import React from 'react'
import { NavLink } from "react-router-dom";
import Container from '../../../components/Ui/Container';
import Button from '../../../components/Ui/Button';
import { useNavigate } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";

function ThirdExamPage() {
  const navigate=useNavigate()
  return (
    <>
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
          <div className="flex-1 h-[6px] rounded-full  bg-purple-500"></div>
        </div>

        {/* content */}
        <div className="flex flex-col justify-start mt-20 gap-4">
          <h2 className="text-[32px] font-bold">Publishing Exam</h2>
          <p className="text-gray">publish Exam or save as Draft</p>
        </div>
        <div className="border border-[#1F1F1F] rounded-md flex items-center gap-6 p-4">
        
          <div className="flex items-center gap-4">
            <img src="/images/Icon.png" alt="Icon" />
            <div className="flex flex-col ">
              <h3 className="text-[24px] font-bold leading-tight">
                Exam Configured
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                Everything looks great!
              </p>
            </div>
          </div>

          {/* تفاصيل العنوان والتاريخ والأسئلة */}
          <div className="flex flex-col justify-center p-4 rounded-md">
            <div className="flex gap-2">
              <p className="text-gray-500 font-semibold w-[60px] leading-tight">
                Title:
              </p>
              <p className="font-semibold leading-tight">
                Mathematics 101 Midterm
              </p>
            </div>
            <div className="flex gap-2 mt-1">
              <p className="text-gray-500 font-semibold w-[60px] leading-tight">
                Date:
              </p>
              <p className="leading-tight">12 April, 2026</p>
            </div>
            <div className="flex gap-2 mt-1">
              <p className="text-gray-500 font-semibold w-[60px] leading-tight">
                Questions:
              </p>
              <p className="leading-tight">45 Questions</p>
            </div>
          </div>

          {/* الصورة على اليمين */}
          <div className="flex-grow flex justify-end">
            <img
              src="/images/unsplash_xD2famaJ44w.png"
              alt="Exam Icon"
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <Button
            className="px-8 py-3 rounded-lg bg-gray-200"
            variant="secondary"
          >
            save draft
          </Button>

          <NavLink
            className="px-10 py-3 rounded-lg bg-[#5B4CE6] text-white"
            to="/instructer/exam/second"
          >
            publish
          </NavLink>
        </div>
      </Container>
    </>
  );
}

export default ThirdExamPage;