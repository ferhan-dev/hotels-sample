import React from "react";
import { palette } from "src/components/foundation/palette";

const BackyardIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ stroke }) => {
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.48828 7.20898V21.4333"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.49902 9.30917L12.1598 7.40723"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.9629 16.4961V21.5384"
        stroke={stroke}
        strokeMiterlimit="10"
      />
      <path
        d="M15.5352 16.4961V21.5384"
        stroke={stroke}
        strokeMiterlimit="10"
      />
      <path
        d="M18.1084 16.4961V21.5384"
        stroke={stroke}
        strokeMiterlimit="10"
      />
      <path
        d="M20.6787 16.4961V21.5384"
        stroke={stroke}
        strokeMiterlimit="10"
      />
      <path d="M23.252 16.4961V21.5384" stroke={stroke} strokeMiterlimit="10" />
      <path
        d="M11.5693 17.9033H24.4834"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.5693 19.918H24.4834"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.49902 13.0787L12.1598 11.1768"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.35804 11.0396L6.69727 9.1377"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.2166 14.3433C10.6363 14.5879 11.117 14.7215 11.6092 14.7302C12.3169 14.7273 12.9948 14.4587 13.4953 13.9827C13.9958 13.5067 14.2783 12.862 14.2812 12.1888C14.857 11.8983 15.3393 11.465 15.677 10.9348C16.0146 10.4046 16.1951 9.79729 16.1991 9.17743C16.1946 8.69895 16.0866 8.22648 15.8821 7.78932C15.6775 7.35216 15.3807 6.95964 15.01 6.63613V6.47226C15.0092 5.69542 14.6842 4.95064 14.1064 4.40159C13.5285 3.85253 12.7452 3.54412 11.9283 3.54412C11.7828 3.53972 11.6371 3.54872 11.4933 3.57098C11.2937 3.14351 10.9679 2.78029 10.5556 2.52537C10.1432 2.27045 9.66194 2.13477 9.17011 2.13477C8.67829 2.13477 8.19703 2.27045 7.78466 2.52537C7.3723 2.78029 7.04654 3.14351 6.84688 3.57098C6.70313 3.54872 6.55746 3.53972 6.41189 3.54412C5.59704 3.54696 4.81654 3.85663 4.24114 4.40538C3.66574 4.95412 3.34229 5.69728 3.34155 6.47226V6.63881C2.91105 7.00576 2.58035 7.46637 2.37769 7.98128C2.17503 8.49619 2.10643 9.05011 2.17776 9.59571C2.24909 10.1413 2.45822 10.6624 2.78729 11.1144C3.11637 11.5665 3.5556 11.936 4.06747 12.1915C4.07638 12.8675 4.36462 13.5131 4.86991 13.9886C5.37519 14.4641 6.05694 14.7315 6.76779 14.7328C7.25586 14.7322 7.7334 14.5979 8.14337 14.346"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.6585 21.8652H6.375"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.44083 21.8652H2.1416"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

BackyardIcon.defaultProps = {
  stroke: palette.grey?.[500],
};

export default BackyardIcon;
