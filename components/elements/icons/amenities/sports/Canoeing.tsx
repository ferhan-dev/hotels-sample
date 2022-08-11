import React from "react";
import { palette } from "src/components/foundation/palette";

const CanoeingIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ stroke }) => {
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.77625 12.1964C3.80912 11.0576 4.1003 8.99339 4.47987 7.4751C5.0542 7.82874 5.66204 8.12482 6.29454 8.35904C9.33113 9.53935 12.7473 9.75254 15.9919 9.75254C19.2364 9.75254 22.6578 9.53935 25.6944 8.35904C26.3294 8.13466 26.9365 7.83807 27.5038 7.4751C27.8834 8.99339 28.2214 11.0576 27.2126 12.1964"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.25977 11.0991C3.90805 12.8098 6.18548 12.7786 7.93255 11.4007C9.54444 12.8098 11.6555 12.711 13.2986 11.4007C14.9105 12.8098 17.0267 12.711 18.6698 11.4007C20.2817 12.8098 22.3927 12.711 24.041 11.4007C25.7517 12.9086 28.0655 12.6746 29.7606 11.0991"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.8896 14.7599C15.544 14.9277 16.2291 14.9355 16.8871 14.7825C17.5451 14.6296 18.1566 14.3204 18.6698 13.8812C20.2765 15.2903 22.3927 15.1915 24.0358 13.8812C25.7465 15.3891 28.0655 15.1551 29.7554 13.5796"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.25977 13.5796C3.90805 15.2903 6.18548 15.2591 7.93255 13.8812C8.5 14.3973 9.20622 14.7359 9.96395 14.8551C10.7217 14.9743 11.4978 14.8689 12.1963 14.5519"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.9762 18.259L10.7871 16.8759L12.5134 14.1305C12.6005 13.9902 12.7144 13.8684 12.8487 13.7723C12.983 13.6762 13.135 13.6075 13.2959 13.5703C13.4568 13.5331 13.6235 13.5281 13.7863 13.5555C13.9492 13.5829 14.105 13.6423 14.2449 13.7301L14.3073 13.7717C14.4472 13.8592 14.5684 13.9735 14.6641 14.108C14.7597 14.2425 14.8278 14.3945 14.8645 14.5554C14.9013 14.7163 14.9058 14.8828 14.878 15.0455C14.8502 15.2081 14.7905 15.3637 14.7024 15.5032L12.9762 18.259Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.2764 13.7615L19.1276 6.04004"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.365 6.81965L17.8848 5.25977"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

CanoeingIcon.defaultProps = {
  stroke: palette.grey?.[500],
};

export default CanoeingIcon;
