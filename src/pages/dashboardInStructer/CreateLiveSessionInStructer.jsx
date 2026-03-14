import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { liveSessionSchema, liveSessionDefaultValues } from "../../utils/validation/index"
import FormInput from "../../components/Ui/FormInput"
import FormSelect from "../../components/Ui/FormSelect"
import FormTextarea from "../../components/Ui/FormTextarea"
import ToggleSwitch from "../../components/Ui/ToggleSwitch"
import InfoCard from "../../components/Ui/InfoCard"
import PageHeader from "../../components/Ui/PageHeader"
import HoverCard from "../../components/Ui/HoverCard"
import Button from "../../components/Ui/Button"
import {
  courseOptions,
  durationOptions,
  stageOptions,
  infoCardsData,
} from "../../data/createLiveSessionData"

export default function CreateLiveSessionInStructer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(liveSessionSchema),
    defaultValues: liveSessionDefaultValues,
  })

  const onSubmit = (data) => {
    console.log(data)
    // call api to create live session with data
  }

  return (
    <div className="text-grayDark">
      <div className="">
        {/* Header Section */}
        <PageHeader
          breadcrumbs={["Live Sessions", "Create New"]}
          title="Create"
          highlightedText="New Live Session"
        />

        {/* Form Section */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <HoverCard className="mb-6">
            <div className="bg-white rounded-xl shadow-sm border border-transparent p-8">
              <div className="space-y-6">
                <FormInput
                  label="Session Title"
                  placeholder="e.g. Advanced Calculus - Weekly Seminar"
                  error={errors.sessionTitle?.message}
                  register={register("sessionTitle")}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormSelect
                    label="Educational Stage"
                    placeholder="Select Stage"
                    options={stageOptions}
                    error={errors.educationalStage?.message}
                    register={register("educationalStage")}
                  />

                  <FormSelect
                    label="Course"
                    placeholder="Select Course"
                    options={courseOptions}
                    error={errors.course?.message}
                    register={register("course")}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <FormInput
                    label="Date"
                    type="date"
                    error={errors.date?.message}
                    register={register("date")}
                  />

                  <FormInput
                    label="Start Time"
                    type="time"
                    error={errors.startTime?.message}
                    register={register("startTime")}
                  />

                  <FormSelect
                    label="Duration"
                    options={durationOptions}
                    register={register("duration")}
                  />
                </div>

                <FormTextarea
                  label="Description"
                  placeholder="Briefly describe what will be covered in this session..."
                  error={errors.description?.message}
                  register={register("description")}
                />

                <ToggleSwitch
                  label="Show to students"
                  description="Instantly notify enrolled students about this live session"
                  register={register("notifyStudents")}
                />
              </div>

              <div className="border-t border-bdColor pt-6 mt-8 flex justify-end gap-4">
                <Button type="button" variant="secondary">
                  Cancel
                </Button>
                <Button type="submit" variant="primary">
                  Create Session
                </Button>
              </div>
            </div>
          </HoverCard>
        </form>

        {/* Info Cards Section */}
        <HoverCard className="mb-6" tabIndex={0}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-1">
            {infoCardsData.map((card, index) => (
              <InfoCard
                key={index}
                icon={<card.Icon className="h-6 w-6" />}
                title={card.title}
                description={card.description}
                variant={card.variant}
              />
            ))}
          </div>
        </HoverCard>
      </div>
    </div>
  )
}
