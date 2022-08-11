import React from "react";
import { palette } from "src/components/foundation/palette";

const BoatLandingStageIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
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
        d="M1.40039 17.8459V10.7305L29.8804 17.8459C28.1364 19.4151 25.5404 19.5018 23.7724 17.9634C23.0032 18.6272 22.006 18.9944 20.9724 18.9944C19.9388 18.9944 18.9416 18.6272 18.1724 17.9634C17.4048 18.6304 16.407 18.9997 15.3724 18.9997C14.3378 18.9997 13.34 18.6304 12.5724 17.9634C11.8032 18.6272 10.806 18.9944 9.77239 18.9944C8.73878 18.9944 7.74162 18.6272 6.97239 17.9634M1.40039 17.9634C2.16962 18.6272 3.16679 18.9944 4.20039 18.9944C5.234 18.9944 6.23116 18.6272 7.00039 17.9634C7.76799 18.6304 8.76577 18.9997 9.80039 18.9997C10.835 18.9997 11.8328 18.6304 12.6004 17.9634"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.3604 9.93861L10.3444 8.60784C9.25716 8.32013 8.2622 7.77518 7.45029 7.02272C6.63839 6.27026 6.03541 5.33426 5.69639 4.30015L5.40039 3.38477L28.3604 9.46938L26.2804 12.8309L18.1684 10.6848"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.2957 3.59961L11.1357 4.83807"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.6562 12.2158L27.1923 14.4697"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.9043 8.30762L12.5603 10.5999L14.2403 11.0461"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.328 14.2611C17.6137 14.2611 18.656 13.2589 18.656 12.0226C18.656 10.7864 17.6137 9.78418 16.328 9.78418C15.0423 9.78418 14 10.7864 14 12.0226C14 13.2589 15.0423 14.2611 16.328 14.2611Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.3278 13.1304C16.964 13.1304 17.4798 12.6345 17.4798 12.0227C17.4798 11.411 16.964 10.915 16.3278 10.915C15.6915 10.915 15.1758 11.411 15.1758 12.0227C15.1758 12.6345 15.6915 13.1304 16.3278 13.1304Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.51953 20.5695C8.28713 21.2366 9.28491 21.6059 10.3195 21.6059C11.3542 21.6059 12.3519 21.2366 13.1195 20.5695C13.8888 21.2334 14.8859 21.6005 15.9195 21.6005C16.9531 21.6005 17.9503 21.2334 18.7195 20.5695C19.4847 21.2259 20.4742 21.5886 21.4995 21.5886C22.5249 21.5886 23.5144 21.2259 24.2795 20.5695C26.0555 22.108 28.4555 21.8465 30.1915 20.2695"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

BoatLandingStageIcon.defaultProps = {
  stroke: palette.grey?.[500],
};

export default BoatLandingStageIcon;
