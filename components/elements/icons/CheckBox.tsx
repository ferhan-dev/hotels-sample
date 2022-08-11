import React from "react";
import { palette } from "src/components/foundation/palette";

interface Props extends React.SVGProps<SVGSVGElement> {
  checked?: boolean;
}
const CheckBoxIcon: React.FC<Props> = ({ checked, stroke }) => {
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
            rx="4.75"
            fill="#1DAF92"
            stroke="#1DAF92"
            strokeWidth="1.5"
          />
          <path
            d="M8.25 12L10.75 14.5L15.75 9.5"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
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
            rx="4.75"
            fill="white"
            stroke={stroke}
            strokeWidth="1.5"
          />
        </svg>
      )}
    </>
  );
};

CheckBoxIcon.defaultProps = {
  stroke: palette.grey?.[300],
};

export default CheckBoxIcon;
