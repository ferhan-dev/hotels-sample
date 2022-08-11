import React from "react";
import { Box, Avatar, Typography, Modal, Button } from "@material-ui/core";
import { useStylesSteps } from "../Payment/styles";

interface Props {
  modalOpen?: any;
  setModalOpen?: any;
}
const AddPaymentModal: React.FC<Props> = ({ modalOpen, setModalOpen }) => {
  const classes = useStylesSteps();
  return (
    <Modal
      open={modalOpen}
      onClose={() => setModalOpen(false)}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Box className={classes.addModal}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          className={classes.modalHead}
        >
          <Typography variant="h6">Add a payment method</Typography>
          <Avatar
            src={"/images/iconClose.png"}
            // className={classes.closeIcons}
          />
        </Box>
        <Box className={classes.method}>
          <Typography variant="h6">Name this payment method</Typography>
          <input
            type="text"
            placeholder="Company"
            className={classes.methodInput}
          />
        </Box>
        <Box className={classes.formDate}>
          <Avatar src={"/images/card.png"} className={classes.cardIcons} />
          <input
            type="text"
            placeholder="Card number"
            className={`${classes.methodInput} ${classes.inputCard} `}
            style={{
              paddingLeft: "35px",
            }}
          />
          <Typography className={classes.titleDate}>MM/YY</Typography>
          <Typography className={classes.titleCvv}>CVV</Typography>
        </Box>
        <Box display="flex">
          <Button className={classes.btnCancle}>Cancel</Button>
          <Button
            className={classes.btnSave}
            onClick={() => {
              setModalOpen(false);
            }}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
export default AddPaymentModal;
