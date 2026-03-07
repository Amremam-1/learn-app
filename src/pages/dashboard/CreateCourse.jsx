import React, { useRef, useState } from "react";
import Container from "../../components/Ui/Container";

import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaMoneyBills } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa";
import { MdOutlineImage } from "react-icons/md";

import Button from "../../components/Ui/Button";
import Input from "../../components/Ui/Input";
import ToggleSwitch from "../../components/Ui/ToggleSwitch";
import Select from "../../components/Ui/Select";

import {
  courseStages,
  courseSubjects,
  courseLanguages,
} from "../../data/mockData";

export default function CreateCourse() {
  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [errors, setErrors] = useState({});

  const [courseData, setCourseData] = useState({
    title: "",
    stage: "",
    subject: "",
    description: "",
    price: "",
    isFree: false,
    language: "",
    studentVisible: true,
    coverImage: null,
  });

  const handleChange = (field, value) => {
    setCourseData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSaveCourse = () => {
    const newErrors = {};

    if (!courseData.title) newErrors.title = "Course title is required";
    if (!courseData.stage) newErrors.stage = "Educational stage is required";
    if (!courseData.subject) newErrors.subject = "Subject is required";
    if (!courseData.description)
      newErrors.description = "Course description is required";
    if (!courseData.coverImage)
      newErrors.coverImage = "Course cover is required";
    if (!courseData.isFree && !courseData.price)
      newErrors.price = "Price is required";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    console.log("Course Data to Save:", courseData);

    // Reset form
    setCourseData({
      title: "",
      stage: "",
      subject: "",
      description: "",
      price: "",
      isFree: false,
      language: "",
      studentVisible: true,
      coverImage: null,
    });
    setImage(null);
    if (fileInputRef.current) fileInputRef.current.value = null;

    // Show success message
    setShowMessage(true);

    // Hide message after 2 seconds
    setTimeout(() => setShowMessage(false), 2000);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setCourseData((prev) => ({ ...prev, coverImage: file }));
    }
  };

  return (
    <Container>
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-[30px] leading-[36px] text-grayDark">
          Create New Course
        </h1>
        <p className="font-normal text-[16px] leading-[24px] text-gray">
          Fill in the details below to publish your new learning material to the
          platform.
        </p>
      </div>

      {/* Grid Layout: 2 cols */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-[32px]">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-4">
          {/* Basic Information */}
          <section className="rounded-[12px] border border-borderCard flex flex-col mb-8">
            {/* Icon + SubTitle */}
            <div className="flex p-6 items-center gap-2">
              <IoMdInformationCircleOutline className="size-5 text-primary" />
              <h2 className="font-bold text-[20px] leading-[28px] text-grayDark">
                Basic Information
              </h2>
            </div>
            {/* Course Info */}
            <div className="flex flex-col p-6 pt-0">
              {/* Title */}
              <div className="flex flex-col gap-2 w-full pb-[24px]">
                <p className="font-semibold text-grayLabel text-[14px] leading-[20px]">
                  Course Title
                </p>
                <Input
                  type="text"
                  value={courseData.title}
                  onChange={(e) => handleChange("title", e.target.value)}
                  placeholder="e.g. Advanced Mathematics for High School"
                />
                {errors.title && (
                  <p className="text-danger text-sm mt-1">{errors.title}</p>
                )}
              </div>
              {/* Stage + Subject */}
              <div className="flex justify-between gap-6">
                {/* Educational Stage */}
                <div className="flex flex-col gap-2 w-full pb-[24px]">
                  <p className="font-semibold text-grayLabel text-[14px] leading-[20px]">
                    Educational Stage
                  </p>
                  <Select
                    options={courseStages}
                    value={courseData.stage}
                    placeholder="Select Stage"
                    onChange={(selectedValue) =>
                      handleChange("stage", selectedValue)
                    }
                  />
                  {errors.stage && (
                    <p className="text-danger text-sm">{errors.stage}</p>
                  )}
                </div>
                {/* Subject */}
                <div className="flex flex-col gap-2 w-full pb-[24px]">
                  <p className="font-semibold text-grayLabel text-[14px] leading-[20px]">
                    Subject
                  </p>
                  <Select
                    options={courseSubjects}
                    value={courseData.subject}
                    placeholder="Select Subject"
                    onChange={(selectedValue) =>
                      handleChange("subject", selectedValue)
                    }
                  />
                  {errors.subject && (
                    <p className="text-danger text-sm">{errors.subject}</p>
                  )}
                </div>
              </div>
              {/* Course Description */}
              <div className="flex flex-col gap-2 w-full ">
                <p className="font-semibold text-grayLabel text-[14px] leading-[20px]">
                  Course Description
                </p>
                <textarea
                  value={courseData.description}
                  onChange={(e) => handleChange("description", e.target.value)}
                  placeholder="Provide a detailed overview of what students will learn..."
                  className="w-full rounded-[12px] border border-borderInput pt-[16px] pr-[14px] pl-[14px] h-[219px]"
                />
                {errors.description && (
                  <p className="text-danger text-sm">{errors.description}</p>
                )}
              </div>
            </div>
          </section>
          {/* Pricing & Access */}
          <section className="rounded-[12px] border border-borderCard flex flex-col ">
            {/* Icon + SubTitle */}
            <div className="flex p-6 items-center gap-2">
              <FaMoneyBills className="size-5 text-primary" />
              <h2 className="font-bold text-[20px] leading-[28px] text-grayDark">
                Pricing & Access
              </h2>
            </div>
            <div className="flex flex-col p-6 pt-0">
              <div className="flex flex-col gap-2 w-full">
                <p className="font-semibold text-grayLabel text-[14px] leading-[20px]">
                  Course Price
                </p>
                <div className="flex justify-between gap-6">
                  <div className="w-full">
                    <Input
                      type="text"
                      value={courseData.price}
                      onChange={(e) => handleChange("price", e.target.value)}
                      placeholder="0.00"
                      icon={<FaDollarSign />}
                    />
                    {errors.price && (
                      <p className="text-danger text-sm mt-1">{errors.price}</p>
                    )}
                    <p className="pt-2 text-textMuted text-[12px] leading-[16px]">
                      Suggested price: $49.99 - $129.99 based on <br /> subject
                      area.
                    </p>
                  </div>
                  {/* Rounded Switch */}
                  <div className="w-full flex gap-3">
                    <ToggleSwitch
                      checked={courseData.isFree}
                      onChange={(e) => handleChange("isFree", e.target.checked)}
                    />
                    <p className="font-medium text-grayLabel text-[14px] leading-[20px]">
                      This is a free course
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          {/* Course Cover */}
          <section className="rounded-[12px] border border-borderCard flex flex-col mb-8">
            <div className="p-6">
              <h2 className="font-bold text-[20px] leading-[28px] text-grayDark">
                Course Cover
              </h2>
            </div>

            <div className="flex flex-col p-6 pt-0">
              {/* Hidden input */}
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleImageChange}
                className="hidden"
              />

              {/* Upload Area */}
              <div
                onClick={() => fileInputRef.current.click()}
                className="flex flex-col justify-center items-center gap-2 bg-grayBgLight border-2 border-dashed border-borderInput p-6 mb-4 cursor-pointer"
              >
                {image ? (
                  <img
                    src={image}
                    alt="Course Cover"
                    className="max-h-[200px] object-contain"
                  />
                ) : (
                  <>
                    <MdOutlineImage className="w-[37px] h-[37px] text-iconGray pb-2" />
                    <p className="w-[202px] font-medium text-[14px] leading-[20px] text-grayLabel text-center">
                      Click to upload or drag and drop
                    </p>
                    <p className="w-[202px] font-normal text-[12px] leading-[16px] text-grayLabel text-center">
                      SVG, PNG, JPG or GIF (max. 800x450px)
                    </p>
                  </>
                )}
              </div>
              {errors.coverImage && (
                <p className="text-danger text-sm mb-1">{errors.coverImage}</p>
              )}
              {/* Button */}
              <Button
                variant="secondary"
                onClick={() => fileInputRef.current.click()}
                className="px-4 rounded-[12px] bg-bgLightBlue text-brandBlue font-bold text-[14px] leading-[20px] flex items-center justify-center"
              >
                Upload Image
              </Button>
            </div>
          </section>
          {/* Settings */}
          <section className="rounded-[12px] border border-borderCard flex flex-col mb-8 p-6">
            <h2 className="font-bold text-[20px] leading-[28px] text-grayDark">
              Settings
            </h2>
            {/* Rounded Switch */}
            <div className="w-full flex justify-between p-3 bg-bgLight mt-6 rounded-[8px]">
              <div className="flex flex-col">
                <p className="font-bold text-grayDark text-[14px] leading-[20px]">
                  Student Visibility
                </p>
                <p className="font-normal text-textMuted text-[10px] leading-[16px]">
                  Make course public now
                </p>
              </div>
              <ToggleSwitch
                checked={courseData.studentVisible}
                onChange={(e) =>
                  handleChange("studentVisible", e.target.checked)
                }
              />
            </div>
            {/* Language */}
            <div className="flex flex-col gap-2 w-full pt-8 pb-8">
              <p className="font-bold text-grayDark text-[14px] leading-[20px] pb-3">
                Language
              </p>
              <Select
                options={courseLanguages}
                value={courseData.language}
                onChange={(value) => handleChange("language", value)}
              />
            </div>
            <div className="border-t border-borderCard">
              <p className="font-regular text-[12px] leading-[19.5px] text-textMuted mt-4">
                * By creating this course, you agree to <br /> EdPlatform's
                Instructor Terms of Service and <br /> Content Guidelines.
              </p>
            </div>
          </section>
        </div>
      </div>
      <div className="pt-10 flex flex-col items-end">
        <Button
          onClick={handleSaveCourse}
          className="px-6 py-3 rounded-base bg-[#5B4CE6] text-white font-semibold text-[16px] leading-[24px] flex items-center justify-center w-[200px]"
          disabled={isSaving}
        >
          {isSaving ? "Saving..." : "Save Course"}
        </Button>
        {showMessage && (
          <p className="text-success font-semibold mt-2 animate-fade-in">
            Course saved successfully!
          </p>
        )}
      </div>
    </Container>
  );
}
