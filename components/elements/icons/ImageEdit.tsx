import React from "react";
import { palette } from "src/components/foundation/palette";

const ImageEditIcon: React.FC<React.SVGProps<SVGElement>> = ({ fill }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.75 5C17.164 5 17.5 5.336 17.5 5.75V7.06775L16 8.56775V6.5H5.5V12.575L8.5 9.575L11.746 12.8217L10.7508 13.817L10.7463 16.9963L13.9307 17.0007L14.9282 16.0033L15.9242 17H16V14.9315L17.5 13.4315V17.75C17.5 18.164 17.164 18.5 16.75 18.5H4.75C4.336 18.5 4 18.164 4 17.75V5.75C4 5.336 4.336 5 4.75 5H16.75ZM18.0835 8.606L19.144 9.6665L13.3105 15.5L12.2485 15.4985L12.25 14.4395L18.0835 8.606ZM13.375 8C13.996 8 14.5 8.504 14.5 9.125C14.5 9.746 13.996 10.25 13.375 10.25C12.754 10.25 12.25 9.746 12.25 9.125C12.25 8.504 12.754 8 13.375 8Z"
        fill={fill}
      />
    </svg>
  );
};

ImageEditIcon.defaultProps = {
  fill: palette.grey?.[500],
};

export default ImageEditIcon;
