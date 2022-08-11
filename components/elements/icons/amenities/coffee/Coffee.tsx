import React from "react";
import { palette } from "src/components/foundation/palette";

const CoffeeIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ stroke }) => {
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.51208 6.41707C6.33332 5.5101 6.45784 4.2848 5.79021 3.68028C5.12259 3.07576 3.91563 3.32095 3.09439 4.22791C2.27316 5.13488 2.14864 6.36017 2.81626 6.96469C3.48389 7.56921 4.69085 7.32403 5.51208 6.41707Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.81495 3.67676C5.51926 4.39423 4.97234 4.97942 4.27649 5.32291C3.59627 5.673 3.06606 6.25787 2.78418 6.96906"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.9501 4.74756C11.0673 3.52967 10.4356 2.4724 9.53915 2.38607C8.64264 2.29975 7.82082 3.21706 7.70355 4.43495C7.58628 5.65284 8.21797 6.71012 9.11447 6.79644C10.011 6.88276 10.8328 5.96545 10.9501 4.74756Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.53859 2.39209C9.74616 3.12822 9.67211 3.91528 9.33091 4.59978C8.99278 5.28493 8.9162 6.06989 9.11552 6.80747"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.32281 10.1505C8.41601 9.25467 7.50504 8.42582 6.28808 8.2992C5.07113 8.17258 4.00904 8.79614 3.91583 9.69195C3.82263 10.5878 4.7336 11.4166 5.95056 11.5432C7.16751 11.6698 8.2296 11.0463 8.32281 10.1505Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.31577 10.1459C7.57617 10.3384 6.7919 10.2564 6.10808 9.91516C5.42426 9.57394 4.63999 9.49196 3.90039 9.68439"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.9304 21.4152H15.3535V12.9229L16.5766 11.3921H22.7074L23.9304 12.9229V21.4152Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.4615 18.3999H9.24609V21.6153H12.4615V18.3999Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.5617 12.6079H18.8232"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.7842 18.4078V11.5617C10.7842 10.9798 10.8988 10.4036 11.1215 9.86608C11.3441 9.32851 11.6705 8.84006 12.0819 8.42863C12.4934 8.01719 12.9818 7.69083 13.5194 7.46816C14.0569 7.2455 14.6331 7.13089 15.2149 7.13089V7.13089C15.7981 7.12886 16.3759 7.24197 16.9153 7.46373C17.4546 7.68549 17.9449 8.01154 18.3579 8.42318C18.771 8.83481 19.0987 9.32394 19.3224 9.86251C19.546 10.4011 19.6611 10.9785 19.6611 11.5617V12.6386"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

CoffeeIcon.defaultProps = {
  stroke: palette.grey?.[500],
};

export default CoffeeIcon;
