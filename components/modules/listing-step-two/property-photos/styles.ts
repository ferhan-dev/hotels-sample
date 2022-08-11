import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(
  ({ breakpoints }) => ({
    root: {
      paddingTop: "48px",
      paddingBottom: "24px",
      minHeight: "calc(100vh - 198px)",
      [breakpoints.down("xs")]: {
        paddingTop: "24px",
      },
    },
    singleImage: {
      maxWidth: "100% !important",
      flexBasis: "100% !important",
      "& > div": {
        height: "250px",
      },
    },
    input: {
      opacity: 0,
      position: "absolute",
      width: "100%",
      height: "100%",
    },
  }),
  { index: 3 }
);

export const useAddPhotoStyles = makeStyles(
  ({ breakpoints, palette, shape }) => ({
    root: {
      border: `1px dashed ${palette.divider}`,
      borderRadius: shape.borderRadius,
      padding: "4px",
    },
    avatar: {
      background: palette.grey[100],
      width: "100%",
      height: "120px",
      flexWrap: "wrap",
      [breakpoints.between(400, "xs")]: {
        height: "160px",
      },
    },
    iconBtn: {
      alignItems: "center",
      background: `${palette.grey[900]} !important`,
      color: palette.common.white,
      display: "flex",
      justifyContent: "center",
      height: "24px",
      position: "absolute",
      right: "12.67px",
      top: "12.67px",
      width: "24px",
      zIndex: 1200,
    },
    imagesWrapper: {
      display: "flex",
      "& > div": {
        flexBasis: "25%",
        maxWidth: "25%",
      },
      flexWrap: "wrap",
      [breakpoints.down("xs")]: {
        "& > div": {
          flexBasis: "50%",
          maxWidth: "50%",
        },
        width: "100%",
      },
    },
    input: {
      opacity: 0,
      position: "absolute",
      width: "100%",
      height: "100%",
    },
    logo: {
      height: "32px",
      width: "24px",
    },
    text: {
      textAlign: "center",
    },
  }),
  { index: 1 }
);

export const useDialogStyles = makeStyles(
  ({ palette }) => ({
    deleteBtn: {
      background: palette.error.main,
      color: palette.common.white,
      width: "82px",
      "&:hover": {
        background: palette.error.dark,
      },
    },
    flexWrapper: {
      alignItems: "center",
      display: "flex",
      gap: "24px",
      justifyContent: "space-between",
    },
    secondaryBtn: {
      width: "85px",
    },
  }),
  { index: 3 }
);

export const useEditPhotoStyles = makeStyles(
  ({ palette, shape }) => ({
    gridContainer: {
      marginBottom: "24px",
      marginTop: "24px",
    },
    iconBtn: {
      alignItems: "center",
      border: `1px solid ${palette.divider}`,
      borderRadius: shape.borderRadius,
      display: "flex",
      justifyContent: "center",
      height: "32px",
      position: "relative",
      width: "32px",
    },
    iconBtnWrapper: {
      display: "flex",
      gap: "8px",
      marginLeft: "auto",
      width: "fit-content",
    },
    input: {
      opacity: 0,
      position: "absolute",
      width: "100%",
      height: "100%",
    },
    image: {
      background: palette.grey[100],
      margin: "8px 0 12px 0",
      position: "relative",
      width: "100%",
    },
  }),
  { index: 2 }
);
