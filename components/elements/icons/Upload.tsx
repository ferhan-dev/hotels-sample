import React from "react";
import { palette } from "src/components/foundation/palette";

const UploadIcon: React.FC<React.SVGProps<SVGElement>> = ({ fill }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 17.75H18.5V19.25H5V17.75ZM12.5 11V17H11V11H5.75L11.75 5L17.75 11H12.5Z"
        fill={fill}
      />
    </svg>
  );
};

UploadIcon.defaultProps = {
  fill: palette.grey?.[500],
};

export default UploadIcon;
