import { Box, Container, Avatar, Typography } from "@material-ui/core";
import React, { useState } from "react";

import AppButton from "src/components/elements/Button";
import AppDivider from "src/components/elements/Divider";
import UploadIcon from "src/components/elements/icons/Upload";
import AppSelect from "src/components/elements/Select";
import AppTextArea from "src/components/elements/TextArea";
import AppTextField from "src/components/elements/TextField";
import AppTypography from "src/components/elements/Typography";
import { useScreenSizeDown } from "src/hooks/screenSize";
import YesOrNoOption from "../../../YesOrNoOption";
import { checkInOptions, internetTypeOptions } from "./data";
import { useStyles } from "./styles";

// const { back, next }: ListingStepNavigate = {
//   next: { section: "phone-number", step: "three" },
//   back: { section: "laws-and-taxes", step: "three" },
// };

interface Props {
  setEditvalue?: any;
}
const GuestReception: React.FC<Props> = ({setEditvalue}) => {
  const [value, setValue] = useState("");
  const [hasWifiAccess, setHasWifiAccess]: any = useState<
    "yes" | "no" | undefined
  >(undefined);

  const classes = useStyles();
  const isSmallSizeDown = useScreenSizeDown("sm");

  const disableGutters = isSmallSizeDown ? false : true;
  const maxWidth = "sm" as const;

  return (
    <>
      <Box className={classes.personalInfo}>
        <Container className={classes.container}>
          <Box display="flex" alignItems="center" justifyContent="space-between" style={{ paddingBottom: "25px" }}>
            <Box display="flex" alignItems="center" >
              <Avatar src={"/images/leftArrow.png"} className={classes.leftArrow} onClick={() => setEditvalue("")}/>
              <Typography variant="h6">What number can guest use for support?</Typography>
            </Box>
            <Box>
                <AppButton variant="contained" style={{backgroundColor: "#1DAF92", borderRadius: "24px", color: "white"}}> Save </AppButton>
            </Box>
          </Box>
        </Container>
      </Box>
      <Container
        disableGutters={disableGutters}
        maxWidth={maxWidth}
        className={classes.root}
      >
        <AppTypography
          component="h2"
          neutralColor={900}
          variant="displayMedium"
        >
          Guest's reception
        </AppTypography>
        <AppTypography neutralColor={800} variant="heading">
          Internet
        </AppTypography>
        <AppSelect
          name="type"
          label="What is your internet type?"
          placeholder="Choose one"
          withLabel
          options={internetTypeOptions}
          value={value}
          onChange={(e) => setValue(e.target.value as string)}
        />
          <>
            <YesOrNoOption
              label="Do you have wifi access?"
              value={hasWifiAccess}
              onChange={setHasWifiAccess}
            />
                <AppTextField
                  label="Wi-Fi network name"
                  name="wifiName"
                  optional
                  placeholder="Type here"
                />
                <AppTextField
                  label="Wi-Fi password"
                  name="wifiName"
                  optional
                  placeholder="Type here"
                />

          </>
        <AppDivider />
        <Box>
          <AppTypography neutralColor={800} variant="action">
            Property guide
          </AppTypography>
          <AppButton
            fullWidth
            startIcon={<UploadIcon />}
            style={{ marginTop: "8px" }}
            variant="outlined"
          >
            Upload
          </AppButton>
        </Box>
        <AppDivider />
        <AppSelect
          name="type"
          label="Check-in method"
          placeholder="Choose a check-in method"
          withLabel
          options={checkInOptions}
        />
        <AppTextArea
          name="text"
          label="Tell your guest to use the self check-in option"
          placeholder="You can type here"
        />
      </Container>
      <AppDivider />
    </>
  );
};

export default GuestReception;
