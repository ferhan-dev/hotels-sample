import React from "react";
import { palette } from "src/components/foundation/palette";

const SingleLevelHomeIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
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
        d="M29.7662 9.6875H14.7744V16.796H29.7662V9.6875Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.46094 16.8005H14.7748V9.68731L9.11788 6.2334L3.46094 9.68731V16.8005Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3137 11.3813H4.91699V16.8003H13.3137V11.3813Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.91699 12.8096H13.1364"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.91699 14.0889H13.1364"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.91699 15.3721H13.1364"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.2274 11.7598H16.833V16.8006H19.2274V11.7598Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27.162 11.7598H21.8691V14.2802H27.162V11.7598Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.5416 7.54004H11.2324L14.775 9.68706H29.7668L26.5416 7.54004Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.5156 11.7598V14.0888"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.7748 9.68731L9.11788 6.2334L2.2334 10.4388"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.9977 16.8003H16.1797V17.9018H19.9977V16.8003Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

SingleLevelHomeIcon.defaultProps = {
  stroke: palette.grey?.[500],
};

export default SingleLevelHomeIcon;
