import React from "react";
import { palette } from "src/components/foundation/palette";

const TooltipIcon: React.FC<React.SVGProps<SVGElement>> = ({ fill }) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 12C2.6862 12 0 9.3138 0 6C0 2.6862 2.6862 0 6 0C9.3138 0 12 2.6862 12 6C12 9.3138 9.3138 12 6 12ZM5.4 5.4V9H6.6V5.4H5.4ZM5.4 3V4.2H6.6V3H5.4Z"
        fill={fill}
      />
    </svg>
  );
};

TooltipIcon.defaultProps = {
  fill: palette.grey?.[300],
};

export default TooltipIcon;
