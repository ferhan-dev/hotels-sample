import React from "react";
import { palette } from "src/components/foundation/palette";

const WaterfrontIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
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
        d="M6.375 16.6521V8.67676"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.9072 8.67676V16.6521"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.4719 9.22348C22.3657 9.22362 22.261 9.19746 22.1673 9.14732L13.4304 4.77886L5.12271 9.1404C4.97408 9.18764 4.81385 9.18331 4.66798 9.12811C4.52212 9.07291 4.39917 8.97009 4.31905 8.83628C4.23893 8.70248 4.20633 8.54554 4.22654 8.39089C4.24675 8.23625 4.31858 8.09296 4.4304 7.98424L4.49964 7.94963L13.105 3.42193C13.2007 3.37436 13.3062 3.34961 13.4131 3.34961C13.52 3.34961 13.6254 3.37436 13.7212 3.42193L22.7696 7.94963C22.9274 8.03254 23.0471 8.17308 23.1038 8.34201C23.1605 8.51093 23.15 8.69523 23.0743 8.85655C23.0163 8.96839 22.929 9.0623 22.8216 9.12818C22.7143 9.19406 22.591 9.2294 22.465 9.2304L22.4719 9.22348Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 17.8847C3.94538 17.8847 3.94539 16.6455 5.88385 16.6455C7.82231 16.6455 7.8223 17.8847 9.76076 17.8847C11.6992 17.8847 11.6992 16.6455 13.6377 16.6455C15.5762 16.6455 15.5762 17.8847 17.5146 17.8847C19.4531 17.8847 19.4531 16.6455 21.3915 16.6455C23.33 16.6455 23.3369 17.8847 25.2754 17.8847"
        stroke={stroke}
        strokeMiterlimit="10"
      />
      <path
        d="M2 20.6543C3.94538 20.6543 3.94539 19.415 5.88385 19.415C7.82231 19.415 7.8223 20.6543 9.76076 20.6543C11.6992 20.6543 11.6992 19.415 13.6377 19.415C15.5762 19.415 15.5762 20.6543 17.5146 20.6543C19.4531 20.6543 19.4531 19.415 21.3915 19.415C23.33 19.415 23.3369 20.6543 25.2754 20.6543"
        stroke={stroke}
        strokeMiterlimit="10"
      />
      <path
        d="M12.9316 10.1719H8.2793V13.2111H12.9316V10.1719Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5693 17.1994V12.4502H18.8163V17.1994"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6055 10.1719V12.8926"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

WaterfrontIcon.defaultProps = {
  stroke: palette.grey?.[500],
};

export default WaterfrontIcon;
