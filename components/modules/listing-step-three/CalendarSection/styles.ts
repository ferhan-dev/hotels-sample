import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(
  ({ breakpoints, palette }) => ({
    root: {
      paddingTop: "48px",
      paddingBottom: "48px",
      minHeight: "calc(100vh - 198px)",
      [breakpoints.down("xs")]: {
        paddingTop: "24px",
      },
    },
    btn: {
      padding: "8px 16px",
      [breakpoints.down("xs")]: {
        width: "100%",
        marginTop: "16px",
      },
    },
    flexWrapper: {
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      marginTop: "24px",
    },
    menuWrapper: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    },
    text: {
      alignItems: "center",
      background: palette.grey[100],
      borderRadius: "8px",
      display: "flex",
      height: "48px",
      justifyContent: "center",
      padding: "12px",
    },
    textWrapper: {
      alignItems: "center",
      display: "flex",
      gap: "12px",
      [breakpoints.down("xs")]: {
        gap: "9px",
        alignItems: "flex-start",
        flexDirection: "column",
      },
    },
  }),
  { index: 1 }
);

export const useDialogStyles = makeStyles(
  ({ breakpoints, palette, shape }) => ({
    paper: ({ type }: { type?: "delete" }) => ({
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      gap: type === "delete" ? "20px" : "16px",
    }),
    container: ({ type }: { type?: "delete" }) => ({
      justifyContent: type === "delete" ? "flex-end" : "space-between",
      gap: "16px",
      padding: 0,
      maxWidth: "none",
      "& > button": {
        margin: 0,
        width: type === "delete" ? "fit-content" : "100%",
        [breakpoints.down("xs")]: {
          width: type === "delete" ? "100%" : undefined,
        },
      },
    }),
    checkbox: {
      flexDirection: "column-reverse",
      gap: "4px",
    },
    checkboxFlexWrapper: {
      display: "flex",
      gap: "24px",
      [breakpoints.down("xs")]: {
        flexWrap: "wrap",
        gap: "16px",
      },
      [breakpoints.down(330)]: {
        gap: "12px",
      },
    },
    collapseContainer: {
      border: `1px solid ${palette.divider}`,
      borderRadius: shape.borderRadius,
      padding: "20px",
    },
    deleteOutlinedBtn: {
      color: palette.error.main,
    },
    deleteBtn: {
      background: `${palette.error.main}`,
      "&:hover": {
        background: `${palette.error.dark}`,
      },
    },
    flexWrapper: {
      display: "flex",
      gap: "16px",
    },
    importWrapper: {},
    select: {
      [breakpoints.up("sm")]: {
        gap: "24px",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        "& > div": {
          width: "96px",
          margin: 0,
        },
      },
    },
    selectFlexWrapper: {
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      marginTop: "16px",
    },
    counterFlexWrapper: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
  }),
  { index: 2 }
);
