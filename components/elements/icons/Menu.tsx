import React from "react";

const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  fill,
  ...props
}) => {
  return (
    <svg
      width="18"
      height="16"
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 0H18V2H0V0ZM6 7H18V9H6V7ZM0 14H18V16H0V14Z" fill={fill} />
    </svg>
  );
};

export default MenuIcon;
