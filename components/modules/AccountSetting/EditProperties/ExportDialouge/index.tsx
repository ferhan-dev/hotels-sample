import { Box, Typography } from "@material-ui/core";
import React from "react";
import AppButton from "src/components/elements/Button";
import AppDialog from "src/components/elements/Dialog";
import AppDivider from "src/components/elements/Divider";
import CloseIcon from "src/components/elements/icons/Close";
import { useDialogStyles } from "./styles";

interface Props {
  open: boolean;
  onClose: () => void;
}

const CalendarImportDialog: React.FC<Props> = ({ open, onClose }) => {
  const classes = useDialogStyles({});

  const handleClose = () => {
    onClose();
  };

  return (
    <AppDialog classes={{ paper: classes.paper }} open={open}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h5">Export your calendar</Typography>
        <CloseIcon onClick={handleClose} />
      </Box>
      <AppDivider />
      <Typography variant="caption">Copy and paste the link into other iCal applications of other platforms and they will automatically keep your listing’s availablility up-to-date</Typography>
      <Typography variant="h6">Calendar URL</Typography>
      <Box style={{border: "1px solid #EAEEF5", borderRadius: "24px", display: "flex", flexDirection: "row"}}>
        <Box style={{marginLeft:"5px", marginTop:"4px"}}>
          <img src="/images/Vector.png"></img>
        </Box>
        <Box style={{marginLeft:"10px", marginTop:"0px"}}>
          <Typography variant="caption"> api.chaletretreat.com/i-1690-dont-1...</Typography>
        </Box>
      </Box>
      <AppButton variant="contained" style={{backgroundColor: "#1DAF92", color: "white", borderRadius: "24px"}}> Copy Link</AppButton>
    </AppDialog>
  );
};

export default CalendarImportDialog;
