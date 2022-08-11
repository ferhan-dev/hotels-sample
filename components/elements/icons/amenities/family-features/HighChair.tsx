import React from "react";
import { palette } from "src/components/foundation/palette";

const HighChairIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ stroke }) => {
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.46875 21.6154L5.68413 10.377"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.8697 21.6154L10.6543 10.377"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.98438 13.9229H11.3613"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.13867 18.2383H12.2387"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.8389 8.89985V7.11523"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.79199 8.89985V7.11523"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.73828 8.89985V7.11523"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.6543 7.11523L3.93122 9.73831C3.93122 9.73831 3.93122 9.77678 3.93122 9.79985C3.92762 9.82279 3.92762 9.84615 3.93122 9.86908V9.86908C3.94884 9.93123 3.97471 9.99073 4.00814 10.046V10.046V10.0922H4.06199C4.14583 10.1226 4.23433 10.1382 4.32353 10.1383H12.5389C12.7286 10.1383 12.9106 10.0629 13.0448 9.92878C13.1789 9.79462 13.2543 9.61266 13.2543 9.42293C13.2543 9.23319 13.1789 9.05123 13.0448 8.91707C12.9106 8.78291 12.7286 8.70755 12.5389 8.70755H5.29276L5.08507 7.11523"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.93888 5.677L4.66195 3.02316C4.66117 2.92215 4.63924 2.82243 4.59757 2.73042C4.5559 2.63841 4.49541 2.55615 4.42001 2.48895C4.3446 2.42174 4.25596 2.37108 4.15978 2.34022C4.0636 2.30937 3.96202 2.29901 3.86159 2.30981C3.76117 2.32061 3.66412 2.35233 3.57669 2.40292C3.48927 2.45352 3.41343 2.52186 3.35403 2.60356C3.29464 2.68526 3.25302 2.77851 3.23186 2.87727C3.2107 2.97604 3.21047 3.07814 3.23118 3.177L3.50042 5.677"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.38481 6.39233C2.38379 6.48692 2.40154 6.58078 2.43704 6.66847C2.47253 6.75615 2.52507 6.83592 2.5916 6.90317C2.65813 6.97042 2.73734 7.0238 2.82464 7.06023C2.91194 7.09666 3.0056 7.11541 3.10019 7.11541H12.331C12.4474 7.15958 12.5728 7.17482 12.6965 7.15981C12.8201 7.1448 12.9382 7.1 13.0407 7.02925C13.1432 6.95851 13.227 6.86394 13.2849 6.75367C13.3428 6.6434 13.373 6.52072 13.373 6.39618C13.373 6.27164 13.3428 6.14896 13.2849 6.03869C13.227 5.92842 13.1432 5.83385 13.0407 5.7631C12.9382 5.69236 12.8201 5.64757 12.6965 5.63256C12.5728 5.61755 12.4474 5.63278 12.331 5.67695H3.10019C3.00625 5.67695 2.91322 5.69545 2.82643 5.7314C2.73963 5.76735 2.66077 5.82005 2.59434 5.88648C2.52791 5.95291 2.47521 6.03177 2.43926 6.11856C2.40331 6.20536 2.38481 6.29838 2.38481 6.39233Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

HighChairIcon.defaultProps = {
  stroke: palette.grey?.[500],
};

export default HighChairIcon;
