import React from "react";
import { palette } from "src/components/foundation/palette";

const PotableWaterIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
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
        d="M6.63867 3.354H12.9079"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.96875 5.67708V3.354"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.66943 4.32323C6.20472 4.32323 6.63866 3.88929 6.63866 3.354C6.63866 2.8187 6.20472 2.38477 5.66943 2.38477C5.13413 2.38477 4.7002 2.8187 4.7002 3.354C4.7002 3.88929 5.13413 4.32323 5.66943 4.32323Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.8765 4.32323C14.4117 4.32323 14.8457 3.88929 14.8457 3.354C14.8457 2.8187 14.4117 2.38477 13.8765 2.38477C13.3412 2.38477 12.9072 2.8187 12.9072 3.354C12.9072 3.88929 13.3412 4.32323 13.8765 4.32323Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.6543 6.98438H14.8697C15.8755 6.98438 16.8401 7.38393 17.5512 8.09512C18.2624 8.80632 18.662 9.7709 18.662 10.7767V14.1536H14.8158V10.7998H12.6543"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.29246 10.7998H2.38477V6.98438H7.29246"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.6612 5.67676H7.29199V11.9998H12.6612V5.67676Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.7921 15.731C16.1311 16.7717 15.5623 17.8682 15.0921 19.0079C14.9934 19.2531 14.9362 19.5131 14.9229 19.7771C14.9231 20.1043 15.0091 20.4257 15.1725 20.7091C15.3358 20.9926 15.5707 21.2282 15.8536 21.3925C16.1381 21.5594 16.4622 21.6471 16.7921 21.6463C17.2878 21.6463 17.7633 21.4494 18.1138 21.0989C18.4644 20.7483 18.6613 20.2729 18.6613 19.7771C18.6613 18.9387 17.4459 16.7925 16.7921 15.731Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.41504 8.55405L9.37658 9.82328L11.5304 7.66943"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

PotableWaterIcon.defaultProps = {
  stroke: palette.grey?.[500],
};

export default PotableWaterIcon;
