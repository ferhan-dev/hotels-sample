import React from "react";
import { palette } from "src/components/foundation/palette";

const IndoorFireplaceIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
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
        d="M2.38477 20.2075H16.954V21.6152H2.38477V20.2075Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.38477 12.2075H16.954V13.6229H2.38477V12.2075Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.954 12.1691H2.38477L6.754 7.8999H12.5848L16.954 12.1691Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.75391 6.17676H12.4231V7.89984H6.75391V6.17676Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.56934 2.38477H11.2924V6.17707H8.56934V2.38477Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.35352 13.623H15.8766V20.2461H3.35352V13.623Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.2774 15.6309C10.2211 15.7648 10.1921 15.9086 10.1921 16.0539C10.1921 16.1992 10.2211 16.3431 10.2774 16.477C10.4027 16.7016 10.5468 16.9152 10.7081 17.1155C10.892 17.3607 11.0086 17.6498 11.0466 17.9539C11.0232 18.219 10.9279 18.4726 10.7709 18.6875C10.614 18.9024 10.4013 19.0703 10.1559 19.1732C9.91054 19.2761 9.64172 19.3101 9.37844 19.2715C9.11517 19.2328 8.86744 19.123 8.66198 18.9539C8.4471 18.7509 8.31087 18.4784 8.27736 18.1847C8.24 17.9327 8.25632 17.6757 8.32525 17.4304C8.39419 17.1852 8.51418 16.9573 8.67737 16.7616C8.63299 16.9279 8.63299 17.103 8.67737 17.2693C8.70825 17.357 8.76015 17.4359 8.82854 17.4989C8.89693 17.5619 8.97972 17.6072 9.06967 17.6309C9.15148 17.6493 9.23673 17.6454 9.31655 17.6197C9.39636 17.594 9.46783 17.5474 9.52352 17.4847C9.58186 17.4015 9.6175 17.3046 9.62694 17.2034C9.63639 17.1022 9.6193 17.0003 9.57736 16.9078C9.50439 16.7091 9.50439 16.491 9.57736 16.2924C9.64273 16.1298 9.74551 15.9848 9.87736 15.8693C9.98468 15.7751 10.1036 15.695 10.2312 15.6309H10.2774Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.7619 19.2847H7.52344"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.46191 19.8692C4.46191 18.5023 5.00491 17.1914 5.97144 16.2249C6.93798 15.2583 8.24888 14.7153 9.61576 14.7153C10.9826 14.7153 12.2935 15.2583 13.2601 16.2249C14.2266 17.1914 14.7696 18.5023 14.7696 19.8692"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

IndoorFireplaceIcon.defaultProps = {
  stroke: palette.grey?.[500],
};

export default IndoorFireplaceIcon;
