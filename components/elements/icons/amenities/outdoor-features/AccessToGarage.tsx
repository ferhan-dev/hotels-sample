import React from "react";
import { palette } from "src/components/foundation/palette";

const AccessToGarageIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
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
          d="M26.6907 8.39062V23.5383H5.30859V8.39062"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28.9846 9.19361C28.8323 9.19722 28.6815 9.16232 28.546 9.09207L15.6802 2.63053L3.4723 9.09207C3.35566 9.165 3.22535 9.2128 3.08956 9.23248C2.95377 9.25215 2.81541 9.24327 2.68318 9.2064C2.55094 9.16954 2.42767 9.10548 2.32109 9.01823C2.21451 8.93098 2.12691 8.82244 2.0638 8.69939C2.00069 8.57635 1.96343 8.44146 1.95434 8.30319C1.94525 8.16491 1.96453 8.02623 2.01097 7.89583C2.05742 7.76544 2.13004 7.64615 2.22426 7.54543C2.31848 7.44471 2.43229 7.36474 2.55854 7.31053L15.2142 0.581299C15.3563 0.510472 15.5126 0.473633 15.6711 0.473633C15.8295 0.473633 15.9858 0.510472 16.1279 0.581299L29.4415 7.31053C29.6399 7.41326 29.7984 7.58027 29.8918 7.78482C29.9851 7.98938 30.0077 8.21965 29.9562 8.43877C29.9046 8.65789 29.7817 8.85318 29.6072 8.99338C29.4327 9.13359 29.2167 9.21059 28.9937 9.21207L28.9846 9.19361Z"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.62988 23.28V11.2246H24.37V23.28"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.62988 13.7998H24.37"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.62988 16.2734H24.37"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.62988 18.7383H24.37"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.62988 21.2119H24.37"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M31.5433 23.5381H0.457031"
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

AccessToGarageIcon.defaultProps = {
  stroke: palette.grey?.[500],
};

export default AccessToGarageIcon;
