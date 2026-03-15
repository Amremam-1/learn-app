import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Input from "../../../components/Ui/Input";
import Button from "../../../components/Ui/Button";

import { FaLongArrowAltLeft } from "react-icons/fa";
import Container from "../../../components/Ui/Container";

function FirstExamPage() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const startDate = watch("startDate");

  const onSubmit = (data) => {
    console.log(data);
    navigate("/instructer/exam/second");
  };

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

      <h4 className="mb-4 text-gray-500">Step one of three</h4>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        {/* Exam Title */}
        <div>
          <label className="block mb-2">Exam Title</label>

          <Input
            type="text"
            placeholder="Midterm Mathematics"
            className="w-full p-3 rounded-lg bg-[#E2E8F0]"
            {...register("examTitle", {
              required: "Exam title is required",
              minLength: {
                value: 3,
                message: "Title must be at least 3 characters",
              },
            })}
          />
          {errors.examTitle && (
            <p className="text-red-500 text-sm">{errors.examTitle.message}</p>
          )}
        </div>

        {/* Course */}
        <div>
          <label className="block mb-2">Select Course</label>
          <select
            className="w-full p-3 rounded-lg bg-[#E2E8F0]"
            {...register("course", { required: "Course is required" })}
          >
            <option value="">Select Course</option>
            <option>Advanced Mathematics</option>
            <option>Physics 101</option>
            <option>Chemistry Basics</option>
            <option>Biology Lab</option>
          </select>

          {errors.course && (
            <p className="text-red-500 text-sm">{errors.course.message}</p>
          )}
        </div>

        {/* Education Stage */}
        <div>
          <label className="block mb-2">Education Stage</label>
          <select
            className="w-full p-3 rounded-lg bg-[#E2E8F0]"
            {...register("educationStage", {
              required: "Education stage is required",
            })}
          >
            <option value="">Select Stage</option>
            <option>Year 2</option>
            <option>Year 3</option>
            <option>Grade 9</option>
            <option>Grade 10</option>
            <option>Grade 11</option>
          </select>

          {errors.educationStage && (
            <p className="text-red-500 text-sm">
              {errors.educationStage.message}
            </p>
          )}
        </div>

        {/* Duration */}
        <div>
          <label className="block mb-2">Duration (minutes)</label>

          <Input
            type="range"
            min="0"
            max="120"
            step="30"
            className="w-full"
            {...register("duration", {
              required: "Duration is required",
            })}
          />
        </div>

        {/* Start Date */}
        <div>
          <label className="block mb-2">Start Date & Time</label>

          <div className="flex gap-4">
            <Input
              type="date"
              className="w-full p-3 rounded-lg bg-[#E2E8F0]"
              {...register("startDate", {
                required: "Start date is required",
              })}
            />

            <Input
              type="time"
              className="w-[160px] p-3 rounded-lg bg-[#E2E8F0]"
              {...register("startTime", {
                required: "Start time is required",
              })}
            />
          </div>

          {errors.startDate && (
            <p className="text-red-500 text-sm">{errors.startDate.message}</p>
          )}
        </div>

        {/* End Date */}
        <div>
          <label className="block mb-2">End Date & Time</label>

          <div className="flex gap-4">
            <Input
              type="date"
              className="w-full p-3 rounded-lg bg-[#E2E8F0]"
              {...register("endDate", {
                required: "End date is required",
                validate: (value) =>
                  value >= startDate || "End date must be after start date",
              })}
            />

            <Input
              type="time"
              className="w-[160px] p-3 rounded-lg bg-[#E2E8F0]"
              {...register("endTime", {
                required: "End time is required",
              })}
            />
          </div>

          {errors.endDate && (
            <p className="text-red-500 text-sm">{errors.endDate.message}</p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <Button
            type="button"
            variant="secondary"
            onClick={() => reset()}
            className="px-8 py-3 rounded-lg bg-gray-200"
          >
            Cancel
          </Button>

          <button
            type="submit"
            className="px-10 py-3 rounded-lg bg-[#5B4CE6] text-white"
          >
            Next
          </button>
        </div>
      </form>
    </Container>
  );
}

export default FirstExamPage;
