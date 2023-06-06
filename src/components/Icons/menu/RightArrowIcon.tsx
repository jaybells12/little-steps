import { IconProps } from "..";

export const RightArrowIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="11"
      height="20"
      viewBox="0 0 11 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M2 18L8.58579 11.4142C9.36684 10.6332 9.36684 9.36684 8.58579 8.58579L2 2"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
