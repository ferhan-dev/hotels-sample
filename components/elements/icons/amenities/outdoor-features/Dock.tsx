import React from "react";
import { palette } from "src/components/foundation/palette";

const DockIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ stroke }) => {
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.3056 3.63086L13.3086 13.7509H20.3056V3.63086Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.3057 1L27.3129 13.7512H20.3057V1Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.3057 12.167V15.3702"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5003 19.5596L11.2471 15.5732H28.9275L27.4448 19.5596"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.9118 20.5361L12.1299 18.2041"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.14258 19.7617C3.30567 19.7617 3.30567 20.8617 5.47891 20.8617C7.65216 20.8617 7.65216 19.7617 9.8254 19.7617C11.9986 19.7617 11.9986 20.8617 14.1617 20.8617C16.3248 20.8617 16.335 19.7617 18.5082 19.7617C20.6815 19.7617 20.6815 20.8617 22.8547 20.8617C25.028 20.8617 25.0178 19.7617 27.191 19.7617C29.3643 19.7617 29.3643 20.8617 31.5375 20.8617"
        stroke={stroke}
        strokeMiterlimit="10"
      />
      <path
        d="M1.14258 21.9004C3.30567 21.9004 3.30567 23.0004 5.47891 23.0004C7.65216 23.0004 7.65216 21.9004 9.8254 21.9004C11.9986 21.9004 11.9986 23.0004 14.1617 23.0004C16.3248 23.0004 16.335 21.9004 18.5082 21.9004C20.6815 21.9004 20.6815 23.0004 22.8547 23.0004C25.028 23.0004 25.0178 21.9004 27.191 21.9004C29.3643 21.9004 29.3643 23.0004 31.5375 23.0004"
        stroke={stroke}
        strokeMiterlimit="10"
      />
      <path d="M18.0713 18.292V20.0344" stroke={stroke} strokeMiterlimit="10" />
      <path d="M18.0713 15.25V16.1036" stroke={stroke} strokeMiterlimit="10" />
      <path
        d="M4.25977 18.2041V20.7649"
        stroke={stroke}
        strokeMiterlimit="10"
      />
      <path
        d="M1 18.2045H20.6506V16.1045H11.7545H1"
        stroke={stroke}
        strokeMiterlimit="10"
      />
    </svg>
  );
};

DockIcon.defaultProps = {
  stroke: palette.grey?.[500],
};

export default DockIcon;
