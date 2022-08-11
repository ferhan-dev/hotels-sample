import { Box } from "@material-ui/core";
import React from "react";

import AppDialog from "src/components/elements/Dialog";
import AppDivider from "src/components/elements/Divider";
import CloseIcon from "src/components/elements/icons/Close";
import AppTypography from "src/components/elements/Typography";
import ActionButtonGroup from "src/components/modules/ButtonGroup";
import { useStyles } from "./styles";

interface Props {
  open: boolean;
  onClose: () => void;
}

const AddressLocationDialog: React.FC<Props> = ({
  open,
  onClose,
  children,
}) => {
  const classes = useStyles();
  return (
    <AppDialog
      classes={{
        paper: classes.paper,
      }}
      open={open}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <AppTypography component="h2" neutralColor={900} variant="displaySmall">
          Postion On The Map
        </AppTypography>
        <CloseIcon onClick={onClose} />
      </Box>

      <AppTypography neutralColor={500} variant="body">
        If necessary, you can zoom to place the marker correctly on the map.
      </AppTypography>
      <AppDivider style={{ margin: "20px 0" }} />
      {children}
      <ActionButtonGroup
        containerProps={{
          style: { width: "100%", maxWidth: "none", padding: 0 },
        }}
        primaryBtnProps={{
          className: classes.primaryBtn,
          children: "Confirm location",
          onClick: onClose,
        }}
        secondaryBtnProps={{
          className: classes.secondaryBtn,
          children: "Cancel",
          onClick: onClose,
          startIcon: null,
        }}
      />
    </AppDialog>
  );
};

export default AddressLocationDialog;
