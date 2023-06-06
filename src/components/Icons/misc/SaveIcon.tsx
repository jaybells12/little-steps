import { IconProps } from "..";

export const SaveIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 17V12H6V17M15 17H3C1.89543 17 1 16.1046 1 15V3C1 1.89543 1.89543 1 3 1H11.1716C11.702 1 12.2107 1.21071 12.5858 1.58579L16.4142 5.41421C16.7893 5.78929 17 6.29799 17 6.82843V15C17 16.1046 16.1046 17 15 17Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
