import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import { useStyles } from "./styles";
// import { useAppSelector } from "src/store/hooks";
import { useDispatch } from "react-redux";
import { Box } from "@material-ui/core";
import ResultItemSlider from "./ResultItemSlider";
import { useSmallSize } from "src/hooks";
import { setSelectedProperty } from "src/store/actions/propertyActions";
// import { getSelectedProperty } from "src/store/property-search/reducers/selectors";

interface Props {
  [key: string]: any;
  propertyItem: any;
  inInfoWindow: boolean;
}

const ResultsListItem: React.FC<Props> = (props: Props) => {
  const { propertyItem, inInfoWindow } = props;
  let isSmallSize = inInfoWindow ? true : useSmallSize();
  const classes = useStyles({ isSmallSize });
  const dispatch = useDispatch();
  // const selectedProperty = useAppSelector(getSelectedProperty);
  // console.log(selectedProperty);

  // selectedProperty?.id === propertyItem?.id ? console.log(true) : console.log(false);

  // const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  // const addSelectedStyleProps = {
  //   border: "3px solid #1DAF92",
  //   borderRadius: "8px",
  // };

  return (
    <Grid
      item
      container
      direction="row"
      className={classes.itemContainer}
      onClick={() => dispatch(setSelectedProperty(propertyItem))}
      // style={propertyItem?.id === selectedProperty?.id ? addSelectedStyleProps : { border: "3px solid transparent", borderRadius: "8px" }}
    >
      <Grid item xs={7} className={classes.imageContainer}>
        <ResultItemSlider />
      </Grid>
      <Grid item xs={5} className={classes.resultItemDataWrapper}>
        <Box>
          <Typography variant="body1">{propertyItem.property_type1}</Typography>
          <Typography variant="caption" style={{ fontWeight: 400 }}>
            {propertyItem.full_address}{" "}
          </Typography>
        </Box>
        {!isSmallSize && (
          <Box className={classes.propertySpecsWrapper}>
            <Box>
              <img src="/images/search-results/team-line 1.svg" alt="guests icon" />
              <Typography variant="caption" style={{ color: "#5A6987" }}>
                Guests :
              </Typography>
              <Typography variant="caption" style={{ color: "#5A6987" }}>
                {propertyItem.maximum_guests}
              </Typography>
            </Box>

            <Box>
              <img src="/images/search-results/hotel-bed-line 1.svg" alt="guests icon" />
              <Typography variant="caption" style={{ color: "#5A6987" }}>
                Bedroom :
              </Typography>
              <Typography variant="caption" style={{ color: "#5A6987" }}>
                {propertyItem.number_of_rooms}
              </Typography>
            </Box>

            <Box>
              <img src="/images/search-results/drop-line 1.svg" alt="guests icon" />
              <Typography variant="caption" style={{ color: "#5A6987" }}>
                Bathrooms :
              </Typography>
              <Typography variant="caption" style={{ color: "#5A6987" }}>
                {propertyItem.number_of_rooms_bath}
              </Typography>
            </Box>

            <Box>
              <img src="/images/search-results/wifi-line.svg" alt="guests icon" />
              <Typography variant="caption" style={{ color: "#5A6987" }}>
                Wifi :
              </Typography>
              <Typography variant="caption" style={{ color: "#5A6987" }}>
                Fast Speed
              </Typography>
            </Box>
          </Box>
        )}

        <Box className={classes.priceAndReviewWrapper} style={{ marginBottom: inInfoWindow ? "0px" : undefined }}>
          <Box>
            <StarRoundedIcon style={{ color: "#00AE8D" }} />
            <Typography variant="caption" style={{ color: "#1A2232" }}>
              4.5
            </Typography>
            <Typography variant="caption" style={{ color: "#5A6987" }}>
              (24 reviews)
            </Typography>
          </Box>
          <Box className={classes.priceWrapper}>
            <Typography variant="caption">
              {`${propertyItem.currency}${propertyItem.base_rate}`}
              <Typography variant="caption" style={{ color: "#5A6987" }}>
                /night
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ResultsListItem;
