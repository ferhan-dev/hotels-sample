import { Box, Grid } from "@material-ui/core";
import React, { useState } from "react";
import AppButton from "src/components/elements/Button";

import AppDialog from "src/components/elements/Dialog";
import AppDivider from "src/components/elements/Divider";
import CloseIcon from "src/components/elements/icons/Close";
import AppTextField from "src/components/elements/TextField";
import AppTypography from "src/components/elements/Typography";
import { PlatformVariant, IcalFeedValues } from "src/types";
import ActionButtonGroup from "src/components/modules/ButtonGroup";
import { platforms } from "../data";
import { useDialogStyles } from "../styles";
import PlatformCard from "./Card";
import PlatformStepper from "./Stepper";

interface Props {
  open: boolean;
  onClose: () => void;
  onImport: (platform: IcalFeedValues) => void;
}

const getPlatformText = (value?: PlatformVariant) => {
  if (!value) return "Import and view bookings from other platforms";

  if (value === "Other Calendar") return "Import from other iCal platforms";

  const platform = platforms.find((platform) => platform.id === value)!;
  return "Import calendar and sync from " + platform?.id;
};

const getPlatformSteps = (value: PlatformVariant) => {
  const platform = platforms.find((platform) => platform.id === value)!;
  return platform.steps;
};

const CalendarImportDialog: React.FC<Props> = ({ open, onClose, onImport }) => {
  const classes = useDialogStyles({});
  const [platform, setPlatform] = useState<PlatformVariant | undefined>();
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");

  const isOtherPlatform = platform === "Other Calendar";

  const reset = () => {
    setPlatform(undefined);
    setUrl("");
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  const handleImport = () => {
    onImport({
      id: 0,
      type: platform!,
      url,
      name: isOtherPlatform ? name : platform!
    });
    reset();
    onClose();
  };

  return (
    <AppDialog classes={{ paper: classes.paper }} open={open}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <AppTypography component="h2" neutralColor={900} variant="displaySmall">
          {getPlatformText(platform)}
        </AppTypography>
        <CloseIcon onClick={handleClose} />
      </Box>
      {isOtherPlatform ? (
        <>
          <AppTextField
            label="URL"
            name="url"
            optional
            placeholder="Paste calendar adress’s (URL) here"
            onChange={(e) => {
              setUrl(e.target.value);
            }}
          />
          <AppTextField
            label="Platform Name"
            name="name"
            optional
            placeholder="Platform Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </>
      ) : platform ? (
        <>
          <PlatformStepper
            platform={platform}
            steps={getPlatformSteps(platform)}
          />
          <AppTextField
            label={`Paste ${platform}'s calendar adress (URL)`}
            name="url"
            optional
            placeholder="Paste calendar adress’s (URL) here"
            onChange={(e) => {
              setUrl(e.target.value);
            }}
          />
        </>
      ) : (
        <>
          <AppTypography component="h2" neutralColor={900} variant="body">
            Which platform would you like to import into ChaletRetreat?
          </AppTypography>
          <AppDivider />
          <Grid container className={classes.importWrapper} spacing={2}>
            {React.Children.toArray(
              platforms.map((item) => (
                <Grid item sm={3} xs={6}>
                  <PlatformCard
                    {...item}
                    onSelectPlatform={() => setPlatform(item.id)}
                  />
                </Grid>
              ))
            )}
          </Grid>
          <AppButton
            style={{ padding: "8px 16px" }}
            fullWidth
            onClick={() => setPlatform("Other Calendar")}
            variant="outlined"
          >
            Import from Other iCal platform
          </AppButton>
        </>
      )}
      <AppDivider />
      <ActionButtonGroup
        containerProps={{ className: classes.container }}
        primaryBtnProps={{
          children: "Import",
          onClick: handleImport,
          disabled: !platform || !url || (isOtherPlatform && !name),
        }}
        secondaryBtnProps={{
          children: "Cancel",
          onClick: handleClose,
          startIcon: null,
        }}
      />
    </AppDialog>
  );
};

export default CalendarImportDialog;
