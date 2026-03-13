import { useState } from "react"
import TextEditor from "../../Ui/TextEditor"
import Input from "../../Ui/Input"
import { FaChevronDown } from "react-icons/fa"

export default function QuestionCard({ index }) {
  const [open, setOpen] = useState(false)

  const [question, setQuestion] = useState("")
  const [options, setOptions] = useState(["", "", "", ""])

  const handleOptionChange = (value, i) => {
    const newOptions = [...options]
    newOptions[i] = value
    setOptions(newOptions)
  }

  return (
    <div className="border border-gray/20 rounded-lg ">
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between p-4 cursor-pointer"
      >
        <h4 className="font-semibold">Question {index + 1}</h4>

        <FaChevronDown
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </div>

      {open && (
        <div className="p-4 pt-0 space-y-4">
          <TextEditor
            value={question}
            onChange={setQuestion}
            placeholder="Type your question..."
          />

          <div className="grid grid-cols-2 gap-3">
            {options.map((opt, i) => (
              <Input
                key={i}
                placeholder={`Option ${i + 1}`}
                value={opt}
                onChange={(e) => handleOptionChange(e.target.value, i)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
