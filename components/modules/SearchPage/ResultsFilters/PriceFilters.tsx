import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import { useStyles } from "../styles";
import ArrowDownIcon from "src/components/elements/icons/ArrowDown";
import { Typography, TextField, Box } from "@material-ui/core";
import AppButton from "src/components/elements/Button";
import { useSelector, useDispatch } from "react-redux";
import { useSmallerSize } from "src/hooks/screenSize";
import { getPriceRangeFilter } from "src/store/selectors/propertySelectors";
import { setPriceRangeFilter } from "src/store/actions/propertyActions";

type Props = {};

const PriceFilter: React.FC<Props> = () => {
  const isSmallSize = useSmallerSize();
  const classes = useStyles({ isSmallSize });
  const dispatch = useDispatch();
  const priceFilter = useSelector(getPriceRangeFilter);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [minPrice, setMinPrice] = React.useState<number>(priceFilter?.minPrice);
  const [maxPrice, setMaxPrice] = React.useState<number>(priceFilter?.maxPrice);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCancel = () => {
    setMinPrice(priceFilter.minPrice);
    setMaxPrice(priceFilter.maxPrice);

    handleClose();
  };

  const handleApply = () => {
    dispatch(setPriceRangeFilter({ minPrice: minPrice, maxPrice: maxPrice }));
    handleClose();
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, type: boolean) => {
    if (type) {
      !isNaN(Number(e.target.value)) && setMaxPrice(Number(e.target.value));
    }
    if (!type) {
      !isNaN(Number(e.target.value)) && setMinPrice(Number(e.target.value));
    }
  };

  return (
    <>
      <Button aria-describedby="price-menu" variant="outlined" onClick={handleClick} className={classes.pillDrop}>
        <Typography className={classes.pillText}>Price</Typography>
        <ArrowDownIcon />
      </Button>
      <Menu
        id="price-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        className={classes.priceMenuContainer}
      >
        <form className={classes.priceMenuForm} noValidate autoComplete="off">
          <Typography variant="body1">Minimum price per night</Typography>
          <TextField
            id="min-price"
            type="text"
            // onChange={(e) => setMinPrice(Number(e.target.value))}
            onChange={(e) => handlePriceChange(e, false)}
            value={minPrice > 0 ? minPrice : ""}
            //label="Minimum price per night"
            placeholder="500 $CA"
          />
          <Typography variant="body1">Maximum price per night</Typography>
          <TextField
            id="max-price"
            type="text"
            onChange={(e) => handlePriceChange(e, true)}
            value={maxPrice > 0 ? maxPrice : ""}
            // label="Maximum price per night"
            placeholder="1000 $CA"
          />

          <Box className={classes.priceBtnWrapper}>
            <AppButton variant="contained" onClick={handleCancel}>
              <Typography variant="body1">Clear</Typography>
            </AppButton>
            <AppButton variant="contained" color="primary" onClick={handleApply}>
              <Typography variant="body1">Apply</Typography>
            </AppButton>
          </Box>
        </form>
      </Menu>
    </>
  );
};

export default PriceFilter;
