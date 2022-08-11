import React from "react";
import { palette } from "src/components/foundation/palette";

const BasketballIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
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
        d="M18.9694 11.9537V17.1999H2.38477V6.43066H15.0694"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.8462 10.9614H7.5V15.0845H13.8462V10.9614Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.9844 15.0771H6.73828"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.85352 15.0771L8.60736 21.6156"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.89258 15.0771L10.1541 21.6156"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.8847 15.0771L13.1309 21.6156"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.8465 15.0771L11.585 21.6156"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.09961 17.2002H13.6535"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.30762 19.0464H13.4307"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.52344 20.877H13.2081"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.4847 11.8615C20.5791 11.8615 22.277 10.1636 22.277 8.06916C22.277 5.97473 20.5791 4.27686 18.4847 4.27686C16.3903 4.27686 14.6924 5.97473 14.6924 8.06916C14.6924 10.1636 16.3903 11.8615 18.4847 11.8615Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.8076 10.7463L21.1692 5.38477"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.8076 5.38452C16.1332 5.01638 16.5371 4.72581 16.9897 4.53413C17.4423 4.34245 17.932 4.25454 18.423 4.27683C19.0076 4.27683 18.3384 5.86913 17.3153 6.89221C16.2922 7.91529 14.6384 8.59221 14.6999 7.9999C14.6929 7.51095 14.7878 7.02591 14.9785 6.57564C15.1692 6.12536 15.4516 5.71972 15.8076 5.38452V5.38452Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.1691 10.7462C21.8646 10.0518 22.2619 9.11357 22.2768 8.13086C21.2943 8.14671 20.3565 8.54405 19.6617 9.23885C18.9669 9.93366 18.5696 10.8715 18.5537 11.8539C18.7393 11.8539 18.9245 11.8384 19.1076 11.8078C19.8876 11.6744 20.6075 11.3037 21.1691 10.7462V10.7462Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.8076 5.38477L21.1692 10.7463"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.1689 2.38477L21.1689 5.38477"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.3227 2.88477L19.7227 4.48477"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.6693 5.23096L22.0693 6.83096"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

BasketballIcon.defaultProps = {
  stroke: palette.grey?.[500],
};

export default BasketballIcon;
