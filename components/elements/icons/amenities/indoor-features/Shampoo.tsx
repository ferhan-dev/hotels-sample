import React from "react";
import { palette } from "src/components/foundation/palette";

const ShampooIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ stroke }) => {
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.8765 10.569H15.815C15.0948 10.569 14.4042 10.8551 13.8949 11.3643C13.3857 11.8736 13.0996 12.5642 13.0996 13.2844V21.6152H19.6227V13.2844C19.6227 12.9252 19.5515 12.5696 19.4131 12.2381C19.2747 11.9066 19.0719 11.6059 18.8165 11.3534C18.5611 11.1008 18.2581 10.9015 17.9251 10.7668C17.5921 10.6322 17.2357 10.565 16.8765 10.569V10.569Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.2232 8.28467H15.3232V10.5693H17.2232V8.28467Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.4611 14.2925H16.3457V17.8386H19.4611V14.2925Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.1771 8.90771H2.38477V21.6154H11.1771V8.90771Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.19991 5.66943H4.36914V8.87713H9.19991V5.66943Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.9695 19.2156H6.57715V11.2002H10.9695"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.7001 7.17713C14.1165 7.17713 14.454 6.83962 14.454 6.42328C14.454 6.00694 14.1165 5.66943 13.7001 5.66943C13.2838 5.66943 12.9463 6.00694 12.9463 6.42328C12.9463 6.83962 13.2838 7.17713 13.7001 7.17713Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.9004 4.754C17.5547 4.754 18.0851 4.22363 18.0851 3.56938C18.0851 2.91514 17.5547 2.38477 16.9004 2.38477C16.2462 2.38477 15.7158 2.91514 15.7158 3.56938C15.7158 4.22363 16.2462 4.754 16.9004 4.754Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.78418 5.66914V3.36914"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.43066 3.36914H10.2614L11.4384 4.54606"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ShampooIcon.defaultProps = {
  stroke: palette.grey?.[500],
};

export default ShampooIcon;
