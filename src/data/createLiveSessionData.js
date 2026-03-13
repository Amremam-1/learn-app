import {
  HiOutlineLightBulb,
  HiOutlineLockClosed,
  HiOutlineLightningBolt,
} from "react-icons/hi";

// Options data
export const stageOptions = [
  { value: "high-school", label: "High School" },
  { value: "university", label: "University" },
];

export const courseOptions = [
  { value: "math", label: "Mathematics" },
  { value: "physics", label: "Physics" },
];

export const durationOptions = [
  { value: "30 min", label: "30 min" },
  { value: "45 min", label: "45 min" },
  { value: "60 min", label: "60 min" },
  { value: "90 min", label: "90 min" },
  { value: "120 min", label: "120 min" },
];

// Info cards data
export const infoCardsData = [
  {
    Icon: HiOutlineLightBulb,
    title: "Pro Tip",
    description:
      "Sessions scheduled for 60 minutes tend to have 20% higher engagement rates.",
    variant: "primary",
  },
  {
    Icon: HiOutlineLockClosed,
    title: "Privacy",
    description:
      "All sessions are recorded by default and stored in the course archive.",
    variant: "default",
  },
  {
    Icon: HiOutlineLightningBolt,
    title: "Quick Link",
    description:
      "The meeting URL will be generated automatically after creation.",
    variant: "default",
  },
];
