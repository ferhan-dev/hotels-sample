import React from "react";
import { palette } from "src/components/foundation/palette";

const BathtubIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ stroke }) => {
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.5924 16.0305C23.6047 17.4104 23.0689 18.7387 22.1026 19.7238C21.1362 20.7089 19.8184 21.2702 18.4386 21.2844H8.21551C6.83631 21.2682 5.51971 20.7062 4.55381 19.7216C3.58792 18.737 3.0514 17.4098 3.06167 16.0305V13.8921H23.5924V16.0305Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.6388 13.8H3.10804C2.92815 13.7815 2.76151 13.6969 2.64036 13.5627C2.51921 13.4284 2.45215 13.254 2.45215 13.0731C2.45215 12.8923 2.51921 12.7178 2.64036 12.5836C2.76151 12.4493 2.92815 12.3647 3.10804 12.3462H23.6388C23.8187 12.3647 23.9853 12.4493 24.1065 12.5836C24.2276 12.7178 24.2947 12.8923 24.2947 13.0731C24.2947 13.254 24.2276 13.4284 24.1065 13.5627C23.9853 13.6969 23.8187 13.7815 23.6388 13.8Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.92285 21.6153L5.69977 20.8384"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.862 21.6153L21.0928 20.8384"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.7149 10.8922C17.7133 10.8922 18.5226 10.0829 18.5226 9.08455C18.5226 8.08619 17.7133 7.27686 16.7149 7.27686C15.7166 7.27686 14.9072 8.08619 14.9072 9.08455C14.9072 10.0829 15.7166 10.8922 16.7149 10.8922Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.57728 7.26931C10.4354 7.26931 11.1311 6.57363 11.1311 5.71547C11.1311 4.8573 10.4354 4.16162 9.57728 4.16162C8.71912 4.16162 8.02344 4.8573 8.02344 5.71547C8.02344 6.57363 8.71912 7.26931 9.57728 7.26931Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6466 4.49246C15.2286 4.49246 15.7005 4.02063 15.7005 3.43861C15.7005 2.85659 15.2286 2.38477 14.6466 2.38477C14.0646 2.38477 13.5928 2.85659 13.5928 3.43861C13.5928 4.02063 14.0646 4.49246 14.6466 4.49246Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.96875 12.2539V9.74624C4.96875 9.45858 5.08302 9.1827 5.28643 8.9793C5.48983 8.77589 5.76571 8.66162 6.05337 8.66162H6.21491C6.50257 8.66162 6.77844 8.77589 6.98184 8.9793C7.18525 9.1827 7.29952 9.45858 7.29952 9.74624V9.74624"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

BathtubIcon.defaultProps = {
  stroke: palette.grey?.[500],
};

export default BathtubIcon;
