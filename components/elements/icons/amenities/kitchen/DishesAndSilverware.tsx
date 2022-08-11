import React from "react";
import { palette } from "src/components/foundation/palette";

const DishesAndSilverwareIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
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
        d="M4.16211 3.38623V7.38623"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.39941 3.7251V8.37293C2.4013 8.6161 2.4987 8.84877 2.6706 9.02077L3.61222 9.92472L3.4239 16.6215L3.19791 20.388C3.2381 20.6145 3.35675 20.8196 3.53306 20.9674C3.70937 21.1152 3.93208 21.1962 4.16212 21.1962C4.39217 21.1962 4.61487 21.1152 4.79118 20.9674C4.96748 20.8196 5.08614 20.6145 5.12634 20.388L4.91542 16.6215L4.7045 9.98498L5.66871 9.08103C5.7619 9.00095 5.83648 8.90148 5.88722 8.78958C5.93797 8.67769 5.96366 8.55606 5.9625 8.4332V3.7251"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29.2321 12.516V2.39926C29.2321 2.39926 28.0117 2.06781 27.4317 3.90585C26.8517 5.7439 26.9496 11.6121 26.9496 11.6121L28.1021 12.5537L27.9289 17.8268L27.7029 20.614C27.7029 20.9454 28.1172 21.2166 28.6671 21.2166C29.217 21.2166 29.6464 20.9454 29.6313 20.614L29.3978 17.8042L29.2321 12.516Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.4102 20.5685C21.2196 20.5685 25.1183 16.6698 25.1183 11.8604C25.1183 7.05109 21.2196 3.15234 16.4102 3.15234C11.6009 3.15234 7.70215 7.05109 7.70215 11.8604C7.70215 16.6698 11.6009 20.5685 16.4102 20.5685Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.4107 17.819C19.7015 17.819 22.3693 15.1513 22.3693 11.8604C22.3693 8.5696 19.7015 5.90186 16.4107 5.90186C13.1199 5.90186 10.4521 8.5696 10.4521 11.8604C10.4521 15.1513 13.1199 17.819 16.4107 17.819Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

DishesAndSilverwareIcon.defaultProps = {
  fill: palette.grey?.[500],
  stroke: palette.grey?.[500],
};

export default DishesAndSilverwareIcon;
