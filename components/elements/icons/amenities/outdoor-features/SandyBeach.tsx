import React from "react";
import { palette } from "src/components/foundation/palette";

const SandyBeachIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
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
        d="M6.74591 13.5075C7.99493 13.5075 9.00745 12.4949 9.00745 11.2459C9.00745 9.9969 7.99493 8.98438 6.74591 8.98438C5.4969 8.98438 4.48438 9.9969 4.48438 11.2459C4.48438 12.4949 5.4969 13.5075 6.74591 13.5075Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.74609 8.46169V7.38477"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.77716 9.27716L4.01562 8.51562"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.96169 11.2461H2.88477"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.77716 13.2158L4.01562 13.9774"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.74609 14.0312V15.1082"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.71582 13.2158L9.47736 13.9774"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.53125 11.2461H10.6082"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.71582 9.27716L9.47736 8.51562"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.9078 3.57715L15.6309 21.4925"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.4616 12.2696C25.7416 10.5984 25.3932 8.88271 24.4837 7.45299C23.5742 6.02327 22.1678 4.98068 20.5354 4.52602C18.903 4.07136 17.1601 4.23681 15.6425 4.99049C14.1248 5.74417 12.9397 7.03277 12.3154 8.60809L25.4616 12.2696Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.1158 11.3387C22.8851 7.97717 22.2004 5.01563 20.5312 4.5464C18.862 4.07717 16.7543 6.27717 15.6543 9.53871L22.1158 11.3387Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.64648 19.3462C7.15416 18.1262 11.8337 17.666 16.4926 17.9847M18.2619 18.1C20.8027 18.3234 23.3228 18.74 25.8003 19.3462H25.8696L18.2619 18.1Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

SandyBeachIcon.defaultProps = {
  stroke: palette.grey?.[500],
};

export default SandyBeachIcon;
