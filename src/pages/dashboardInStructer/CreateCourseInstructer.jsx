import React, { useRef } from "react"
import Container from "../../components/Ui/Container"
import Header from "../../components/new-course/Header"
import BasicInformation from "../../components/new-course/BasicInformation"
import PricingAccess from "../../components/new-course/PricingAccess"
import CourseCover from "../../components/new-course/CourseCover"
import Settings from "../../components/new-course/Settings"
import SaveButton from "../../components/new-course/SaveButton"

import { useCourseForm } from "../../hooks/useCourseForm"

export default function CreateCourseInstructer() {
  const fileInputRef = useRef(null)

  const {
    courseData,
    imagePreview,
    isSaving,
    showMessage,
    errors,
    handleChange,
    handleImageChange,
    saveCourse,
  } = useCourseForm()

  return (
    <Container>
      <Header
        title="Create New Course"
        subTitle="Fill in the details below to publish your new learning material."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-[32px]">
        {/* Left Column: Form Content */}
        <div className="lg:col-span-2 space-y-4">
          <BasicInformation
            courseData={courseData}
            handleChange={handleChange}
            errors={errors}
          />
          <PricingAccess
            courseData={courseData}
            handleChange={handleChange}
            errors={errors}
          />
        </div>

        {/* Right Column: Media & Settings */}
        <div className="space-y-4">
          <CourseCover
            image={imagePreview}
            fileInputRef={fileInputRef}
            handleImageChange={handleImageChange}
            errors={errors}
          />
          <Settings courseData={courseData} handleChange={handleChange} />
        </div>
      </div>

      <SaveButton
        onClick={saveCourse}
        isSaving={isSaving}
        showMessage={showMessage}
      />
    </Container>
  )
}
