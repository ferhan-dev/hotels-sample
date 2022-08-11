import React from "react";
import { palette } from "src/components/foundation/palette";

const BoatingIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ stroke }) => {
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.26074 14.4023C4.21229 14.4023 4.22794 15.476 6.17949 15.4559C8.13103 15.4359 8.12059 14.3371 10.0721 14.317C12.0237 14.2969 12.0393 15.3907 13.9961 15.3656C15.9529 15.3405 15.9372 14.2518 17.8888 14.2317C19.8403 14.2116 19.856 15.3004 21.8075 15.2803C23.7591 15.2603 23.7486 14.1615 25.7054 14.1414C27.6622 14.1213 27.6726 15.2151 29.6241 15.19"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.1816 16.6402C12.1384 16.6402 12.1541 17.8143 14.1056 17.7942C16.0572 17.7741 16.0467 16.575 17.9983 16.5499C19.9498 16.5248 19.9655 17.729 21.9222 17.7089C23.879 17.6888 23.8581 16.4847 25.8149 16.4646C27.7717 16.4445 27.7821 17.6437 29.7336 17.6186"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.0865 14.2219L28.7216 9.13428L6.04925 12.0945L5.64746 13.8656L7.15547 14.9695"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.0163 9.37504L22.329 7.29284C22.329 7.29284 18.1546 7.09215 14.502 10.8953"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.2404 9.16944L16.11 8.10576C16.0955 7.98742 16.1054 7.86748 16.1394 7.75287C16.1733 7.63825 16.2304 7.53122 16.3075 7.43794C16.3847 7.34466 16.4802 7.26698 16.5887 7.20937C16.6972 7.15177 16.8165 7.11538 16.9396 7.10229V7.10229C17.063 7.08904 17.1879 7.0993 17.3071 7.13249C17.4263 7.16567 17.5376 7.22112 17.6345 7.29568C17.7314 7.37024 17.8121 7.46243 17.872 7.567C17.9318 7.67156 17.9696 7.78644 17.9833 7.90507"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.0959 7.55908H9.98926"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.4816 8.93359H7.375"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5585 6.82642C17.0109 6.82642 17.3777 6.47375 17.3777 6.0387C17.3777 5.60365 17.0109 5.25098 16.5585 5.25098C16.106 5.25098 15.7393 5.60365 15.7393 6.0387C15.7393 6.47375 16.106 6.82642 16.5585 6.82642Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

BoatingIcon.defaultProps = {
  stroke: palette.grey?.[500],
};

export default BoatingIcon;
