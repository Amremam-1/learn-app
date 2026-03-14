import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { courseSchema } from "../utils/validation/courseValidation";

export const useCourseForm = () => {
  const navigate = useNavigate();

  // -- State --
  const [imagePreview, setImagePreview] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [errors, setErrors] = useState({});
  const [courseData, setCourseData] = useState({
    title: "",
    stage: "",
    subject: "",
    description: "",
    price: null,
    isFree: false,
    language: "English (US)",
    studentVisible: true,
    coverImage: null,
  });

  // -- Helpers --
  const clearFieldError = (field) => {
    if (errors[field]) {
      setErrors((prev) => {
        const newErrs = { ...prev };
        delete newErrs[field];
        return newErrs;
      });
    }
  };

  // -- Actions --
  const handleChange = (field, value) => {
    setCourseData((prev) => ({ ...prev, [field]: value }));
    clearFieldError(field);
  };

  const handleImageChange = (file, preview, errorMessage = null) => {
    if (errorMessage) {
      setErrors((prev) => ({
        ...prev,
        coverImage: errorMessage,
      }));
      return;
    }

    setImagePreview(preview);
    setCourseData((prev) => ({ ...prev, coverImage: file }));
    clearFieldError("coverImage");
  };

  const validateData = () => {
    const cleanDescription = courseData.description
      .replace(/<(.|\n)*?>/g, "")
      .trim();

    const dataToValidate = {
      ...courseData,
      description: cleanDescription === "" ? "" : courseData.description,
    };

    const result = courseSchema.safeParse(dataToValidate);

    if (!result.success) {
      const newErrors = {};
      result.error.issues.forEach((issue) => {
        newErrors[issue.path[0]] = issue.message;
      });
      setErrors(newErrors);
      return { isValid: false, data: null };
    }

    return { isValid: true, data: result.data };
  };

  const saveCourse = async () => {
    const { isValid, data } = validateData();

    if (!isValid) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Success Path
    setErrors({});
    setIsSaving(true);
    console.log("Form submitted successfully! Course Data:", data);

    // Simulate API Call
    setTimeout(() => {
      setIsSaving(false);
      setShowMessage(true);
      setTimeout(() => navigate("/instructer/Courses"), 1500);
    }, 1000);
  };

  return {
    courseData,
    imagePreview,
    isSaving,
    showMessage,
    errors,
    handleChange,
    handleImageChange,
    saveCourse,
  };
};
