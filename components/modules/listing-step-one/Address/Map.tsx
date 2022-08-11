import { Box, IconButton, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import AppButton from "src/components/elements/Button";
import LocationIcon from "src/components/elements/icons/Location";
import AppTypography from "src/components/elements/Typography";
import { palette } from "src/components/foundation/palette";
import AddressLocationDialog from "./LocationDialog";
// import { useAddListingContext } from "src/context";

const useStyles = makeStyles(
  ({ palette }) => ({
    map: {
      alignItems: "center",
      display: "flex",
      height: "240px",
      justifyContent: "center",
      margin: "16px 0",
      width: "100%",
    },
    button: {
      background: `${palette.primary.main} !important`,
    },
  }),
  { index: 1 }
);

const AddressMap: React.FC = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const mapElement = (
    <Box className={classes.map}>
      <IconButton className={classes.button}>
        <LocationIcon fill={palette.common?.white} />
      </IconButton>
    </Box>
  );
  return (
    <div>
      <AppTypography
        neutralColor={900}
        style={{ marginBottom: "4px" }}
        variant="heading"
      >
        Position on the map
      </AppTypography>
      <AppTypography neutralColor={500} variant="body">
        If necessary, you can zoom to place the marker correctly on the map.
      </AppTypography>
      {mapElement}
      <AppButton
        fullWidth
        onClick={() => setOpen(true)}
        style={{ padding: "8px", marginBottom: "24px" }}
        variant="outlined"
      >
        Adjust Location
      </AppButton>
      <AddressLocationDialog open={open} onClose={() => setOpen(false)}>
        {mapElement}
      </AddressLocationDialog>
    </div>
  );
};

export default AddressMap;
