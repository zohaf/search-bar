import type { FC } from "react";

type BackIconProps = {
  size?: string;
  color?: string;
  className?: string;
  onClick?: () => void;
};

export const BackIcon: FC<BackIconProps> = function ({
  size = "24",
  color = "#666666",
  className,
  onClick,
}) {
  return (
    <div className={className} onClick={onClick}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 8L8 12M8 12L12 16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
