import React from "react";
import { palette } from "src/components/foundation/palette";

const FilterCoffeeMakerIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
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
        d="M15.2694 2.38477H3.00781V7.90784H15.2694V2.38477Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.18457 12.1693V7.90771H14.0846V18.8539H4.18457V17.5616"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.2694 18.854H3.00781V21.6155H15.2694V18.854Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.023 4.29248H7.24609V5.99248H11.023V4.29248Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.0306 12.1079H7.17676V13.3233H11.0306V12.1079Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.34572 18.854V18.0232C5.34238 16.4163 5.90318 14.8591 6.93033 13.6232L7.17648 13.3232"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.8463 18.854V18.0232C12.8444 16.4172 12.2842 14.8617 11.2617 13.6232L11.0078 13.3232"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.40039 17.3921H9.93116"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.0078 17.3921H11.6617"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.17659 13.1307V12.1846H4.09967C4.01917 12.1838 3.93975 12.2031 3.86857 12.2407C3.79739 12.2783 3.73669 12.333 3.69198 12.4C2.8361 13.7888 2.37349 15.3841 2.35352 17.0154C2.35352 17.1439 2.40457 17.2672 2.49546 17.358C2.58634 17.4489 2.7096 17.5 2.83813 17.5H5.25351"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.11523 7.90771V8.00002C6.11708 9.03698 6.50671 10.0357 7.20754 10.8H8.746"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.1765 7.90771V8.00002C12.1747 9.03698 11.785 10.0357 11.0842 10.8H8.72266"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.08498 4.29248H5.52344"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.08498 5.5H5.52344"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

FilterCoffeeMakerIcon.defaultProps = {
  stroke: palette.grey?.[500],
};

export default FilterCoffeeMakerIcon;
