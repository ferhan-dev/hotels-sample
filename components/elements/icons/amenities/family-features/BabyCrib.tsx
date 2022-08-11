import React from "react";
import { palette } from "src/components/foundation/palette";

const BabyCribIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ stroke }) => {
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.5179 9.65039H2.25V19.7325H19.5179V9.65039Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.25 8.34961V21.7495"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.5186 8.34961V21.7495"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.25 17.8354H19.5179"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.71289 9.65039V17.8352"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.22363 9.65039V17.8352"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.73633 9.65039V17.8352"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.248 9.65039V17.8352"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.7598 9.65039V17.8352"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.2725 9.65039V17.8352"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.05371 3.45117H14.7157"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.8848 2.25049V6.18464"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.25488 3.45117V4.7354"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.25447 6.7228C8.80328 6.7228 9.24819 6.27789 9.24819 5.72907C9.24819 5.18026 8.80328 4.73535 8.25447 4.73535C7.70565 4.73535 7.26074 5.18026 7.26074 5.72907C7.26074 6.27789 7.70565 6.7228 8.25447 6.7228Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.218 5.48047H12.8096V6.88891H14.218V5.48047Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.8846 6.12256L9.62109 7.65521H12.1475L10.8846 6.12256Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

BabyCribIcon.defaultProps = {
  stroke: palette.grey?.[500],
};

export default BabyCribIcon;
