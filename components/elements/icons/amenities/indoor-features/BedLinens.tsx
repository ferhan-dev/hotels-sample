import React from "react";
import { palette } from "src/components/foundation/palette";

const BedLinensIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ stroke }) => {
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.52298 7.054H4.45375C4.2987 7.054 4.15 6.9924 4.04037 6.88276C3.93073 6.77313 3.86914 6.62443 3.86914 6.46938V2.96939C3.86914 2.81434 3.93073 2.66563 4.04037 2.55599C4.15 2.44636 4.2987 2.38477 4.45375 2.38477H12.3461C12.5011 2.38477 12.6498 2.44636 12.7594 2.55599C12.8691 2.66563 12.9307 2.81434 12.9307 2.96939V3.57708"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.4617 21.6156H2.38477V9.57715L12.2155 3.57715H14.4617V21.6156Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.38477 9.57715L8.59246 11.1695L12.2155 3.57715"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

BedLinensIcon.defaultProps = {
  stroke: palette.grey?.[500],
};

export default BedLinensIcon;
