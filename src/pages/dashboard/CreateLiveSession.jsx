import React from "react";
import { useForm } from "react-hook-form";

export default function CreateLiveSession() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      duration: "60 min",
      notifyStudents: true,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    // call api to create live session with data
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans text-gray-800">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div
          className="mb-6 rounded-xl bg-white p-6 relative group"
          tabIndex={0}
        >
          <div
            aria-hidden="true"
            className="absolute -inset-2 rounded-xl border-2 border-[#2F80ED] opacity-0 translate-y-1 transition-all duration-150 group-hover:opacity-100 group-focus-within:opacity-100 group-hover:translate-y-0 group-focus-within:translate-y-0 pointer-events-none"
          />
          <div className="text-sm text-gray-500 mb-2">
            Live Sessions <span className="mx-1">&gt;</span>{" "}
            <span className="font-medium text-gray-900">Create New</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">
            Create{" "}
            <span className="bg-yellow-300 text-gray-900 px-2 rounded-sm">
              New
            </span>{" "}
            Live Session
          </h1>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="relative group">
            <div
              aria-hidden="true"
              className="absolute -inset-2 rounded-xl border-2 border-[#2F80ED] shadow-[0_6px_18px_rgba(47,128,237,0.08)] opacity-0 translate-y-1 transition-all duration-150 group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none"
            />
            <div className="bg-white rounded-xl shadow-sm border border-transparent p-8 mb-6 relative z-10">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Session Title
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Advanced Calculus - Weekly Seminar"
                    className={`w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-indigo-500 ${
                      errors.sessionTitle ? "border-red-500" : "border-gray-300"
                    }`}
                    {...register("sessionTitle", {
                      required: "Session Title is required",
                    })}
                  />
                  {errors.sessionTitle && (
                    <span className="text-red-500 text-xs mt-1 block">
                      {errors.sessionTitle.message}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Educational Stage
                    </label>
                    <select
                      className={`w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-indigo-500 bg-white ${
                        errors.educationalStage
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      {...register("educationalStage", {
                        required: "Stage is required",
                      })}
                    >
                      <option value="">Select Stage</option>
                      <option value="high-school">High School</option>
                      <option value="university">University</option>
                    </select>
                    {errors.educationalStage && (
                      <span className="text-red-500 text-xs mt-1 block">
                        {errors.educationalStage.message}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Course
                    </label>
                    <select
                      className={`w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-indigo-500 bg-white ${
                        errors.course ? "border-red-500" : "border-gray-300"
                      }`}
                      {...register("course", {
                        required: "Course is required",
                      })}
                    >
                      <option value="">Select Course</option>
                      <option value="math">Mathematics</option>
                      <option value="physics">Physics</option>
                    </select>
                    {errors.course && (
                      <span className="text-red-500 text-xs mt-1 block">
                        {errors.course.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Date
                    </label>
                    <input
                      type="date"
                      className={`w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-indigo-500 text-gray-600 ${
                        errors.date ? "border-red-500" : "border-gray-300"
                      }`}
                      {...register("date", { required: "Date is required" })}
                    />
                    {errors.date && (
                      <span className="text-red-500 text-xs mt-1 block">
                        {errors.date.message}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Start Time
                    </label>
                    <input
                      type="time"
                      className={`w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-indigo-500 text-gray-600 ${
                        errors.startTime ? "border-red-500" : "border-gray-300"
                      }`}
                      {...register("startTime", {
                        required: "Start time is required",
                      })}
                    />
                    {errors.startTime && (
                      <span className="text-red-500 text-xs mt-1 block">
                        {errors.startTime.message}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Duration
                    </label>
                    <select
                      className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                      {...register("duration")}
                    >
                      <option value="30 min">30 min</option>
                      <option value="45 min">45 min</option>
                      <option value="60 min">60 min</option>
                      <option value="90 min">90 min</option>
                      <option value="120 min">120 min</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Briefly describe what will be covered in this session..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                    {...register("description")}
                  ></textarea>
                </div>

                <div className="border-t border-gray-200 pt-6 mt-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">
                      Show to students
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Instantly notify enrolled students about this live session
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      {...register("notifyStudents")}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                  </label>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6 mt-8 flex justify-end gap-4">
                <button
                  type="button"
                  className="px-6 py-2 border border-gray-300 rounded-md text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-indigo-600 rounded-md text-sm font-semibold text-white hover:bg-indigo-700 transition-colors"
                >
                  Create Session
                </button>
              </div>
            </div>
          </div>
        </form>

        {/* Info Cards Section (single surrounding border) */}
        <div className="relative group mb-6" tabIndex={0}>
          <div
            aria-hidden="true"
            className="absolute -inset-2 rounded-xl border-2 border-[#2F80ED] opacity-0 translate-y-1 transition-all duration-150 group-hover:opacity-100 group-focus-within:opacity-100 group-hover:translate-y-0 group-focus-within:translate-y-0 pointer-events-none"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 p-1">
            <div className="bg-indigo-50 rounded-xl p-6 flex gap-4">
              <div className="text-indigo-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-xs font-bold text-indigo-500 tracking-wider mb-2 uppercase">
                  Pro Tip
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Sessions scheduled for 60 minutes tend to have 20% higher
                  engagement rates.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 flex gap-4">
              <div className="text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-500 tracking-wider mb-2 uppercase">
                  Privacy
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  All sessions are recorded by default and stored in the course
                  archive.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 flex gap-4">
              <div className="text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-500 tracking-wider mb-2 uppercase">
                  Quick Link
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  The meeting URL will be generated automatically after creation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}