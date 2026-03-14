import React, { useState, useCallback } from "react"
import { IoPersonOutline } from "react-icons/io5"
import { FaPen, FaTrash } from "react-icons/fa6"
import ToggleSwitch from "../../Ui/ToggleSwitch"
import { liveSessionsData, previousSessions } from "../../../data/mockData"
import PreviousSessionCard from "./PreviousSessionCard"
import { IoMdCalendar } from "react-icons/io"
import { RxCounterClockwiseClock } from "react-icons/rx"
import toast from "react-hot-toast"

export default function UpcomingLiveSessions() {
  const [showToStudents, setShowToStudents] = useState(true)

  const handleToggle = useCallback((e) => {
    const isOn = e.target.checked
    setShowToStudents(isOn)

    toast.success("Notifications sent successfully to all enrolled students!")
  }, [])

  const thClass =
    "text-left py-4 px-4 text-[13px] sm:text-[14px] font-semibold text-desc"
  const tdClass =
    "py-4 px-4 text-[13px] sm:text-[14px] text-desc border-t border-borderCard font-semibold"

  return (
    <>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-8  ">
        <div className="flex items-center gap-2">
          <IoMdCalendar className="size-5 text-primary" />
          <h2 className="font-bold text-[16px] sm:text-[18px] text-grayDark">
            Upcoming Schedule
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-grayLabel">
            Show to students
          </span>
          <ToggleSwitch checked={showToStudents} onChange={handleToggle} />
        </div>
      </div>
      <div className="mt-4 rounded-lg border-2 border-bdColor bg-white overflow-hidden">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead className="bg-bgLight">
              <tr>
                <th className={thClass}>Session Title</th>
                <th className={thClass}>Course</th>
                <th className={thClass}>Stage</th>
                <th className={thClass}>Date & Time</th>
                <th className={thClass}>Duration</th>
                <th className={thClass}>Students</th>
                <th className={thClass}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {liveSessionsData.map((session) => (
                <tr key={session.id} className="border-t border-borderCard">
                  <td className={tdClass}>
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-1 h-10 rounded-full shrink-0 ${
                          session.status === "live"
                            ? "bg-success"
                            : "bg-grayLight"
                        }`}
                      />
                      <span className="font-medium">{session.title}</span>
                    </div>
                  </td>
                  <td className={tdClass}>{session.course}</td>
                  <td className={tdClass}>
                    <span className="inline-flex px-3 py-1 rounded-full bg-grayBgLight text-grayLabel text-[12px] sm:text-[13px] font-medium">
                      {session.stage}
                    </span>
                  </td>
                  <td className={tdClass}>
                    <span className="whitespace-pre-line">{`${session.date},\n${session.time}`}</span>
                  </td>
                  <td className={tdClass}>{session.duration}</td>
                  <td className={tdClass}>
                    <div className="flex items-center gap-2">
                      <IoPersonOutline className="size-4 text-iconGray shrink-0" />
                      <span>{session.students}</span>
                    </div>
                  </td>
                  <td className={tdClass}>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        className="p-2 rounded-lg hover:bg-grayBgLight text-iconGray hover:text-grayDark transition-colors"
                        aria-label="Edit"
                      >
                        <FaPen className="size-4" />
                      </button>
                      <button
                        type="button"
                        className="p-2 rounded-lg hover:bg-grayBgLight text-iconGray hover:text-grayDark transition-colors"
                        aria-label="Delete"
                      >
                        <FaTrash className="size-4" />
                      </button>
                      {session.status === "live" ? (
                        <button
                          type="button"
                          className="px-4 py-2 rounded-lg bg-primary text-white font-medium text-[13px] hover:bg-primaryHover transition-colors"
                        >
                          Join Room
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="px-4 py-2 rounded-lg bg-grayBgLight text-grayLabel font-medium text-[13px] cursor-not-allowed"
                          disabled
                        >
                          Pending
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Previous Lives */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-8">
        <div className="flex items-center gap-2">
          <RxCounterClockwiseClock className="size-5 text-textMuted" />
          <h2 className="font-bold text-[16px] sm:text-[18px] text-grayDark">
            Previous Lives
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="#"
            className="text-sm font-medium text-primary hover:underline"
          >
            View All Archive
          </a>
        </div>
      </div>

      {/* Previous Lives Cards */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(298.66px,298.66px))] gap-8 mt-4 justify-center">
        {previousSessions.map((session) => (
          <PreviousSessionCard key={session.id} session={session} />
        ))}
      </div>
    </>
  )
}
