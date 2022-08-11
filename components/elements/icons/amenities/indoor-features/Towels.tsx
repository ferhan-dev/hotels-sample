import React from "react";
import { palette } from "src/components/foundation/palette";

const TowelsIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ stroke }) => {
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.7002 6.31543V15.1847H10.131"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.131 4.53092V21.6155H22.3617V4.64631C22.3617 4.04651 22.1235 3.47128 21.6993 3.04716C21.2752 2.62303 20.7 2.38477 20.1002 2.38477H8.96173C8.36193 2.38477 7.7867 2.62303 7.36258 3.04716C6.93846 3.47128 6.7002 4.04651 6.7002 4.64631"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.13837 6.31532H10.1307V4.77686H3.13837C2.93436 4.77686 2.7387 4.8579 2.59444 5.00216C2.45018 5.14642 2.36914 5.34207 2.36914 5.54609C2.36914 5.7501 2.45018 5.94576 2.59444 6.09002C2.7387 6.23427 2.93436 6.31532 3.13837 6.31532Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.7925 4.80762H22.3848V6.34608H24.7925C24.9965 6.34608 25.1921 6.26504 25.3364 6.12078C25.4806 5.97652 25.5617 5.78086 25.5617 5.57685C25.5617 5.37284 25.4806 5.17718 25.3364 5.03292C25.1921 4.88866 24.9965 4.80762 24.7925 4.80762Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.1387 18.4385H22.3617"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.7002 12H10.1387"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

TowelsIcon.defaultProps = {
  stroke: palette.grey?.[500],
};

export default TowelsIcon;
