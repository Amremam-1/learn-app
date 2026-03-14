import ToggleSwitch from "../../Ui/ToggleSwitch";
import FormSelect from "../../Ui/FormSelect";
import { courseLanguages } from "../../../data/mockData";

export default function Settings({ courseData, handleChange }) {
  return (
    <section className="rounded-[12px] border border-borderCard flex flex-col mb-8 p-6">
      <h2 className="font-bold text-[16px] sm:text-[18px] lg:text-[20px] leading-[24px] sm:leading-[26px] lg:leading-[28px] text-grayDark">
        Settings
      </h2>

      {/* Student Visibility */}
      <div className="w-full flex justify-between p-3 bg-bgLight mt-6 rounded-[8px]">
        <div className="flex flex-col">
          <p className="font-bold text-grayDark text-[14px] leading-[20px]">
            Student Visibility
          </p>
          <p className="font-normal text-textMuted text-[10px] sm:text-[11px] leading-[16px]">
            Make course public now
          </p>
        </div>

        <ToggleSwitch
          checked={courseData.studentVisible}
          onChange={(e) => handleChange("studentVisible", e.target.checked)}
        />
      </div>

      {/* Language */}
      <div className="flex flex-col gap-2 w-full pt-8 pb-8">
        <p className="font-bold text-grayDark text-[14px] leading-[20px] pb-3">
          Language
        </p>

        <FormSelect
          options={courseLanguages}
          value={courseData.language}
          onChange={(v) => handleChange("language", v)}
        />
      </div>

      <div className="border-t border-borderCard">
        <p className="font-regular text-[12px] leading-[19.5px] text-textMuted mt-4">
          * By creating this course, you agree to <br /> EdPlatform's Instructor
          Terms of Service and <br /> Content Guidelines.
        </p>
      </div>
    </section>
  );
}
