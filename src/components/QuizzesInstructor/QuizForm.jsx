import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { quizSchema } from "../../utils/validation/quizSchema"
import Input from "../../components/Ui/Input"
import Select from "../../components/Ui/Select"
import Button from "../../components/Ui/Button"
import { FaRegCircleQuestion } from "react-icons/fa6"

const QuizForm = ({ onNext }) => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(quizSchema),
  })

  const onSubmit = (data) => {
    console.log(data)
    onNext(data)
  }
  return (
    <form className="grid gap-6" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className="block text-sm font-medium mb-3">Quiz Title</label>
        <Input
          placeholder="e.g., Midterm Exam - Week 5"
          className="bg-slate-100 border-slate-300"
          {...register("title")}
        />

        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Select Course</label>

        <Select
          placeholder="Choose a course..."
          options={[
            "Introduction to Computer Science",
            "Data Structures and Algorithms",
            "Web Development Basics",
            "Database Systems",
            "Software Engineering Principles",
          ]}
          className="bg-slate-100 border-slate-300"
          onChange={(value) =>
            setValue("course", value, { shouldValidate: true })
          }
        />
        {errors.course && (
          <p className="text-red-500 text-sm mt-1">{errors.course.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-3">Quiz Topic</label>
        <Input
          placeholder="e.g., Voltage Dividers and Mesh Analysis"
          className="bg-slate-100 border-slate-300 "
          {...register("topic")}
        />
        {errors.topic && (
          <p className="text-red-500 text-sm mt-1">{errors.topic.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-3">
          Number of Questions
        </label>
        <div className="relative">
          <Input
            type="number"
            placeholder="10"
            className="bg-slate-100 border-slate-300"
            {...register("questions", { valueAsNumber: true })}
          />
          <FaRegCircleQuestion className="absolute right-4 top-1/2 -translate-y-1/2 text-indigo-600" />
        </div>
        {errors.questions && (
          <p className="text-red-500 text-sm mt-1">
            {errors.questions.message}
          </p>
        )}
      </div>

      <div className="flex items-center justify-between">
        <Button
          onClick={() => reset()}
          variant="secondary"
          className="px-8"
          type="button"
        >
          Cancel
        </Button>
        <Button className="px-10" type="submit">
          Next
        </Button>
      </div>
    </form>
  )
}

export default QuizForm
