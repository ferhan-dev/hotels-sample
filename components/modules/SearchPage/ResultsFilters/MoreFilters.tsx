import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import { useStyles } from "../styles";
import ArrowDownIcon from "src/components/elements/icons/ArrowDown";
import { Typography, Box } from "@material-ui/core";
import AppButton from "src/components/elements/Button";
import { useSelector, useDispatch } from "react-redux";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useSmallSize } from "src/hooks";
import { IMoreFilters } from "src/types/search";
import { getMoreFilters } from "src/store/selectors/propertySelectors";
import { setMoreFilter } from "src/store/actions/propertyActions";

type Props = {};

type CompProps = {
  handleClose?: () => void;
  setMoreFiltersSM?: React.Dispatch<any>;
  inMobileFilter?: boolean;
};

const MoreFilters: React.FC<Props> = () => {
  const isSmallSize = useSmallSize();
  const classes = useStyles({ isSmallSize });
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button aria-describedby="more-menu" variant="outlined" className={classes.pillDrop} onClick={handleClick}>
        <Typography className={classes.pillText}>More Filters</Typography>
        <ArrowDownIcon />
      </Button>
      <Menu
        id="more-menu"
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
        className={classes.menuWrapper}
      >
        <MoreFiltersComp handleClose={handleClose} />
      </Menu>
    </>
  );
};

export default MoreFilters;

export const MoreFiltersComp: React.FC<CompProps> = ({ handleClose, setMoreFiltersSM, inMobileFilter }) => {
  const isSmallSize = useSmallSize();
  const classes = useStyles({ isSmallSize });
  const dispatch = useDispatch();
  const filters = useSelector(getMoreFilters);
  const [moreFilters, setMoreFilters] = React.useState<IMoreFilters>(filters);

  const handleFilterSelection = (filterType: string, increase: boolean): void => {
    const newFilters: IMoreFilters = { ...moreFilters };
    newFilters[filterType as keyof IMoreFilters] = increase
      ? moreFilters[filterType as keyof IMoreFilters] + 1
      : moreFilters[filterType as keyof IMoreFilters] > 0
      ? moreFilters[filterType as keyof IMoreFilters] - 1
      : 0;
    setMoreFilters(newFilters);

    setMoreFiltersSM && setMoreFiltersSM(newFilters);
  };

  const handleApply = () => {
    dispatch(setMoreFilter(moreFilters));
    handleClose && handleClose();
    // setAnchorEl(null);
  };
  const handleCancel = () => {
    const newFilters: IMoreFilters = {
      capacity: 0,
      beds: 0,
      rooms: 0,
      toilets: 0,
    };
    setMoreFilters(newFilters);
    dispatch(setMoreFilter(newFilters));
    handleClose && handleClose();
  };

  return (
    <>
      <li>
        <Accordion className={classes.internetTypeWrapper}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography variant="body2">Internet Type</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">Type 1</Typography>
            <Typography variant="body2">Type 2</Typography>
          </AccordionDetails>
        </Accordion>
      </li>
      <li>
        <Box>
          <Typography variant="body1">Cottage Capacity</Typography>
          <Typography variant="body2">Max. number of guests</Typography>
        </Box>
        <Box className={classes.buttonGroupContainer}>
          <img
            src="/images/remove-icon.svg"
            alt="remove icon"
            onClick={() => {
              handleFilterSelection("capacity", false);
            }}
          />
          <Typography variant="button">{moreFilters.capacity}</Typography>
          <img
            src="/images/add-icon.svg"
            alt="add icon"
            onClick={() => {
              handleFilterSelection("capacity", true);
            }}
          />
        </Box>
      </li>
      <li>
        <Box className={classes.filterIconWrapper}>
          <img src="/images/search-results/hotel-bed-line 1.svg" alt="bed icon" />
          <Typography variant="button">Number of beds</Typography>
        </Box>
        <Box className={classes.buttonGroupContainer}>
          <img
            src="/images/remove-icon.svg"
            alt="remove icon"
            onClick={() => {
              handleFilterSelection("beds", false);
            }}
          />
          <Typography variant="button">{moreFilters.beds}</Typography>
          <img
            src="/images/add-icon.svg"
            alt="add icon"
            onClick={() => {
              handleFilterSelection("beds", true);
            }}
          />
        </Box>
      </li>
      <li>
        <Box className={classes.filterIconWrapper}>
          <img src="/images/search-results/door-line.svg" alt="door icon" />
          <Typography variant="button">Number of bedrooms</Typography>
        </Box>
        <Box className={classes.buttonGroupContainer}>
          <img
            src="/images/remove-icon.svg"
            alt="remove icon"
            onClick={() => {
              handleFilterSelection("rooms", false);
            }}
          />
          <Typography variant="button">{moreFilters.rooms}</Typography>
          <img
            src="/images/add-icon.svg"
            alt="add icon"
            onClick={() => {
              handleFilterSelection("rooms", true);
            }}
          />
        </Box>
      </li>
      <li>
        <Box className={classes.filterIconWrapper}>
          <img src="/images/search-results/drop-line 1.svg" alt="drop icon" />
          <Typography variant="button">Number of bathrooms</Typography>
        </Box>
        <Box className={classes.buttonGroupContainer}>
          <img
            src="/images/remove-icon.svg"
            alt="remove icon"
            onClick={() => {
              handleFilterSelection("toilets", false);
            }}
          />
          <Typography variant="button">{moreFilters.toilets}</Typography>
          <img
            src="/images/add-icon.svg"
            alt="add icon"
            onClick={() => {
              handleFilterSelection("toilets", true);
            }}
          />
        </Box>
      </li>
      {!inMobileFilter && (
        <li style={{ borderTop: "1px solid #5A6987", paddingTop: "10px" }}>
          <Box className={classes.priceBtnWrapper}>
            <AppButton variant="contained" onClick={handleCancel}>
              <Typography variant="body1">Clear</Typography>
            </AppButton>
            <AppButton variant="contained" color="primary" onClick={handleApply}>
              <Typography variant="body1" style={{ color: "white" }}>
                Apply
              </Typography>
            </AppButton>
          </Box>
        </li>
      )}
    </>
  );
};
