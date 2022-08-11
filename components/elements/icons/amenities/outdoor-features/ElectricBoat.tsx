import React from "react";
import { palette } from "src/components/foundation/palette";

const ElectricBoatIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
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
        d="M4.48047 17.0684C6.72685 17.0684 5.72045 15.6348 7.96044 15.6348C10.2004 15.6348 10.194 17.0684 12.4404 17.0684C14.6868 17.0684 14.6804 15.6348 16.9204 15.6348C19.1604 15.6348 19.1604 17.0684 21.4004 17.0684C23.6403 17.0684 23.6403 15.6348 25.8803 15.6348C28.1203 15.6348 28.1203 17.0684 30.3603 17.0684"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.0498 18.4707C10.2834 18.4707 10.2834 19.9043 12.5298 19.9043C14.7762 19.9043 14.7698 18.4707 17.0097 18.4707C19.2497 18.4707 19.2497 19.9043 21.4897 19.9043C23.7297 19.9043 23.7297 18.4707 25.9697 18.4707C28.2097 18.4707 28.2097 19.9043 30.4497 19.9043"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.42871 13.9775L5.59511 15.3343C5.64122 15.7484 5.76499 16.1501 5.95991 16.5183"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.271 15.469L29.2918 9.4082L8.2839 12.5314L8.0791 12.5634"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.4723 13.9774H3.22112C2.81486 13.9757 2.42582 13.8131 2.13915 13.5252C1.85247 13.2374 1.69153 12.8477 1.69153 12.4414V12.4414C1.68685 12.0762 1.81352 11.7215 2.04847 11.4419C2.28342 11.1623 2.611 10.9765 2.97152 10.9182L6.2227 10.4382C6.62395 10.3775 7.03292 10.478 7.36029 10.7178C7.68766 10.9577 7.90682 11.3173 7.96989 11.7182C7.97621 11.7949 7.97621 11.8719 7.96989 11.9486V12.435C7.96989 12.8413 7.80895 13.231 7.52228 13.5188C7.2356 13.8067 6.84656 13.9693 6.4403 13.971L6.4723 13.9774Z"
        stroke={stroke}
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M3.95703 13.9775V19.1871"
        stroke={stroke}
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M2.15918 18.4512H3.95757"
        stroke={stroke}
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M2.54297 17.3311V19.9998"
        stroke={stroke}
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M23.4918 9.92041L19.7223 7.21322C19.7223 7.21322 16.1703 6.97003 12.0039 11.5012"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.7109 6.12489C14.4323 6.14606 14.1559 6.06174 13.9366 5.88866C13.7173 5.71557 13.571 5.46637 13.5269 5.19049C13.5014 4.90805 13.5867 4.62676 13.7645 4.4059C13.9424 4.18503 14.1991 4.04185 14.4805 4.0065C14.76 3.97563 15.0405 4.05549 15.2618 4.22896C15.4831 4.40243 15.6277 4.65571 15.6645 4.9345C15.6868 5.217 15.6006 5.4974 15.4235 5.71858C15.2463 5.93975 14.9914 6.08505 14.7109 6.12489V6.12489Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.9872 9.44651L13.8529 8.16652C13.8224 7.88307 13.9057 7.59911 14.0845 7.37708C14.2633 7.15506 14.523 7.01314 14.8064 6.98253V6.98253C14.9483 6.96753 15.0916 6.98088 15.2283 7.02182C15.3649 7.06276 15.492 7.13047 15.6021 7.221C15.7123 7.31153 15.8034 7.42308 15.8701 7.54915C15.9367 7.67522 15.9776 7.81329 15.9904 7.95532"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ElectricBoatIcon.defaultProps = {
  stroke: palette.grey?.[500],
};

export default ElectricBoatIcon;
