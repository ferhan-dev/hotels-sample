import React from "react";
import { palette } from "src/components/foundation/palette";

const BalconyIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ stroke }) => {
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.38477 13.4385L3.154 17.3539C3.19194 17.5692 3.30446 17.7642 3.47184 17.9049C3.63921 18.0455 3.85076 18.1228 4.06938 18.1231H7.40784"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.79217 21.4845L7.05371 18.1152"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.11523 21.4845L3.8537 18.1152"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.5612 13.4385L20.7919 17.3539C20.754 17.5692 20.6415 17.7642 20.4741 17.9049C20.3067 18.0455 20.0952 18.1228 19.8765 18.1231H16.5381"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.1611 21.4845L16.8919 18.1152"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.8312 21.4845L20.0928 18.1152"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.1152 16.2227V21.615"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.1152 10.123V14.7769"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.8003 14.7773H6.4541V16.1773H17.8003V14.7773Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.0307 2.38477L2.62305 8.67707H21.4384L12.0307 2.38477Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.35382 10.1229H2.97689L2.62305 8.67676H8.70766L8.35382 10.1229Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6927 10.1229H9.31576L8.96191 8.67676H15.0465L14.6927 10.1229Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.0306 10.1229H15.6537L15.2998 8.67676H21.3844L21.0306 10.1229Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.96191 8.67707L12.0311 2.38477"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.0466 8.67707L12.0312 2.38477"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5073 21.6152H10.7227"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

BalconyIcon.defaultProps = {
  stroke: palette.grey?.[500],
};

export default BalconyIcon;
