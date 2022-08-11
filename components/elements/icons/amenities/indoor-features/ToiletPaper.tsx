import React from "react";
import { palette } from "src/components/foundation/palette";

const ToiletPaperIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
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
        d="M9.90786 14.4771C12.4399 14.4771 14.4925 11.7701 14.4925 8.43092C14.4925 5.09172 12.4399 2.38477 9.90786 2.38477C7.37584 2.38477 5.32324 5.09172 5.32324 8.43092C5.32324 11.7701 7.37584 14.4771 9.90786 14.4771Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.4922 21.6153V8.43066"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.90723 2.38477H21.738C24.2688 2.38477 26.3534 5.09246 26.3534 8.43092V21.6155"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.90748 10.4771C10.7614 10.4771 11.4536 9.56098 11.4536 8.43092C11.4536 7.30086 10.7614 6.38477 9.90748 6.38477C9.05356 6.38477 8.36133 7.30086 8.36133 8.43092C8.36133 9.56098 9.05356 10.4771 9.90748 10.4771Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.4617 8.43066H2.38477"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28.4539 8.43066H26.8154"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.4922 13.5464H15.2845"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.6846 13.5464H24.3846"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="14.13 14.13"
      />
      <path
        d="M25.085 13.5464H25.8773"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.4922 21.5924C14.5446 21.5746 14.5939 21.5486 14.6383 21.5155V21.5155L15.8076 20.5693L16.9768 21.5155C17.0738 21.5935 17.1946 21.6361 17.3191 21.6361C17.4436 21.6361 17.5644 21.5935 17.6614 21.5155L18.8306 20.5693L19.9922 21.5155C20.0892 21.5935 20.21 21.6361 20.3345 21.6361C20.459 21.6361 20.5798 21.5935 20.6768 21.5155L21.846 20.5693L23.0076 21.5155C23.1046 21.5935 23.2254 21.6361 23.3499 21.6361C23.4744 21.6361 23.5952 21.5935 23.6922 21.5155L24.8614 20.5693L26.0229 21.5155C26.0407 21.519 26.059 21.519 26.0768 21.5155H26.1153H26.1691H26.2153H26.2691"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ToiletPaperIcon.defaultProps = {
  stroke: palette.grey?.[500],
};

export default ToiletPaperIcon;
