import type { FC } from "react";

type SearchIconProps = {
  size?: string;
  color?: string;
  className?: string;
  onClick?: () => void;
};

export const SearchIcon: FC<SearchIconProps> = ({
  size = "24",
  color = "#666666",
  className,
  onClick,
}) => (
  <div className={className} onClick={onClick}>
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={className}
        d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);
