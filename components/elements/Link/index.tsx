import React from "react";
import Link from "next/link";
import { Typography, TypographyProps } from "@material-ui/core";

interface Props extends TypographyProps<"a"> {
  href: string;
}

const AppLink: React.FC<Props> = ({ href, style, ...otherProps }) => {
  return (
    <Link href={href}>
      <Typography
        style={{ display: "block", cursor: "pointer", ...style }}
        {...otherProps}
        component="a"
      />
    </Link>
  );
};

export default AppLink;
