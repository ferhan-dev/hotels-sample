import React from "react";
import { useSearchStyles } from "../styles";
import { Typography, Grid, Button, Checkbox } from "@material-ui/core";
import clsx from "clsx";
import AmenitiesIcon from "src/components/elements/icons/Amenities";
import Menu from "@material-ui/core/Menu";
import { Box } from "@material-ui/core";
import { useSmallSize } from "src/hooks";
import { useSelector, useDispatch } from 'react-redux';
import { IAmenity } from "src/types/search";
import { getSelectedAmenities } from "src/store/selectors/propertySelectors";
import { getAllAmenities } from "src/utils/searchProperties";
import { setSelectedAmenities } from "src/store/actions/propertyActions";

type Props = {
  inTopBar: boolean;
  handleClose?: () => void;
  inMobileFilter?: boolean;
  setAmenitiesSM?: React.Dispatch<any>;
};

const SearchAmenities: React.FC<Props> = ({ inTopBar }) => {
  const isSmallSize = useSmallSize();

  const classes = useSearchStyles({ inTopBar, isSmallSize });
  const amenities = useSelector(getSelectedAmenities);
  const selectedAmenities = amenities?.filter((amenity: any) => {
    return amenity.status === true;
  });

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Grid
        container
        // alignItems="center"
        justifyContent="flex-start"
        className={clsx(classes.flexWrapper, classes.searchButtonContainer)}
        style={{ width: "192px" }}
        component={Button}
        onClick={handleClick}
        aria-controls="amenities-menu"
        aria-haspopup="true"
      >
        {!inTopBar && (
          <Grid item className={classes.searchButtonIcon}>
            <AmenitiesIcon />
          </Grid>
        )}
        <Grid item className={inTopBar ? classes.headerSearchOptionText : ""}>
          <Typography variant="body1">Amenities</Typography>
          {!inTopBar && (
            <Typography variant="body2">{selectedAmenities?.length === 0 ? "Add amenities" : `${selectedAmenities?.length} selected`}</Typography>
          )}
        </Grid>
      </Grid>

      <Menu
        id="amenities-menu"
        className={clsx(classes.amenitiesMenu)}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <AmenitiesComp inTopBar={inTopBar} handleClose={handleClose} />
      </Menu>
    </>
  );
};

export default SearchAmenities;

export const AmenitiesComp: React.FC<Props> = ({ inTopBar, handleClose, inMobileFilter, setAmenitiesSM }) => {
  const isSmallSize = useSmallSize();
  const dispatch = useDispatch();

  const classes = useSearchStyles({ inTopBar, isSmallSize });
  const amenities = useSelector(getSelectedAmenities);

  const [allAmenities, setAllAmenities] = React.useState(amenities);

  const handleAmenitySelection = (amenity: IAmenity) => {
    const newAmenities = allAmenities.map((object: any) => {
      const newAmenity = { ...object };
      if (newAmenity.id === amenity.id) {
        newAmenity.status = !object.status;
      }
      return newAmenity;
    });

    setAllAmenities(newAmenities);

    isSmallSize && dispatch(setSelectedAmenities(allAmenities));

    setAmenitiesSM && setAmenitiesSM(newAmenities);
  };

  const handleCancel = () => {
    setAllAmenities(amenities);
    handleClose && handleClose();
  };

  const handleApply = () => {
    console.log("apply");
    dispatch(setSelectedAmenities(allAmenities));
    handleClose && handleClose();
  };

  React.useEffect(() => {
    if (!amenities) {
      const amenities_data = getAllAmenities();
      console.log(amenities);

      setAllAmenities(amenities_data);
      dispatch(setSelectedAmenities(amenities_data));
    }
  }, []);

  return (
    <>
      {allAmenities?.map((amenity: IAmenity) => {
        return (
          <li onClick={() => handleAmenitySelection(amenity)} key={amenity.id}>
            <Box className={classes.buttonGroupContainer} style={{ width: "100%" }}>
              <Checkbox
                checked={amenity.status}
                color="primary"
                className={classes.amenityCheckBox}
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
              {amenity.icon}
              {/* <img src={amenity.icon} alt={amenity.icon} className={classes.amenityIcon} /> */}
              <Typography variant="body1">{amenity.label}</Typography>
            </Box>
          </li>
        );
      })}
      {!inMobileFilter && !isSmallSize && (
        <Box className={classes.amenitiesButton}>
          <Button className={classes.amenitiesButtonCancel} onClick={handleCancel}>
            Cancel
          </Button>
          <Button className={classes.amenitiesButtonApply} onClick={handleApply}>
            Apply
          </Button>
        </Box>
      )}
    </>
  );
};
