import { IconProps } from "..";

export const StudentIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="48"
      height="32"
      viewBox="0 0 48 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M6 30H4C2.89543 30 2 29.1045 2 28V28C2 24.2723 4.54955 21.1401 8 20.252M12 13.6586C9.66962 12.8349 8 10.6125 8 8.00002C8 5.38758 9.66962 3.1651 12 2.34143M42 30H44C45.1046 30 46 29.1045 46 28V28C46 24.2723 43.4505 21.1401 40 20.252M36 2.34143C38.3304 3.1651 40 5.38758 40 8.00002C40 10.6125 38.3304 12.8349 36 13.6586M20 20H28C32.4183 20 36 23.5817 36 28V28C36 29.1046 35.1046 30 34 30H14C12.8954 30 12 29.1046 12 28V28C12 23.5817 15.5817 20 20 20ZM30 8C30 11.3137 27.3137 14 24 14C20.6863 14 18 11.3137 18 8C18 4.68629 20.6863 2 24 2C27.3137 2 30 4.68629 30 8Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
