import React from "react";
import { palette } from "src/components/foundation/palette";

const DeepSeaFishingIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
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
        d="M10.7774 14.2998H6.03125V17.0613H10.7774V14.2998Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.40006 14.0769V6.85385L3.25391 5V6.9"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.38477 9.77673C2.38501 10.1473 2.46243 10.5138 2.61209 10.8529C2.76174 11.1919 2.98035 11.496 3.254 11.746C3.5275 11.4952 3.74589 11.1903 3.89528 10.8506C4.04467 10.511 4.12181 10.1439 4.12181 9.77288C4.12181 9.40182 4.04467 9.0348 3.89528 8.69514C3.74589 8.35547 3.5275 8.05058 3.254 7.7998C2.98013 8.05119 2.76147 8.35671 2.61184 8.69701C2.46221 9.03731 2.38488 9.40498 2.38477 9.77673Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.25368 12.1079L3.8306 12.531H2.67676L3.25368 12.1079Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.28439 19.4922C5.17798 19.4926 5.07266 19.4708 4.97508 19.4284C4.87751 19.3859 4.78979 19.3237 4.71749 19.2456C4.6452 19.1675 4.5899 19.0753 4.55507 18.9748C4.52024 18.8742 4.50665 18.7675 4.51516 18.6615V17.0615H13.8767C15.5994 17.0524 17.2875 16.5765 18.7613 15.6845V15.6845C19.9789 14.9587 21.3277 14.4803 22.7306 14.2768L28.4459 13.3076L27.3921 17.8461C27.3089 18.3001 27.0742 18.7124 26.7263 19.0156C26.3783 19.3188 25.9378 19.495 25.4767 19.5153"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.6768 17.0617V9.38477H23.2998V13.9925"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.8077 10.769H15.8154V12.7614H17.8077V10.769Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.4464 10.769H19.4541V12.7614H21.4464V10.769Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.5996 13.7694V2.38477"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.623 4.52285L25.6 2.92285V5.84593L22.623 4.52285Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.38477 18.2925C3.08468 19.0559 4.05618 19.5142 5.09042 19.5688C6.12466 19.6235 7.13906 19.2701 7.91554 18.5848C8.63757 19.2255 9.56943 19.5794 10.5348 19.5794C11.5001 19.5794 12.432 19.2255 13.154 18.5848C13.876 19.2255 14.8079 19.5794 15.7732 19.5794C16.7386 19.5794 17.6704 19.2255 18.3925 18.5848C19.1145 19.2255 20.0464 19.5794 21.0117 19.5794C21.977 19.5794 22.9089 19.2255 23.6309 18.5848C25.3002 20.054 27.554 19.8309 29.1925 18.2925"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.38477 20.3306C3.08573 21.0922 4.05694 21.5492 5.09058 21.6038C6.12423 21.6585 7.1382 21.3064 7.91554 20.6229C8.63757 21.2636 9.56943 21.6175 10.5348 21.6175C11.5001 21.6175 12.432 21.2636 13.154 20.6229C13.876 21.2636 14.8079 21.6175 15.7732 21.6175C16.7386 21.6175 17.6704 21.2636 18.3925 20.6229C19.1145 21.2636 20.0464 21.6175 21.0117 21.6175C21.977 21.6175 22.9089 21.2636 23.6309 20.6229C25.3002 22.0921 27.554 21.869 29.1925 20.3306"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

DeepSeaFishingIcon.defaultProps = {
  stroke: palette.grey?.[500],
};

export default DeepSeaFishingIcon;
