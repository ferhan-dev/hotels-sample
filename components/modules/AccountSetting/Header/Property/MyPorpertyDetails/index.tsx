import React, { useEffect } from "react";
import { useStyles } from "./styles";
import DiscoverProperties from "src/components/modules/home/DiscoverProperties/index";
import {
  Box,
  Container,
  Avatar,
  Typography,
  Grid,
  Tab,
  Tabs,
  AppBar,
} from "@material-ui/core";
import PropTypes from "prop-types";
import Photo from "src/components/modules/AccountSetting/EditProperties/Photo";
import Address from "src/components/modules/AccountSetting/EditProperties/Address";
import Description from "src/components/modules/AccountSetting/EditProperties/Description";
import Guest from "src/components/modules/AccountSetting/EditProperties/Guest";
import Amenities from "src/components/modules/AccountSetting/EditProperties/Amenities";
import Propertytype from "src/components/modules/AccountSetting/EditProperties/Propertytype";
import Expectationandsecurity from "src/components/modules/AccountSetting/EditProperties/Expectationandsecurity";
import Regulation from "src/components/modules/AccountSetting/EditProperties/Regulation";
import Policy from "src/components/modules/AccountSetting/EditProperties/Policy";
import RentalParameters from "src/components/modules/AccountSetting/EditProperties/RentalParameters";
import AmenitiesData from "./data";
import { getPropertiesById } from "src/services/api/listingForm";
import PropertyPricing from "./PropertyPricing";
import PropertyTaxes from "./propertyTaxes";
import PropertyGuest from "./PropertyGuest";
import PropertyCalender from "./PropertyCalender";
import BasicPricing from "src/components/modules/AccountSetting/EditProperties/BasicPricing";
import BasicFee from "src/components/modules/AccountSetting/EditProperties/BasicFee";
import TaxesAndRegistrarion from "src/components/modules/AccountSetting/EditProperties/TaxesAndRegistration";
import GuestNumber from "../../../EditProperties/GuestsNumber";
import GuestReception from "../../../EditProperties/GuestReception";
import CalendarImportDialog from "src/components/modules/AccountSetting/EditProperties/ImportDialouge";
import CalendarExportDialog from "src/components/modules/AccountSetting/EditProperties/ExportDialouge";
// import

const TabPanel = (props: any) => {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
};

const a11yProps = (index: any) => {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
};

export default function MyPropertyDetails({
  setPropertyName,
  allSingleProperty,
}: any) {
  const classes = useStyles();
  const [openAmenities, setOpenAmenities] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const [editvalue, setEditvalue]: any = React.useState("");
  const [PropertyData, setPropertyData]: any = React.useState("");
  console.log(PropertyData, "-----PropertyDataPropertyDataPropertyData---");
  function handleChange(event: any, newValue: any) {
    console.log(event);
    setValue(newValue);
  }
  useEffect(() => {
    getPropertiesById(allSingleProperty)
      .then((d) => {
        setPropertyData(d);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(editvalue, "editvalueeditvalue");
  return (
    <>
      {editvalue !== "address" ||
      editvalue !== "description" ||
      editvalue !== "expectationandsecurity" ||
      editvalue !== "description" ||
      editvalue !== "guest" ||
      editvalue !== "photo" ||
      editvalue !== "address" ||
      editvalue !== "propertytype" ||
      editvalue !== "regulation" ||
      editvalue !== "amenities" ||
      editvalue !== "Rental parameters" ||
      editvalue !== "Basic Pricing" ||
      editvalue !== "Basic Fee" ||
      editvalue !== "Taxes and registration" ||
      editvalue !== "What number can guest use for support?" ||
      editvalue !== "Guest's Reception" ||
      editvalue !== "Import" || 
      editvalue !== "Export"
      ? (
        <div
          className={
            editvalue == "photo" ||
            editvalue == "address" ||
            editvalue == "description" ||
            editvalue == "expectationandsecurity" ||
            editvalue == "description" ||
            editvalue == "guest" ||
            editvalue == "photo" ||
            editvalue == "propertytype" ||
            editvalue == "regulation" ||
            editvalue == "policy" ||
            editvalue == "amenities" ||
            editvalue == "Rental parameters" ||
            editvalue == "Basic Pricing" ||
            editvalue == "Basic Fee" ||
            editvalue == "Taxes and registration" ||
            editvalue == "What number can guest use for support?" ||
            editvalue == "Guest's Reception" ||
            editvalue == "Import" ||
            editvalue == "Export"

              ? `${classes.hide}`
              : ``
          }
        >
          <Box className={classes.personalInfo}>
            <Container
              className={classes.container}
              // className={
              //   editvalue == "photo" ? `jghhjg` : `${classes.container}`
              // }
            >
              {/* {editvalue == "guest" || "photo" || "address" ? ( */}
              <Box>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  style={{ paddingBottom: "25px" }}
                  onClick={() => setPropertyName(false)}
                >
                  <Box display="flex" alignItems="center">
                    <Avatar
                      src={"/images/leftArrow.png"}
                      className={classes.leftArrow}
                    />
                    <Typography variant="h6">Property Name</Typography>
                  </Box>
                </Box>
                <Box>
                  <div>
                    <AppBar
                      position="static"
                      color="default"
                      className={classes.tabAppbar}
                    >
                      <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                      >
                        <Tab label="Details" {...a11yProps(0)} />
                        <Tab label="Pricing" {...a11yProps(1)} />
                        <Tab label="Calendar" {...a11yProps(2)} />
                        <Tab label="Taxes and registration" {...a11yProps(3)} />
                        <Tab label="Guests" {...a11yProps(4)} />
                      </Tabs>
                    </AppBar>
                  </div>
                </Box>
              </Box>
              {/* ) : (
                ""
              )} */}
            </Container>
          </Box>
          {editvalue !== ("guest" || "photo" || "address") ? (
            <Container className={classes.container}>
              <TabPanel value={value} index={0}>
                <Box className={classes.photos}>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography variant="h6" className={classes.photosTitle}>
                      Photos
                    </Typography>
                    <Box
                      display="flex"
                      alignItems="center"
                      onClick={() => {
                        setEditvalue("photo");
                        // console.log("hey");
                      }}
                    >
                      <Avatar
                        src={"/images/edit.png"}
                        className={classes.editIcon}
                      />
                      <Typography className={classes.editTitle}>
                        Edit
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <DiscoverProperties />
                  </Box>
                </Box>
                <Box className={classes.photos}>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography variant="h6" className={classes.photosTitle}>
                      Address
                    </Typography>
                    <Box
                      display="flex"
                      alignItems="center"
                      onClick={() => {
                        setEditvalue("address");
                      }}
                    >
                      <Avatar
                        src={"/images/edit.png"}
                        className={classes.editIcon}
                      />
                      <Typography className={classes.editTitle}>
                        Edit
                      </Typography>
                    </Box>
                  </Box>
                  <Box className={classes.addressDetail}>
                    <Typography>{PropertyData.full_address}</Typography>
                    <Box
                      display="flex"
                      alignItems="center"
                      className={classes.addressTip}
                    >
                      <Avatar
                        src={"/images/infoIcon.png"}
                        className={classes.infoIcon}
                      />
                      <Typography
                        variant="h6"
                        className={classes.addressContents}
                      >
                        Only travelers with confirmed reservations will be able
                        to see this marker corresponding to your address.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box className={classes.photos}>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography variant="h6" className={classes.photosTitle}>
                      Description of the property
                    </Typography>
                    <Box
                      display="flex"
                      alignItems="center"
                      onClick={() => {
                        setEditvalue("description");
                      }}
                    >
                      <Avatar
                        src={"/images/edit.png"}
                        className={classes.editIcon}
                      />
                      <Typography className={classes.editTitle}>
                        Edit
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Grid className={classes.propDesc}>
                      <Grid item xl={2} lg={2} sm={12}>
                        <Typography className={classes.addTitle}>
                          Ad title
                        </Typography>
                      </Grid>
                      <Grid item xl={6} lg={6} sm={12}>
                        <Typography
                          variant="h6"
                          className={classes.addressContents}
                        >
                          Superb 5-seater chalet
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid className={classes.propDesc}>
                      <Grid
                        item
                        xl={2}
                        lg={2}
                        sm={12}
                        // className={classes.propTitle}
                      >
                        <Typography className={classes.addTitle}>
                          AD Description{" "}
                        </Typography>
                      </Grid>
                      <Grid item xl={6} lg={6} sm={12}>
                        <Typography
                          variant="h6"
                          className={classes.addressContents}
                        >
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts. Separated they live in Bookmarksgrove
                          right at the coast of the Semantics, a large language
                          ocean.
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid className={classes.propDesc}>
                      <Grid item xl={2} lg={2} sm={12}>
                        <Typography className={classes.addTitle}>
                          Your accomodation
                        </Typography>
                      </Grid>
                      <Grid item xl={6} lg={6} sm={12}>
                        <Typography
                          variant="h6"
                          className={classes.addressContents}
                        >
                          A small river named Duden flows by their place and
                          supplies it with the necessary regelialia.
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid className={classes.propDesc}>
                      <Grid item xl={2} lg={2} sm={12}>
                        <Typography className={classes.addTitle}>
                          Your availabilities
                        </Typography>
                      </Grid>
                      <Grid item xl={6} lg={6} sm={12}>
                        <Typography
                          variant="h6"
                          className={classes.addressContents}
                        >
                          It is a paradisematic country, in which roasted parts
                          of sentences fly into your mouth.
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid>
                      <Grid item xl={2} className={classes.seeAll}>
                        <Typography className={classes.editTitle}>
                          See All
                        </Typography>
                        <Avatar
                          src={"/images/arrowBottom.png"}
                          className={classes.arrowDownIcon}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
                <Box className={classes.photos}>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography variant="h6" className={classes.photosTitle}>
                      Guests area
                    </Typography>
                    <Box
                      display="flex"
                      alignItems="center"
                      onClick={() => {
                        setEditvalue("guest");
                      }}
                    >
                      <Avatar
                        src={"/images/edit.png"}
                        className={classes.editIcon}
                      />
                      <Typography className={classes.editTitle}>
                        Edit
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Grid className={classes.guestDesc}>
                      <Grid item xl={3} md={5} xs={12}>
                        <Box className={classes.guestArea}>
                          <Typography>Common area</Typography>
                          <Typography className={classes.guestTitle}>
                            7 beds
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xl={3} md={5} xs={12}>
                        <Box className={classes.guestArea}>
                          <Typography>Small room</Typography>
                          <Typography className={classes.guestTitle}>
                            2 beds
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xl={3} md={5} xs={12}>
                        <Box className={classes.guestArea}>
                          <Typography>Parents bedroom</Typography>
                          <Typography className={classes.guestTitle}>
                            1 beds
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xl={3} md={5} xs={12}>
                        <Box
                          className={classes.guestArea}
                          style={{ marginRight: "0 " }}
                        >
                          <Typography>Salon</Typography>
                          <Typography className={classes.guestTitle}>
                            1 beds
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
                <Box className={classes.photos}>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography variant="h6" className={classes.photosTitle}>
                      Amenities
                    </Typography>
                    <Box
                      display="flex"
                      alignItems="center"
                      onClick={() => {
                        setEditvalue("amenities");
                      }}
                    >
                      <Avatar
                        src={"/images/edit.png"}
                        className={classes.editIcon}
                      />
                      <Typography className={classes.editTitle}>
                        Edit
                      </Typography>
                    </Box>
                  </Box>

                  <Box>
                    <Typography style={{ marginTop: "10px" }}>
                      Outdoor features
                    </Typography>

                    <Grid className={classes.outdoorFeature}>
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        md={6}
                        lg={4}
                        className={classes.outdoor}
                      >
                        <Avatar
                          src={"/images/garbage.png"}
                          className={classes.outdoorIcon}
                        />
                        <Typography className={classes.outdoorTitle}>
                          {PropertyData.amenities}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                  {openAmenities ? (
                    <div>
                      {AmenitiesData &&
                        AmenitiesData.map((props, i) => (
                          <Box>
                            <Typography style={{ marginTop: "10px" }}>
                              <h1>{i}</h1>
                              {props.title}
                            </Typography>

                            <Grid className={classes.outdoorFeature}>
                              {AmenitiesData[i].data &&
                                AmenitiesData[i].data.map(
                                  <Grid
                                    item
                                    xs={12}
                                    sm={6}
                                    md={6}
                                    lg={4}
                                    className={classes.outdoor}
                                  >
                                    <Avatar
                                      src={`/images/${props.image}`}
                                      className={classes.outdoorIcon}
                                    />
                                    <Typography
                                      className={classes.outdoorTitle}
                                    >
                                      {props.head}
                                    </Typography>
                                  </Grid>
                                )}
                            </Grid>
                          </Box>
                        ))}
                    </div>
                  ) : (
                    ""
                  )}

                  <Grid>
                    <Grid
                      item
                      className={classes.seeAll}
                      onClick={() => {
                        setOpenAmenities(!openAmenities);
                      }}
                    >
                      <Typography className={classes.editTitle}>
                        {openAmenities ? "See less" : "See more"}
                      </Typography>
                      <Avatar
                        src={"/images/arrowBottom.png"}
                        className={
                          openAmenities
                            ? classes.arrowDownIcon
                            : classes.arrowUpIcon
                        }
                      />
                    </Grid>
                  </Grid>
                </Box>
                <Box className={classes.photos}>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography variant="h6" className={classes.photosTitle}>
                      Property Type
                    </Typography>
                    <Box
                      display="flex"
                      alignItems="center"
                      onClick={() => {
                        setEditvalue("propertytype");
                      }}
                    >
                      <Avatar
                        src={"/images/edit.png"}
                        className={classes.editIcon}
                      />
                      <Typography className={classes.editTitle}>
                        Edit
                      </Typography>
                    </Box>
                  </Box>
                  <Box className={classes.propertyType}>
                    <Typography className={classes.addressContents}>
                      {PropertyData.property_type1}
                    </Typography>
                    <Typography className={classes.addressContents}>
                      {PropertyData.property_type2}
                    </Typography>
                  </Box>
                </Box>
                <Box className={classes.photos}>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography variant="h6" className={classes.photosTitle}>
                      {PropertyData.property_type2}
                    </Typography>
                    <Box
                      display="flex"
                      alignItems="center"
                      onClick={() => {
                        setEditvalue("expectationandsecurity");
                      }}
                    >
                      <Avatar
                        src={"/images/edit.png"}
                        className={classes.editIcon}
                      />
                      <Typography className={classes.editTitle}>
                        Edit
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Typography style={{ margin: "30px 0px 10px 0px" }}>
                      Customer expectation
                    </Typography>
                    <Grid className={classes.expectation}>
                      {PropertyData.customer_expectations?.map((data: any) => (
                        <Grid item xs={12} sm={12} lg={6}>
                          <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                            className={classes.customList}
                          >
                            <Typography className={classes.addressContents}>
                              {data}
                            </Typography>
                            <Avatar
                              src={"/images/YesFill.png"}
                              className={classes.yesIcon}
                            />
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                  <Box>
                    <Typography style={{ margin: "30px 0px 10px 0px" }}>
                      Security
                    </Typography>
                    <Grid className={classes.expectation}>
                      {PropertyData.securities?.map((data: any) => (
                        <Grid item xs={12} sm={12} lg={6}>
                          <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                            className={classes.customList}
                          >
                            <Typography className={classes.addressContents}>
                              {data}
                            </Typography>
                            <Avatar
                              src={"/images/YesFill.png"}
                              className={classes.yesIcon}
                            />
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </Box>
                <Box className={classes.photos}>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography variant="h6" className={classes.photosTitle}>
                      Regulation
                    </Typography>
                    <Box
                      display="flex"
                      alignItems="center"
                      onClick={() => {
                        setEditvalue("regulation");
                      }}
                    >
                      <Avatar
                        src={"/images/edit.png"}
                        className={classes.editIcon}
                      />
                      <Typography className={classes.editTitle}>
                        Edit
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Typography style={{ margin: "30px 0px 10px 0px" }}>
                      Custom expectation
                    </Typography>
                    {PropertyData.regulations?.map((data: any) => (
                      <Grid className={classes.expectation}>
                        <Grid item xs={12} sm={12} lg={6}>
                          <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                            className={classes.customList}
                          >
                            <Typography className={classes.addressContents}>
                              {data}
                            </Typography>
                            <Avatar
                              src={"/images/YesFill.png"}
                              className={classes.yesIcon}
                            />
                          </Box>
                        </Grid>
                      </Grid>
                    ))}
                  </Box>
                </Box>
                <Box className={classes.policy}>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography variant="h6" className={classes.photosTitle}>
                      Cancellation policy
                    </Typography>
                    <Box
                      display="flex"
                      alignItems="center"
                      onClick={() => {
                        setEditvalue("policy");
                      }}
                    >
                      <Avatar
                        src={"/images/edit.png"}
                        className={classes.editIcon}
                      />
                      <Typography className={classes.editTitle}>
                        Edit
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Grid className={classes.propDesc}>
                      <Grid
                        item
                        xl={2}
                        lg={2}
                        xs={12}
                        // className={classes.propTitle}
                      >
                        <Typography className={classes.addTitle}>
                          POLICY TYPE
                        </Typography>
                      </Grid>
                      <Grid item xl={6} lg={6} xs={12}>
                        <Typography variant="h6" className={classes.flexible}>
                          {PropertyData.cancellation_policy_type}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid className={classes.propDesc}>
                      <Grid
                        item
                        xl={2}
                        lg={2}
                        xs={12}
                        // className={classes.propTitle}
                      >
                        <Typography className={classes.addTitle}>
                          POLICY DESCRIPTION
                        </Typography>
                      </Grid>
                      <Grid item xl={5} lg={5} xs={12}>
                        <Typography
                          variant="h6"
                          className={classes.addressContents}
                        >
                          You will receive a full refund as long as you cancel
                          at least 48 hours prior to check-in. You will receive
                          a full refund, less the first night, if you cancel
                          within 48 hours of check-in.
                        </Typography>
                        <Typography
                          variant="h6"
                          className={classes.policyDetail}
                        >
                          Any refund will be at the discretion of the host if
                          you cancel after check-in.
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <PropertyPricing setEditvalue={setEditvalue}/> 
              </TabPanel>
              <TabPanel value={value} index={2}>
                <PropertyCalender setEditvalue={setEditvalue}/>
              </TabPanel>
              <TabPanel value={value} index={3}>
              <PropertyTaxes setEditvalue={setEditvalue}/>
              </TabPanel>
              <TabPanel value={value} index={4}>
                < PropertyGuest setEditvalue={setEditvalue}/>
              </TabPanel>
            </Container>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
      {editvalue == "photo" ? <Photo setEditvalue={setEditvalue} /> : ""}
      {editvalue == "address" ? <Address setEditvalue={setEditvalue} /> : ""}
      {editvalue == "description" ? (
        <Description setEditvalue={setEditvalue} />
      ) : (
        ""
      )}
      {editvalue == "guest" ? <Guest setEditvalue={setEditvalue} /> : ""}
      {editvalue == "amenities" ? (
        <Amenities setEditvalue={setEditvalue} />
      ) : (
        ""
      )}
      {editvalue == "propertytype" ? (
        <Propertytype setEditvalue={setEditvalue} />
      ) : (
        ""
      )}
      {editvalue == "expectationandsecurity" ? (
        <Expectationandsecurity setEditvalue={setEditvalue} />
      ) : (
        ""
      )}
      {editvalue == "regulation" ? (
        <Regulation setEditvalue={setEditvalue} />
      ) : (
        ""
      )}
      {editvalue == "policy" ? <Policy setEditvalue={setEditvalue} /> : ""}
      {editvalue == "Rental parameters" ? <RentalParameters setEditvalue={setEditvalue} /> : ""}
      {editvalue == "Basic Pricing" ? <BasicPricing setEditvalue={setEditvalue} /> : ""}
      {editvalue == "Basic Fee" ? <BasicFee setEditvalue={setEditvalue} /> : ""}
      {editvalue == "Taxes and registration" ? <TaxesAndRegistrarion setEditvalue={setEditvalue} /> : ""}
      {editvalue == "What number can guest use for support?" ? <GuestNumber setEditvalue={setEditvalue} /> : ""}
      {editvalue == "Guest's Reception" ? <GuestReception setEditvalue={setEditvalue} /> : ""}
      {editvalue == "Import" ? <CalendarImportDialog open={editvalue == "Import"}
        onClose={() => setEditvalue("")}
        onImport={() => setEditvalue("")} /> : ""}
      {editvalue == "Export" ? <CalendarExportDialog open={editvalue == "Export"}
        onClose={() => setEditvalue("")} /> : ""}

      
    </>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
