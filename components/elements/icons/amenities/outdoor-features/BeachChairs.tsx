import React from "react";
import { palette } from "src/components/foundation/palette";

const BeachChairsIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
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
        d="M14.2139 13.1074H24.6218"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.3809 16.3381V13.4766"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.4294 23.077L23.5459 19.0801"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.83789 23.0771L4.48474 19.2002"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.0191 19.2093H2.22223C1.88892 19.1818 1.57833 19.0333 1.35197 18.7931C1.12561 18.5529 1 18.2386 1 17.9124C1 17.5861 1.12561 17.2718 1.35197 17.0316C1.57833 16.7914 1.88892 16.6429 2.22223 16.6154H21.4134L28.6255 9.13852C28.7348 8.98182 28.878 8.85031 29.0449 8.75318C29.2118 8.65606 29.3984 8.59565 29.5917 8.57621C29.7851 8.55676 29.9804 8.57873 30.1641 8.64058C30.3479 8.70243 30.5155 8.80268 30.6554 8.9343C30.7952 9.06593 30.9039 9.22576 30.9738 9.40262C31.0438 9.57948 31.0732 9.7691 31.0602 9.95823C31.0471 10.1474 30.9919 10.3314 30.8983 10.4976C30.8047 10.6637 30.6751 10.8079 30.5184 10.9201L22.9467 18.7939C22.8279 18.9195 22.6848 19.0209 22.5256 19.0922C22.3663 19.1635 22.1942 19.2033 22.0191 19.2093Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.29901 8.74662C10.8492 8.74662 12.1273 7.51782 12.1273 5.97585C12.1273 4.43387 10.8492 3.20508 9.29901 3.20508C7.74885 3.20508 6.4707 4.43387 6.4707 5.97585C6.4707 7.51782 7.74885 8.74662 9.29901 8.74662Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.29883 2.38462V1"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.69564 3.43647L5.69238 2.45801"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.61696 5.97559H4.19727"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.69564 8.52344L5.69238 9.5019"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.29883 9.5752V10.9598"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.9014 8.52344L12.9141 9.5019"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.9805 5.97559H14.4002"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.9014 3.43647L12.9141 2.45801"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

BeachChairsIcon.defaultProps = {
  stroke: palette.grey?.[500],
};

export default BeachChairsIcon;
