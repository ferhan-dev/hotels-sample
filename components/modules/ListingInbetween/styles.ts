import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    display: "flex",
    gap: "24px",
    justifyContent: "space-between",
    paddingTop: "48px",
    paddingBottom: "24px",
    maxWidth: "1210px",
    minHeight: "calc(100vh - 198px)",
    [breakpoints.down("xs")]: {
      paddingTop: "24px",
    },
  },
  image: {
    width: "536px",
    height: "680px",
    maxHeight: "75.56vh",
    [breakpoints.down(1208)]: {
      maxWidth: "500px",
    },
    [breakpoints.down(1000)]: {
      maxWidth: "450px",
    },
    [breakpoints.down("md")]: {
      display: "none !important",
    },
  },
  flexWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  stepperWrapper: {
    maxWidth: breakpoints.values.sm,
    width: "100%",
    [breakpoints.up("lg")]: {
      maxHeight: "calc(100vh - 160px)",
      overflowY: "scroll",
    },
    [breakpoints.down("md")]: {
      margin: "0 auto",
    },
  },
}));

export const useStepStyles = makeStyles(
  ({ palette, shape }) => ({
    root: ({ completed }: { completed?: boolean }) => ({
      alignItems: "center",
      borderRadius: shape.borderRadius,
      display: "flex",
      gap: "16px",
      padding: "16px 16px 16px 24px",
      background: completed ? palette.grey[100] : undefined,
      border: completed ? "none" : `1px solid ${palette.divider}`,
    }),
    label: ({ completed }: { completed?: boolean }) => ({
      alignItems: "center",
      background: completed ? palette.primary.main : undefined,
      border: completed ? "none" : `1px solid ${palette.divider}`,
      borderRadius: "50%",
      color: completed ? palette.common.white : palette.grey[900],
      display: "flex",
      height: "32px",
      justifyContent: "center",
      width: "32px",
    }),
  }),
  { index: 1 }
);

export const useStepContentStyles = makeStyles(
  ({ palette, shape }) => ({
    root: {
      alignItems: "center",
      borderRadius: shape.borderRadius,
      display: "flex",
      gap: "16px",
      height: "48px",
      justifyContent: "space-between",
      padding: "8px 8px 8px 12px",
      border: `1px solid ${palette.divider}`,
    },
    btn: {
      alignItems: "center",
      display: "flex",
      height: "32px",
      justifyContent: "center",
      width: "32px",
    },
  }),
  { index: 1 }
);
