import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useStyles } from "../styles";
import ArrowDownIcon from "src/components/elements/icons/ArrowDown";
import { Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useSmallSize } from "src/hooks";
import { setSortByFilter } from "src/store/actions/propertyActions";

type Props = {};
const SortByFilters: React.FC<Props> = () => {
  const isSmallSize = useSmallSize();
  const classes = useStyles({ isSmallSize });
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [asc, setAsc] = React.useState(true);
  const [desc, setDesc] = React.useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button aria-describedby="sort-by-menu" variant="outlined" className={classes.pillDrop} onClick={handleClick}>
        {/* <Typography className={classes.pillText}>Price : {asc ? "Ascending" : "Descending"}</Typography> */}
        <Typography className={classes.pillText}>Price :{asc ? "Low to High" : "High to Low"} </Typography>
        <ArrowDownIcon />
      </Button>
      <Menu
        id="sort-by-menu"
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
        {!asc && (
          <MenuItem
            onClick={() => {
              setAnchorEl(null);
              setAsc(true);
              setDesc(false);
              dispatch(setSortByFilter("asc"));
            }}
          >
            Low to High
          </MenuItem>
        )}
        {!desc && (
          <MenuItem
            onClick={() => {
              setAnchorEl(null);
              setAsc(false);
              setDesc(true);
              dispatch(setSortByFilter("desc"));
            }}
          >
            High to Low
          </MenuItem>
        )}
      </Menu>
    </>
  );
};

export default SortByFilters;
