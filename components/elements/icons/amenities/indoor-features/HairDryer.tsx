import React from "react";
import { palette } from "src/components/foundation/palette";

const HairDryerIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ stroke }) => {
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.13875 10.1923L19.7849 8.99995V3.61533L8.13875 2.42302C7.59452 2.36822 7.04485 2.42805 6.52516 2.59866C6.00548 2.76927 5.5273 3.04688 5.12146 3.41359C4.71561 3.7803 4.3911 4.22797 4.16885 4.72776C3.94659 5.22755 3.83153 5.76835 3.83105 6.31533V6.31533C3.83129 6.86173 3.94634 7.40199 4.16875 7.90108C4.39116 8.40017 4.71595 8.84695 5.12209 9.21247C5.52823 9.57799 6.00664 9.8541 6.52631 10.0229C7.04599 10.1917 7.59534 10.2494 8.13875 10.1923V10.1923Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.4149 10.5002L19.7842 9.00015V3.60784L24.4149 2.38477V10.5002Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.1157 10.231V17.5002C12.1157 18.0265 11.9066 18.5313 11.5344 18.9035C11.1623 19.2757 10.6575 19.4848 10.1311 19.4848V19.4848C9.8702 19.4858 9.61167 19.4352 9.37043 19.3358C9.12919 19.2364 8.91 19.0903 8.72551 18.9058C8.54102 18.7213 8.39487 18.5021 8.2955 18.2609C8.19612 18.0196 8.14548 17.7611 8.1465 17.5002V10.231"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.4075 15.3846H12.1152V12.6539H12.4075C12.488 12.6528 12.5678 12.6678 12.6425 12.6979C12.7171 12.728 12.785 12.7726 12.8422 12.8291C12.8995 12.8856 12.9449 12.953 12.9759 13.0272C13.007 13.1014 13.0229 13.1811 13.0229 13.2616V14.8C13.015 14.9578 12.9467 15.1066 12.8322 15.2154C12.7176 15.3242 12.5656 15.3848 12.4075 15.3846V15.3846Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.86914 4.67676H9.67683"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.86914 6.30762H9.67683"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.86914 7.93848H9.67683"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.1309 19.4847V19.9539C10.1289 20.3953 9.95213 20.8179 9.6393 21.1293C9.32648 21.4406 8.90307 21.6154 8.46169 21.6154H6.554C6.11333 21.6154 5.69071 21.4404 5.37912 21.1288C5.06752 20.8172 4.89246 20.3946 4.89246 19.9539V18.4154C4.89348 18.1434 4.84065 17.8739 4.73702 17.6224C4.63339 17.3709 4.48101 17.1424 4.28866 16.95C4.09631 16.7577 3.8678 16.6053 3.61629 16.5016C3.36478 16.398 3.09525 16.3452 2.82323 16.3462H2.38477"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

HairDryerIcon.defaultProps = {
  stroke: palette.grey?.[500],
};

export default HairDryerIcon;
