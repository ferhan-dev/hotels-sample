import React from "react";
import { palette } from "src/components/foundation/palette";

const OvenIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ stroke }) => {
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.6155 2.38477H2.38477V21.6155H21.6155V2.38477Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.8233 10.3691H4.51562V18.1922H19.8233V10.3691Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.8236 6.81543V8.69235H4.53125V6.81543"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.06953 5.48477C7.51136 5.48477 7.86953 5.12659 7.86953 4.68477C7.86953 4.24294 7.51136 3.88477 7.06953 3.88477C6.6277 3.88477 6.26953 4.24294 6.26953 4.68477C6.26953 5.12659 6.6277 5.48477 7.06953 5.48477Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.4309 5.48477C10.8727 5.48477 11.2309 5.12659 11.2309 4.68477C11.2309 4.24294 10.8727 3.88477 10.4309 3.88477C9.98903 3.88477 9.63086 4.24294 9.63086 4.68477C9.63086 5.12659 9.98903 5.48477 10.4309 5.48477Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.7922 5.48477C14.234 5.48477 14.5922 5.12659 14.5922 4.68477C14.5922 4.24294 14.234 3.88477 13.7922 3.88477C13.3504 3.88477 12.9922 4.24294 12.9922 4.68477C12.9922 5.12659 13.3504 5.48477 13.7922 5.48477Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.1535 5.48477C17.5953 5.48477 17.9535 5.12659 17.9535 4.68477C17.9535 4.24294 17.5953 3.88477 17.1535 3.88477C16.7117 3.88477 16.3535 4.24294 16.3535 4.68477C16.3535 5.12659 16.7117 5.48477 17.1535 5.48477Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.4234 15.246C15.1311 15.1614 14.8618 15.0768 14.5849 15.0152C13.8062 14.8685 13.0012 14.9624 12.2772 15.2845C11.8027 15.491 11.3111 15.6557 10.808 15.7768C9.92347 15.9131 9.01972 15.7187 8.26953 15.2306"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.4233 13.0002C15.1156 12.9233 14.8233 12.8387 14.5233 12.7771C13.7887 12.637 13.0289 12.7256 12.3463 13.031C12.0156 13.1618 11.6848 13.3002 11.3463 13.4156C10.5326 13.6962 9.64154 13.6493 8.86172 13.2848L8.26172 13.0002"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

OvenIcon.defaultProps = {
  stroke: palette.grey?.[500],
};

export default OvenIcon;
