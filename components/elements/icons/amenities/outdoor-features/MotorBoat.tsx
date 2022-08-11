import React from "react";
import { palette } from "src/components/foundation/palette";

const MotorBoatIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ stroke }) => {
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.70996 15.856C5.29919 15.8283 5.31996 17.3375 7.91612 17.3029C10.5123 17.2683 10.4915 15.766 13.0807 15.7383C15.67 15.7106 15.6907 17.2129 18.28 17.1852C20.8692 17.1575 20.8554 15.6414 23.4515 15.6137C26.0477 15.586 26.0615 17.0952 28.6507 17.0606"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.85547 19.062C5.45162 19.062 5.47239 20.682 8.06163 20.6543C10.6509 20.6266 10.637 18.972 13.2262 18.9374C15.8155 18.9028 15.8362 20.5643 18.4324 20.5366C21.0285 20.5089 21.0009 18.8474 23.597 18.8197C26.1932 18.792 26.207 20.4466 28.7962 20.412"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.9567 15.7251L29.4528 8.70508L2.37207 12.7897L6.99976 17.0005"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.5379 9.03673L20.9725 6.16366C20.9725 6.16366 15.434 5.88673 10.5879 11.1344"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.8926 8.75263L12.7195 7.28494C12.7003 7.12165 12.7135 6.95615 12.7585 6.798C12.8035 6.63985 12.8793 6.49217 12.9816 6.36346C13.084 6.23475 13.2107 6.12756 13.3547 6.04808C13.4986 5.96859 13.6569 5.91838 13.8203 5.90033V5.90033C13.9839 5.88204 14.1496 5.8962 14.3078 5.94198C14.466 5.98777 14.6136 6.06429 14.7422 6.16717C14.8708 6.27004 14.9778 6.39726 15.0572 6.54154C15.1366 6.68582 15.1868 6.84433 15.2049 7.00802"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.0481 6.53125H4.59961"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.57932 8.42773H2.13086"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3154 5.51955C13.9157 5.51955 14.4024 5.03292 14.4024 4.43263C14.4024 3.83234 13.9157 3.3457 13.3154 3.3457C12.7151 3.3457 12.2285 3.83234 12.2285 4.43263C12.2285 5.03292 12.7151 5.51955 13.3154 5.51955Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

MotorBoatIcon.defaultProps = {
  stroke: palette.grey?.[500],
};

export default MotorBoatIcon;
