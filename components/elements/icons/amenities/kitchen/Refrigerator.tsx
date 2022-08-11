import React from "react";
import { palette } from "src/components/foundation/palette";

const RefrigeratorIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
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
        d="M12.7925 2.38477H2.38477V20.5078H12.7925V2.38477Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.38477 9.1001H12.454"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.06152 4.73096V7.56173"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.06152 10.5229V15.1383"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.79216 20.5464H3.11523V21.6156H4.79216V20.5464Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.8381 20.5464H10.1611V21.6156H11.8381V20.5464Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

RefrigeratorIcon.defaultProps = {
  stroke: palette.grey?.[500],
};

export default RefrigeratorIcon;
