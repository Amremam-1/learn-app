import React, { useEffect } from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

export default function NotificationToast({
  show,
  onClose,
  message,
  duration = 4000,
}) {
  useEffect(() => {
    if (!show) return;
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [show, duration, onClose]);

  if (!show) return null;

  return (
    <div
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-6 py-3 rounded-xl bg-[#0F172A] text-white border border-primary shadow-lg"
      role="alert"
    >
      <div className="flex items-center justify-center w-8 h-8  shrink-0">
        <IoIosCheckmarkCircleOutline className="size-6 text-success" />
      </div>
      <span className="text-[14px] sm:text-[15px] font-medium">{message}</span>
    </div>
  );
}
