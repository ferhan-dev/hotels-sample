import React from "react";
import { palette } from "src/components/foundation/palette";

const ItalianCoffeeMakerIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
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
        d="M11.6694 13.4077H5.2002V15H11.6694V13.4077Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.8694 6.11523H2.38477L4.21554 8.47677L4.83861 13.4229H11.9463L12.8694 6.11523Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.4 4.61523L4 6.11523H12.8692L8.4 4.61523Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.7765 6.03869H15.0842C15.2415 6.0359 15.3955 6.08452 15.5227 6.17716L17.2303 7.36177C17.3642 7.45411 17.4653 7.5865 17.5192 7.7399C17.5731 7.89331 17.577 8.05985 17.5303 8.21561L16.0765 12.9002C16.0276 13.0559 15.9304 13.1919 15.799 13.2887C15.6676 13.3855 15.5089 13.4381 15.3457 13.4387C15.2229 13.444 15.1005 13.4198 14.989 13.3681C14.8774 13.3164 14.7798 13.2387 14.7045 13.1415C14.6292 13.0443 14.5782 12.9304 14.5559 12.8095C14.5337 12.6886 14.5407 12.564 14.5765 12.4464L15.8611 8.30023L14.8073 7.531H12.7227"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.44632 4.61553L7.32324 2.38477H9.54632L8.44632 4.61553Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66895 6.11523L7.33048 13.2075"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.1996 6.11523L9.53809 13.2075"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.1004 15.0078H4.76964L3.83887 21.6155H13.0312L12.1004 15.0078Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.59277 21.6155L7.27739 15.0078"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.2305 21.6155L9.5459 15.0078"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ItalianCoffeeMakerIcon.defaultProps = {
  stroke: palette.grey?.[500],
};

export default ItalianCoffeeMakerIcon;
