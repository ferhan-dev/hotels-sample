import React from "react";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";

import { useFilterStyles, useStyles } from "./styles";
import { Box, Button, TextField } from "@material-ui/core";
import { MoreFiltersComp } from "./ResultsFilters/MoreFilters";
import { useSmallSize } from "src/hooks";
import Slider from "@material-ui/core/Slider";
import { useSelector, useDispatch } from "react-redux";
import { IMoreFilters } from "src/types/search-filters";
import { AmenitiesComp } from "../home/HomeHero/SearchComponents/SearchAmenities";
import { getMoreFilters, getSelectedAmenities } from "src/store/selectors/propertySelectors";
import { setMoreFilter, setPriceRangeFilter, setSelectedAmenities } from "src/store/actions/propertyActions";

interface Props {
  onClose: () => void;
}

// function priceText(value: any) {
//   return `${value}$`;
// }

function valuetext(value: number) {
  return `${value}°C`;
}

const ResultsFilterMobile: React.FC<Props> = ({ onClose }) => {
  const isSmallSize = useSmallSize();
  const drawerStyles = useFilterStyles();

  const classes = useStyles({ isSmallSize });
  const dispatch = useDispatch();

  const moreFilters: IMoreFilters | null = useSelector(getMoreFilters);
  const amenitiesFilter = useSelector(getSelectedAmenities);

  // const [sortBySM, setSortBySM] = React.useState(null);
  // const [priceRangeSM, setPriceRangeSM] = React.useState(null);
  const [amenitiesSM, setAmenitiesSM] = React.useState(amenitiesFilter);
  const [moreFiltersSM, setMoreFiltersSM] = React.useState(moreFilters);

  // const [Price, setPrice] = React.useState([20, 37]);
  // const handlePriceChange = (event, newValue) => {
  // console.log(newValue);
  //setPrice(newValue);
  // };

  // console.log(Price);

  const [value, setValue] = React.useState<number[]>([0, 2000]);

  const handleChange = (event: any, newValue: number | number[]) => {
    console.log(newValue);
    console.log(event);
    setValue(newValue as number[]);
  };

  const handleApply = () => {
    dispatch(setSelectedAmenities(amenitiesSM));
    dispatch(setMoreFilter(moreFiltersSM));
    dispatch(setPriceRangeFilter({ minPrice: value[0], maxPrice: value[1] }));
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <>
      {/* <hr className={drawerStyles.divider} /> */}
      <Box className={drawerStyles.root}>
        <Typography variant="body1" style={{ fontWeight: 600, fontSize: "18px", lineHeight: "32px" }}>
          Filters
        </Typography>
        <img src="/images/close-fill.svg" alt="close icon" onClick={onClose} />
      </Box>
      <Box className={drawerStyles.root}>
        <Typography variant="body2">Sort by :</Typography>
        <Box className={drawerStyles.filterAccordion} style={{ maxWidth: "260px" }}>
          <Typography variant="body2">Price</Typography>
          <img src="/images/arrow-down-s-line.svg" alt="expand more icon" />
        </Box>
      </Box>
      <Box className={drawerStyles.root}>
        <Typography variant="body1">Price</Typography>
        <img src="/images/arrow-down-s-line.svg" alt="expand more icon" />
      </Box>
      <Box className={drawerStyles.priceFilterWrapper}>
        <Typography variant="body2"> Average price per night: C$819 </Typography>
        <Slider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={valuetext}
          max={1000}
          min={0}
        />
      </Box>
      <Box className={drawerStyles.root} style={{ border: "none", paddingTop: "0px" }}>
        <Box>
          <Typography variant="body2">Price per night</Typography>
          <TextField
            id="min-price"
            // type="number"
            // onChange={(e) => setMinPrice(Number(e.target.value))}
            //label="Minimum price per night"
            placeholder="500 $CA"
            className={drawerStyles.priceInput}
          />
        </Box>
        <Box>
          <Typography variant="body2">Total price</Typography>
          <TextField
            id="max-price"
            // type="number"
            // onChange={(e) => setMaxPrice(Number(e.target.value))}
            // label="Maximum price per night"
            placeholder="1000 $CA"
            className={drawerStyles.priceInput}
          />
        </Box>
      </Box>
      <Box className={drawerStyles.root}>
        <Typography variant="body1">Amenities</Typography>
        <img src="/images/arrow-down-s-line.svg" alt="expand more icon" />
      </Box>
      <Box className={clsx(drawerStyles.root, drawerStyles.amenitiesDrawer)}>
        <AmenitiesComp inTopBar={false} inMobileFilter={true} setAmenitiesSM={setAmenitiesSM} />
      </Box>
      <Box className={clsx(drawerStyles.root, classes.menuWrapper, drawerStyles.moreFiltersMobile)}>
        <MoreFiltersComp setMoreFiltersSM={setMoreFiltersSM} inMobileFilter={true} />
      </Box>
      <Box className={drawerStyles.root}>
        <Button className={drawerStyles.filterBtnCancel} onClick={handleCancel}>
          <Typography variant="button">Cancel</Typography>
        </Button>
        <Button className={drawerStyles.filterBtnApply} onClick={handleApply}>
          <Typography variant="button">Apply</Typography>
        </Button>
      </Box>
    </>
  );
};

export default ResultsFilterMobile;
