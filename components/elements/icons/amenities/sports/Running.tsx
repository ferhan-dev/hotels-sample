import React from "react";
import { palette } from "src/components/foundation/palette";

const RunningIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ stroke }) => {
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.1222 3.79705L7.40069 9.37598C7.31613 9.50321 7.2577 9.64599 7.22881 9.79601C7.19992 9.94602 7.20113 10.1003 7.23239 10.2498C7.26365 10.3994 7.32432 10.5412 7.41089 10.6671C7.49745 10.793 7.60816 10.9004 7.73661 10.9831L19.5465 18.4919C20.8796 19.3468 22.4287 19.8038 24.0123 19.8093H26.9368C27.4257 19.8087 27.9065 19.6839 28.3339 19.4466C28.7614 19.2092 29.1215 18.8671 29.3805 18.4524V18.4524C29.5255 18.2175 29.615 17.9525 29.642 17.6777C29.669 17.4029 29.6328 17.1256 29.5362 16.8669C29.4396 16.6082 29.2851 16.3751 29.0846 16.1853C28.8841 15.9954 28.6429 15.854 28.3793 15.7716L24.1045 14.4543L20.4226 7.57781C20.1934 7.1464 19.8067 6.82001 19.3429 6.66664C18.8791 6.51327 18.374 6.54473 17.9328 6.75447L17.7945 6.82034C17.2165 7.09165 16.5619 7.15259 15.9438 6.99264C15.3257 6.8327 14.7828 6.46191 14.4089 5.94431L12.8611 3.79705C12.7633 3.65709 12.6332 3.5428 12.4819 3.46388C12.3305 3.38496 12.1623 3.34375 11.9916 3.34375C11.8209 3.34375 11.6527 3.38496 11.5014 3.46388C11.35 3.5428 11.2199 3.65709 11.1222 3.79705V3.79705Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.9441 19.7959H9.67383"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.7158 17.3657H7.71582"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.3291 14.7178H4.3291"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.7646 8.48682H21.6221"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.5479 9.82373H22.4053"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.332 11.1611H23.1895"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.1758 7.10352L20.6931 13.3016L24.4541 14.586"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.35645 8.69092L21.4837 17.0824C22.3394 17.6288 23.3336 17.919 24.3489 17.9189H29.6644"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5008 8.19712C12.2739 7.37206 11.3057 6.21656 10.708 4.86426"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

RunningIcon.defaultProps = {
  stroke: palette.grey?.[500],
};

export default RunningIcon;
