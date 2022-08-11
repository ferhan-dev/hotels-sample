import React from "react";
import { palette } from "src/components/foundation/palette";

const HeatedFloorsIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  stroke,
}) => {
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.4694 9.03861L9.92323 2.38477L2.38477 9.03861V18.0848H17.4694V9.03861Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.4694 19.9463H2.38477V21.6155H17.4694V19.9463Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.91504 21.4384L4.20735 20.1538"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.43066 21.4384L6.71528 20.1538"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.93848 21.4384L9.23078 20.1538"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.4541 21.4384L11.7387 20.1538"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.9688 21.4384L14.2534 20.1538"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.4766 21.4384L16.7612 20.1538"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.585 16.2536C14.585 15.5305 13.9619 15.5305 13.9619 14.8075C13.9619 14.0844 14.585 14.0844 14.585 13.3613C14.585 12.6382 13.9619 12.6305 13.9619 11.9075V10.9229"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.9463 11.7306L13.9463 10.7383L14.9386 11.7306"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5536 16.2536C10.5536 15.5305 9.92285 15.5305 9.92285 14.8075C9.92285 14.0844 10.5536 14.0844 10.5536 13.3613C10.5536 12.6382 9.92285 12.6305 9.92285 11.9075V10.9229"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.93066 11.7306L9.92297 10.7383L10.923 11.7306"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.538 16.2536C6.538 15.5305 5.90723 15.5305 5.90723 14.8075C5.90723 14.0844 6.538 14.0844 6.538 13.3613C6.538 12.6382 5.90723 12.6305 5.90723 11.9075V10.9229"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.90723 11.7306L5.90723 10.7383L6.90723 11.7306"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

HeatedFloorsIcon.defaultProps = {
  stroke: palette.grey?.[500],
};

export default HeatedFloorsIcon;
