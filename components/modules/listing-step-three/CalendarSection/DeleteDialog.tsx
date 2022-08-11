import { Box } from "@material-ui/core";
import React from "react";
import AppDialog from "src/components/elements/Dialog";
import AppDivider from "src/components/elements/Divider";
import CloseIcon from "src/components/elements/icons/Close";
import AppTypography from "src/components/elements/Typography";
import ActionButtonGroup from "src/components/modules/ButtonGroup";
import { useDialogStyles } from "./styles";

interface Props {
  open: boolean;
  onClose: () => void;
  onDelete: () => void;
  subTitle: string;
  title: string;
}

const DeleteDialog: React.FC<Props> = ({
  open,
  onClose,
  onDelete,
  subTitle,
  title,
}) => {
  const classes = useDialogStyles({ type: "delete" });
  return (
    <AppDialog open={open} classes={{ paper: classes.paper }} maxWidth="sm">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <AppTypography component="h2" neutralColor={900} variant="displaySmall">
          {title}
        </AppTypography>
        <CloseIcon onClick={onClose} />
      </Box>
      <AppDivider />
      <AppTypography neutralColor={500} variant="body">
        {subTitle}
      </AppTypography>
      <ActionButtonGroup
        containerProps={{ className: classes.container }}
        primaryBtnProps={{
          children: "Delete",
          className: classes.deleteBtn,
          onClick: onDelete,
        }}
        secondaryBtnProps={{
          children: "Cancel",
          onClick: onClose,
          startIcon: null,
        }}
      />
    </AppDialog>
  );
};

export default DeleteDialog;
