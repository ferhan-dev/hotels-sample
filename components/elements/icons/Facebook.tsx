import React from "react";

interface Props extends React.SVGProps<SVGElement> {
  variant?: "no-background";
}

const FacebookIcon: React.FC<Props> = ({ fill, variant }) => {
  if (variant === "no-background") {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.25 13.625H15.125L15.875 10.625H13.25V9.125C13.25 8.3525 13.25 7.625 14.75 7.625H15.875V5.105C15.6305 5.07275 14.7072 5 13.7322 5C11.696 5 10.25 6.24275 10.25 8.525V10.625H8V13.625H10.25V20H13.25V13.625Z"
          fill={fill}
        />
      </svg>
    );
  }

  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 0C4.977 0 0.5 4.477 0.5 10C0.5 14.991 4.157 19.128 8.938 19.879V12.89H6.398V10H8.938V7.797C8.938 5.291 10.43 3.907 12.715 3.907C13.809 3.907 14.953 4.102 14.953 4.102V6.562H13.693C12.45 6.562 12.063 7.333 12.063 8.124V10H14.836L14.393 12.89H12.063V19.879C16.843 19.129 20.5 14.99 20.5 10C20.5 4.477 16.023 0 10.5 0Z"
        fill={fill}
      />
    </svg>
  );
};

FacebookIcon.defaultProps = {
  fill: "#1777F2",
};

export default FacebookIcon;
