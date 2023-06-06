import { IconProps } from "..";

export const LessonIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="32"
      height="40"
      viewBox="0 0 32 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10 24H22M10 5H4C2.89543 5 2 5.89543 2 7V36C2 37.1046 2.89543 38 4 38H28C29.1046 38 30 37.1046 30 36V7C30 5.89543 29.1046 5 28 5H22M10 5V6C10 7.10457 10.8954 8 12 8H20C21.1046 8 22 7.10457 22 6V5M10 5V4C10 2.89543 10.8954 2 12 2H20C21.1046 2 22 2.89543 22 4V5"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
