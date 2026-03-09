import { MdOutlineImage } from "react-icons/md";
import Button from "../Ui/Button";

export default function CourseCover({
  image,
  fileInputRef,
  handleImageChange,
  errors,
}) {
  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const preview = URL.createObjectURL(file);
    handleImageChange(file, preview);
  };

  return (
    <section className="rounded-[12px] border border-borderCard flex flex-col mb-8">
      {/* Header */}
      <div className="p-6">
        <h2 className="font-bold text-[16px] sm:text-[18px] lg:text-[20px] leading-[24px] sm:leading-[26px] lg:leading-[28px] text-grayDark">
          Course Cover
        </h2>
      </div>

      <div className="flex flex-col p-6 pt-0">
        {/* Hidden input */}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFile}
          className="hidden"
        />

        {/* Upload Area */}
        <div
          onClick={() => fileInputRef.current.click()}
          className="flex flex-col justify-center items-center gap-2 bg-grayBgLight border-2 border-dashed border-borderInput p-6 mb-4 cursor-pointer w-full"
        >
          {image ? (
            <img
              src={image}
              alt="Course Cover"
              className="max-h-[200px] w-full object-contain"
            />
          ) : (
            <>
              <MdOutlineImage className="w-[37px] h-[37px] text-iconGray pb-2" />
              <p className="w-[202px] font-medium text-[12px] sm:text-[13px] lg:text-[14px] leading-[20px] text-grayLabel text-center">
                Click to upload or drag and drop
              </p>
              <p className="w-[202px] font-normal text-[11px] sm:text-[12px] leading-[16px] text-grayLabel text-center">
                SVG, PNG, JPG or GIF (max. 800x450px)
              </p>
            </>
          )}
        </div>

        {errors.coverImage && (
          <span className="text-danger text-xs mb-1">{errors.coverImage}</span>
        )}

        {/* Upload Button */}
        <Button
          variant="secondary"
          onClick={() => fileInputRef.current.click()}
          className="px-4 rounded-[12px] bg-bgLightBlue text-brandBlue font-bold text-[14px] leading-[20px] flex items-center justify-center"
        >
          Upload Image
        </Button>
      </div>
    </section>
  );
}
