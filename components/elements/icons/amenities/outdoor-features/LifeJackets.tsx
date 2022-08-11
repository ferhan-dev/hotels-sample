import React from "react";
import { palette } from "src/components/foundation/palette";

const LifeJacketsIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
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
      <g clipPath="url(#clip0)">
        <path
          d="M9.92327 19.8465V21.0558C9.92327 21.3826 9.85874 21.7063 9.73337 22.0081C9.60801 22.31 9.42429 22.5841 9.19273 22.8148C8.96118 23.0455 8.68635 23.2282 8.38403 23.3525C8.0817 23.4767 7.75781 23.5401 7.43096 23.5388H2.95403C2.62718 23.5401 2.3033 23.4767 2.00097 23.3525C1.69864 23.2282 1.42382 23.0455 1.19226 22.8148C0.960709 22.5841 0.776986 22.31 0.651623 22.0081C0.52626 21.7063 0.461726 21.3826 0.461729 21.0558V12.0927L1.38481 11.0311C1.76163 10.6106 2.02272 10.0994 2.14247 9.54759C2.26222 8.99578 2.23651 8.42234 2.06788 7.88345L0.424805 2.6496L6.60019 0.461914L9.88634 7.1173V13.9204"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.91406 15.5352V18.2213"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.0342 19.9665V21.0558C10.0342 21.3826 10.0987 21.7063 10.2241 22.0081C10.3494 22.31 10.5332 22.5841 10.7647 22.8148C10.9963 23.0455 11.2711 23.2282 11.5734 23.3525C11.8757 23.4767 12.1996 23.5401 12.5265 23.5388H17.0403C17.3672 23.5401 17.6911 23.4767 17.9934 23.3525C18.2957 23.2282 18.5705 23.0455 18.8021 22.8148C19.0337 22.5841 19.2174 22.31 19.3427 22.0081C19.4681 21.7063 19.5326 21.3826 19.5326 21.0558V12.0927L18.6096 11.0311C18.2327 10.6106 17.9717 10.0994 17.8519 9.54759C17.7322 8.99578 17.7579 8.42234 17.9265 7.88345L19.5696 2.6496L13.348 0.461914L10.0619 7.1173V13.9204"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.0342 15.5352V18.1567"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.6527 15.5352H6.17578"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.8682 13.9111H19.4866V15.5357H15.8682"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.17578 13.9111H13.6527"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.96961 15.5357H0.461914V13.9111H3.96961"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.96961 19.8463H0.461914V18.2217H3.96961"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.6527 19.8457H6.17578"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.8682 18.2217H19.4866V19.8463H15.9882"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.17578 18.2217H13.6527"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.1749 16.1543H3.96875V15.5359V12.8682H6.1749V16.1543Z"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.18413 17.3906H3.96875V20.6768H6.18413V17.3906Z"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.8677 12.8682H13.6523V16.1543H15.8677V12.8682Z"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.8677 20.6768H13.6523V18.2214V17.3906H15.8677V20.6768Z"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="32" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

LifeJacketsIcon.defaultProps = {
  stroke: palette.grey?.[500],
};

export default LifeJacketsIcon;
