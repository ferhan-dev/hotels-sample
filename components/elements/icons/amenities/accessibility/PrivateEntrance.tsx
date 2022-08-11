import React from "react";
import { palette } from "src/components/foundation/palette";

const PrivateEntranceIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
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
        d="M16.6616 2.38477H6.25391V19.7771H16.6616V2.38477Z"
        stroke={stroke}
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M17.9843 19.7769H4.60742V21.6153H17.9843V19.7769Z"
        stroke={stroke}
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M4.60742 2.38477H17.9843"
        stroke={stroke}
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M9.49274 12.2921C10.198 12.2921 10.7697 11.7204 10.7697 11.0152C10.7697 10.31 10.198 9.73828 9.49274 9.73828C8.78752 9.73828 8.21582 10.31 8.21582 11.0152C8.21582 11.7204 8.78752 12.2921 9.49274 12.2921Z"
        stroke={stroke}
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M20.2002 21.6152H2.38477"
        stroke={stroke}
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </svg>
  );
};

PrivateEntranceIcon.defaultProps = {
  stroke: palette.grey?.[500],
};

export default PrivateEntranceIcon;
