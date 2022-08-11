import { Avatar, makeStyles } from "@material-ui/core";
import React from "react";
import AppTypography from "src/components/elements/Typography";

export const useStyles = makeStyles(
  ({ palette, shape }) => ({
    root: {
      background: palette.common.white,
      borderRadius: shape.borderRadius,
      cursor: "pointer",
      paddingBottom: "16px",
      "&:hover": {
        background: palette.grey[100],
      },
    },
    avatar: {
      height: "32px",
      width: "32px",
    },
    background: {
      alignItems: "center",
      background: palette.grey[100],
      display: "flex",
      justifyContent: "center",
      height: "84px",
      marginBottom: "12px",
    },
  }),
  { index: 1 }
);

interface Props {
  src: string;
  label: string;
  onSelectPlatform: () => void;
}

const PlatformCard: React.FC<Props> = ({ src, label, onSelectPlatform }) => {
  const classes = useStyles();
  return (
    <div onClick={onSelectPlatform} className={classes.root}>
      <div className={classes.background}>
        <Avatar variant="rounded" src={src} className={classes.avatar} />
      </div>
      <AppTypography
        style={{ textAlign: "center" }}
        neutralColor={800}
        variant="body"
      >
        {label}
      </AppTypography>
    </div>
  );
};

export default PlatformCard;
