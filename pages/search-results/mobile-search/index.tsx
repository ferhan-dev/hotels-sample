import React from "react";
import Button from "@material-ui/core/Button";
import { LocationSearchBox } from "src/components/modules/SearchPage/google-maps/ResultsMap";
import { DateRangeComp } from "src/components/modules/home/HomeHero/SearchComponents/SearchDate";
import { GuestMenuComp } from "src/components/modules/home/HomeHero/GuestsMenu";
import { AmenitiesComp } from "src/components/modules/home/HomeHero/SearchComponents/SearchAmenities";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Box } from "@material-ui/core";
import { useStyles } from "../../../components/modules/SearchPage/mobileSearchStyles";
import { useRouter } from "next/router";
import { TO_HOME_PAGE, TO_SEARCH_RESULTS_PAGE } from "src/constants";
import { useSelector } from "react-redux";
import { getSelectedAmenities, getSelectedDateRange, getSelectedGuests, getSelectedLocation } from "src/store/selectors/propertySelectors";

const navItems = ["Location", "Dates", "Guests", "Amenities", "Completed"];

export default function MobileSearchStepper() {
  const router = useRouter();

  const classes = useStyles();

  const selectedLocation = useSelector(getSelectedLocation);
  const selectedDateRange = useSelector(getSelectedDateRange);
  const selectedGuests = useSelector(getSelectedGuests);
  const selectedAmenities = useSelector(getSelectedAmenities)?.filter((amenity: any) => {
    return amenity.status === true;
  });

  const [activeNav, setActiveNav] = React.useState<number>(0);
  const inTopBar = false;
  const inMobileView = true;

  const handleNext = () => {
    if (activeNav === 3) {
      router.push(TO_SEARCH_RESULTS_PAGE);
    } else {
      setActiveNav(activeNav + 1);
    }
  };
  const handlePrev = () => {
    if (activeNav === 0) {
      router.push(TO_HOME_PAGE);
    } else {
      setActiveNav(activeNav - 1);
    }
  };

  const getNavButtonStatus = () => {
    if (activeNav === 0 && !selectedLocation.address) return true;
    if (activeNav === 1 && !selectedDateRange.startDate) return true;
    if (activeNav === 2 && selectedGuests.adults === 0 && selectedGuests.children === 0 && selectedGuests.infants === 0) return true;
    if (activeNav === 3 && selectedAmenities && selectedAmenities.length === 0) return true;

    return false;
  };

  return (
    <div className={classes.root}>
      <Box className={classes.navBtnWrapper}>
        <Button onClick={handlePrev} className={classes.navBtnPrev} startIcon={<ArrowBackIosIcon />}>
          {navItems[activeNav]}
        </Button>
        <Button onClick={handleNext} className={classes.navBtnNext} endIcon={<ArrowForwardIosIcon />} disabled={getNavButtonStatus()}>
          {navItems[activeNav + 1]}
        </Button>
      </Box>

      {activeNav === 0 && <LocationSearchBox inTopBar={inTopBar} inMobileView={inMobileView} />}

      {activeNav === 1 && (
        <Box className={classes.mobileDateWrapper}>
          <DateRangeComp open={true} inMobileView={inMobileView} inTopBar={false} />
        </Box>
      )}

      {activeNav === 2 && (
        <Box className={classes.mobileGuestsWrapper}>
          <GuestMenuComp inTopBar={inTopBar} />
        </Box>
      )}
      {activeNav === 3 && (
        <Box className={classes.mobileAmenitiesWrapper}>
          <AmenitiesComp inTopBar={inTopBar} />
        </Box>
      )}
    </div>
  );
}
