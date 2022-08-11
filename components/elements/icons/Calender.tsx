import React from "react";

const CalenderIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ fill, ...props }) => {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M11.25 1.5H14.25C14.4489 1.5 14.6397 1.57902 14.7803 1.71967C14.921 1.86032 15 2.05109 15 2.25V14.25C15 14.4489 14.921 14.6397 14.7803 14.7803C14.6397 14.921 14.4489 15 14.25 15H0.75C0.551088 15 0.360322 14.921 0.21967 14.7803C0.0790176 14.6397 0 14.4489 0 14.25V2.25C0 2.05109 0.0790176 1.86032 0.21967 1.71967C0.360322 1.57902 0.551088 1.5 0.75 1.5H3.75V0H5.25V1.5H9.75V0H11.25V1.5ZM9.75 3H5.25V4.5H3.75V3H1.5V6H13.5V3H11.25V4.5H9.75V3ZM13.5 7.5H1.5V13.5H13.5V7.5Z"
        fill={fill}
      />
    </svg>
  );
};

CalenderIcon.defaultProps = {
  fill: "#5A6987",
};

export default CalenderIcon;
