import { Box } from "@material-ui/core";
import React from "react";
import AppDialog from "src/components/elements/Dialog";
import AppDivider from "src/components/elements/Divider";
import CloseIcon from "src/components/elements/icons/Close";
import AppTypography from "src/components/elements/Typography";
import ActionButtonGroup from "src/components/modules/ButtonGroup";
import { useDialogStyles } from "./styles";

interface DeletePhotoDialogProps {
  open: boolean;
  onClose: () => void;
  onDelete: () => void;
}

export const DeletePhotoDialog: React.FC<DeletePhotoDialogProps> = ({
  open,
  onClose,
  onDelete,
}) => {
  const classes = useDialogStyles();

  const handleConfirmAction = () => {
    onClose();
    onDelete();
  };

  return (
    <AppDialog maxWidth="sm" open={open}>
      <Box className={classes.flexWrapper}>
        <AppTypography variant="displaySmall">
          Are you sure you want to delete the photo?
        </AppTypography>
        <CloseIcon onClick={onClose} />
      </Box>
      <AppDivider style={{ margin: "20px 0" }} />
      <AppTypography neutralColor={500} variant="body">
        If you decide to delete this photo all titles and additional information
        as well as the modifications which have been applied to it will be lost.
      </AppTypography>
      <ActionButtonGroup
        containerProps={{
          maxWidth: "sm",
          style: { padding: 0, marginTop: "20px" },
        }}
        secondaryBtnProps={{
          className: classes.secondaryBtn,
          children: "Cancel",
          onClick: onClose,
          startIcon: null,
        }}
        primaryBtnProps={{
          className: classes.deleteBtn,
          children: "Delete",
          onClick: handleConfirmAction,
        }}
      />
    </AppDialog>
  );
};

interface AddPhotoDialogProps {
  image?: File;
  open: boolean;
  onClose: () => void;
  onAddNewImage: () => void;
  onDeleteNewImage: () => void;
}

export const AddPhotoDialog: React.FC<AddPhotoDialogProps> = ({
  image,
  children,
  open,
  onAddNewImage,
  onDeleteNewImage,
  onClose,
}) => {
  const classes = useDialogStyles();

  const handleConfirmAction = () => {
    onAddNewImage();
    onClose();
  };

  const handleCancelAction = () => {
    onDeleteNewImage();
    onClose();
  };

  return (
    <AppDialog maxWidth="sm" open={open}>
      <Box className={classes.flexWrapper}>
        <AppTypography variant="displaySmall">Upload Image</AppTypography>
        <CloseIcon onClick={onClose} />
      </Box>
      <AppDivider style={{ margin: "20px 0" }} />
      {children}
      <ActionButtonGroup
        containerProps={{
          maxWidth: "sm",
          style: { padding: 0, marginTop: "20px", justifyContent: "flex-end" },
        }}
        secondaryBtnProps={{
          className: classes.secondaryBtn,
          children: "Cancel",
          onClick: handleCancelAction,
          startIcon: null,
        }}
        primaryBtnProps={{
          color: "primary",
          children: "Save",
          disabled: !image,
          style: { width: "78px", marginLeft: "16px" },
          variant: "contained",
          onClick: handleConfirmAction,
        }}
      />
    </AppDialog>
  );
};
