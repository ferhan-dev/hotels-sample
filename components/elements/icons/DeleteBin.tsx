import React from "react";
import { neutralColor } from "src/components/foundation/palette";

const DeleteBinIcon: React.FC<React.SVGProps<SVGElement>> = ({ fill }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.75 7.5H19.5V9H18V18.75C18 18.9489 17.921 19.1397 17.7803 19.2803C17.6397 19.421 17.4489 19.5 17.25 19.5H6.75C6.55109 19.5 6.36032 19.421 6.21967 19.2803C6.07902 19.1397 6 18.9489 6 18.75V9H4.5V7.5H8.25V5.25C8.25 5.05109 8.32902 4.86032 8.46967 4.71967C8.61032 4.57902 8.80109 4.5 9 4.5H15C15.1989 4.5 15.3897 4.57902 15.5303 4.71967C15.671 4.86032 15.75 5.05109 15.75 5.25V7.5ZM9.75 11.25V15.75H11.25V11.25H9.75ZM12.75 11.25V15.75H14.25V11.25H12.75ZM9.75 6V7.5H14.25V6H9.75Z"
        fill={fill}
      />
    </svg>
  );
};

DeleteBinIcon.defaultProps = {
  fill: neutralColor[400],
};

export default DeleteBinIcon;
