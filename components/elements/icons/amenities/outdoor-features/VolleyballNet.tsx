import React from "react";
import { palette } from "src/components/foundation/palette";

const VolleyballNetIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
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
        d="M20.8077 19.4387C15.8279 18.3514 10.9798 18.4129 6 19.5002"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.71552 21.6155H3.71094V6.58472C3.71094 6.51704 3.72427 6.45002 3.75017 6.38749C3.77607 6.32496 3.81404 6.26814 3.8619 6.22029C3.90976 6.17243 3.96657 6.13447 4.0291 6.10857C4.09163 6.08267 4.15864 6.06934 4.22632 6.06934H5.20014C5.26782 6.06934 5.33483 6.08267 5.39736 6.10857C5.45989 6.13447 5.51671 6.17243 5.56456 6.22029C5.61242 6.26814 5.65038 6.32496 5.67628 6.38749C5.70218 6.45002 5.71552 6.51704 5.71552 6.58472V21.6155Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.8589 21.6155L21 21.6155V6.58472C21 6.51704 21.0133 6.45003 21.0392 6.3875C21.0651 6.32497 21.1031 6.26815 21.151 6.22029C21.1988 6.17243 21.2556 6.13447 21.3182 6.10857C21.3807 6.08267 21.4477 6.06934 21.5154 6.06934L22.3358 6.06934C22.4035 6.06934 22.4705 6.08267 22.5331 6.10857C22.5956 6.13447 22.6524 6.17243 22.7003 6.22029C22.7481 6.26814 22.7861 6.32496 22.812 6.38749C22.8379 6.45002 22.8512 6.51704 22.8512 6.58472L22.8589 21.6155Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.71582 7.40771H20.8466"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.71582 9.65771H20.8466"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.71582 11.9077H20.8466"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.71582 14.1577H20.8466"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.71582 16.4077H20.8466"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 7.5V16"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5996 7.5V16"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.2002 7.5V16"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.7998 7.5V16"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.4004 7.5V16"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.2465 2.38477C17.5507 2.38477 17.8482 2.47499 18.1012 2.64404C18.3542 2.81309 18.5514 3.05337 18.6678 3.33448C18.7843 3.6156 18.8147 3.92494 18.7554 4.22337C18.696 4.5218 18.5495 4.79593 18.3343 5.01108C18.1192 5.22624 17.845 5.37277 17.5466 5.43213C17.2482 5.49149 16.9388 5.46103 16.6577 5.34458C16.3766 5.22814 16.1363 5.03095 15.9673 4.77795C15.7982 4.52496 15.708 4.22751 15.708 3.92323C15.708 3.5152 15.8701 3.12389 16.1586 2.83537C16.4471 2.54685 16.8384 2.38477 17.2465 2.38477Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5921 6.06924C15.2656 5.81844 15.0013 5.49571 14.8199 5.12616C14.6385 4.7566 14.5447 4.35017 14.5459 3.93848"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

VolleyballNetIcon.defaultProps = {
  stroke: palette.grey?.[500],
};

export default VolleyballNetIcon;
