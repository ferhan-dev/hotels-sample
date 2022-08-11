import React from "react";

interface Props extends React.SVGProps<SVGSVGElement> {
  checked?: boolean;
}

const RadioCheckIcon: React.FC<Props> = ({ checked }) => {
  return (
    <>
      {checked ? (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="3.25"
            y="3.25"
            width="17.5"
            height="17.5"
            rx="8.75"
            fill="#F0F9F6"
            stroke="#1DAF92"
            strokeWidth="1.5"
          />
          <circle cx="12" cy="12" r="6" fill="#1DAF92" />
        </svg>
      ) : (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="3.25"
            y="3.25"
            width="17.5"
            height="17.5"
            rx="8.75"
            fill="white"
            stroke="#D7DDEA"
            strokeWidth="1.5"
          />
        </svg>
      )}
    </>
  );
};

export default RadioCheckIcon;
