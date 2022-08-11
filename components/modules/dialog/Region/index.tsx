import { Box, Typography, Button } from "@material-ui/core";
import React, { useCallback } from "react";
import AppDialog from "src/components/elements/Dialog";
import AppDivider from "src/components/elements/Divider";
import CloseIcon from "src/components/elements/icons/Close";
import { ModalVariant } from "src/types/modal";
import { useScreenSizeDown } from "src/hooks/screenSize";
import { useStyles } from "./styles";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { useSmallSize } from "src/hooks";
import clsx from "clsx";

interface Props {
  open: boolean;
  onClose: () => void;
  setModal: React.Dispatch<React.SetStateAction<ModalVariant>>;
}

const RegionDialog: React.FC<Props> = ({ open, onClose }) => {
  const isSmallSize = useSmallSize();

  const classes = useStyles();
  const isSmallerSizeDown = useScreenSizeDown("xs");

  const handleClose = useCallback(() => {
    onClose();
  }, []);

  return (
    <AppDialog className={classes.regionDialogWrapper} maxWidth="sm" open={open}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant={isSmallerSizeDown ? "h6" : "h5"}>Region & Language</Typography>
        <CloseIcon onClick={handleClose} />
      </Box>
      <AppDivider style={{ margin: "24px 0" }} />
      <Box>
        <Typography variant="body2">Region</Typography>
        <Box className={classes.regionOptionsContainer} style={{ flexWrap: isSmallSize ? "wrap" : undefined }}>
          <Box className={clsx(classes.regionItemContainer, isSmallSize && classes.regionOptionsContainerSM)}>
            <Typography variant="body2">
              {/* <CanadaFlagIcon className={classes.flagIcon} /> */}
              {/* <FlagIcon className={classes.flagIcon} /> */}
              <img src="/images/canada.svg" alt="canada flag" className={classes.flagIcon} />
              Canada
            </Typography>
            <CheckCircleIcon className={classes.checkIcon} />
          </Box>
          <Box></Box>
        </Box>
      </Box>
      <Box>
        <Typography variant="body2">Language</Typography>
        <Box className={classes.regionOptionsContainer} style={{ flexWrap: isSmallSize ? "wrap" : undefined }}>
          <Box className={clsx(classes.regionItemContainer, isSmallSize && classes.regionOptionsContainerSM)}>
            <Typography variant="body2">
              {/* <FlagIcon className={classes.flagIcon} /> */}
              <img src="/images/EN.svg" alt="en language" className={classes.flagIcon} />
              English
            </Typography>
            <CheckCircleIcon className={classes.checkIcon} />
          </Box>
          <Box className={clsx(classes.regionItemContainer, isSmallSize && classes.regionOptionsContainerSM)}>
            <Typography variant="body2">
              {/* <FlagIcon className={classes.flagIcon} /> */}
              <img src="/images/fr.svg" alt="fr language" className={classes.flagIcon} />
              French
            </Typography>
            <CheckCircleIcon className={classes.checkIcon} />
          </Box>
        </Box>
      </Box>
      <Box className={classes.amenitiesButton}>
        <Button className={classes.amenitiesButtonCancel}>Cancel</Button>
        <Button className={classes.amenitiesButtonApply}>Apply</Button>
      </Box>
    </AppDialog>
  );
};

export default RegionDialog;
