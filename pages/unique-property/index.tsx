import { Box, Button, Container, Typography } from "@material-ui/core";
import React from "react";
import HeadContent from "src/hoc/headContent";
import Footer from "src/components/modules/Footer";
// import { DateRange } from "@mui/lab/DateRangePicker";
// import { useDispatch } from "react-redux";
// import { setSelectedDate } from "src/store/actions/propertyActions";
import Header from "src/components/modules/Header";
import SearchDate from "../../components/modules/unique-property/TreeHouse/UniquePropertDate"
import GuestMenu from "../../components/modules/unique-property/TreeHouse/UniquePropertyGuest"
import { useStyles } from "../../components/modules/unique-property/styles";
import TreeHouseImageSection from "../../components/modules/unique-property/TreeHouse/ImageSection";
import TreeHouseTextSection from "../../components/modules/unique-property/TreeHouse/TextSection";
import TreeHouseHeadingSection from "../../components/modules/unique-property/TreeHouse/TreeHouseHeadingSection";
import { useSmallSize } from "src/hooks/screenSize";
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import Description from "src/components/modules/unique-property/TreeHouse/Description";
import { useState, useEffect } from "react";
import Amenities from "src/components/modules/unique-property/TreeHouse/Amenities";
import ThingsToNote from "src/components/modules/unique-property/TreeHouse/ThingsToNote";
import CancellationPolicy from "src/components/modules/unique-property/TreeHouse/CancellationPolicy";
import Rules from "src/components/modules/unique-property/TreeHouse/Rules";
import Rooms from "src/components/modules/unique-property/TreeHouse/Rooms";
import MobileSlider from "src/components/modules/unique-property/TreeHouse/MobileSlider";
import AppButton from "src/components/elements/Button";
import ReviewSlider from "src/components/modules/unique-property/TreeHouse/ReviewSlider";
import RecommendationImageSlider from "src/components/modules/unique-property/TreeHouse/RecommendationImageSlider";
import Review from "src/components/modules/unique-property/TreeHouse/Reviews";
import Map from "src/components/modules/unique-property/TreeHouse/Map";
// import DateRangePicker from "@mui/lab/DateRangePicker";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import LocalizationProvider from "@mui/lab/LocalizationProvider";
// import useOnclickOutside from "react-cool-onclickoutside";

const images = [
  {
    id: 1,
    desc: "dsfs",
    url: "/images/regions/quebec.png",
  },
  {
    id: 2,
    desc: "dsfs",
    url: "/images/regions/mauricie.png",
  },
  {
    id: 3,
    desc: "dsfs",
    url: "/images/Rectangle 973.png",
  },
  {
    id: 4,
    desc: "dsfs",
    url: "/images/regions/charlevoix.png",
  },
  {
    id: 5,
    desc: "dsfs",
    url: "/images/Rectangle 972.png",
  }
]

const UniqueProperty = () => {
  const classes = useStyles();
  const isSmallSize = useSmallSize();
  const [description, setDescription] = useState(false);
  const [amenities, setAmenties] = useState(false);
  const [thingsToNote, setThingsToNote] = useState(false);
  const [cancellation, setCancellation] = useState(false);
  const [rules, setRules] = useState(false);
  const [room, setRoom] = useState(false);
  const [review, setReview] = useState(false);
  const [map, setMap] = useState(false);
  const inTopBar = false;



  useEffect(() => {

    // @ts-ignore
    var map = new google.maps.Map(document.getElementById('googleMap'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
  }, [])
  const meta = {
    title: `Unique Property`,
    description: `Charlet Retreat. Book one of the world's best chalets. Discover and book chalets everywhere around you. Check-In Check-Out.`,
    keywords: ``,
    route: '/unique-property',
  };

  return (
    <div className={classes.rootColor}>
      {description && <Description description={description}  setDescription={setDescription}/>}
      {amenities && <Amenities description={amenities}  setDescription={setAmenties}/>}
      {thingsToNote && <ThingsToNote description={thingsToNote}  setDescription={setThingsToNote}/>}
      {cancellation && <CancellationPolicy description={cancellation}  setDescription={setCancellation}/>}
      {rules && <Rules description={rules}  setDescription={setRules}/>}
      {room && <Rooms description={room}  setDescription={setRoom}/>}
      {review && <Review description={review}  setDescription={setReview}/>}
      {map && <Map description={map}  setDescription={setMap}/>}
      <HeadContent title={meta.title} description={meta.description} keywords={meta.keywords} route={meta.route} />
      <Header />
      <Box className={`${classes.DisplayNone} ${classes.MobileSlider}`}>
      <MobileSlider />
      </Box>
      <Container className={classes.root} maxWidth="lg">
        <TreeHouseHeadingSection />
        <Box className={`${classes.flexWrapper} ${classes.MobileDisplayNone}`}>
          <TreeHouseImageSection />
          <TreeHouseTextSection />
        </Box>
        <Box className={classes.flexWrapper}>
          <Box>
            <Typography variant={isSmallSize ? "h3" : "h6"}>
              Description
            </Typography>
            <Typography color="textSecondary" variant="body2" className={classes.discription}>
              Perfect fit for active people who like to be close to everything. From your apartment, you will have quick access to downtown and the lively neighbourhoods of Griffintown and Saint-Henri.
            </Typography>
            <p onClick={() => setDescription(true) } style={{cursor: "pointer", fontWeight: 530}}>Learn more {'>'} </p>
            <hr className={classes.hrLine} />
            <Box className={classes.facilities}>
              <Box>
                <p><img src="/images/guest.png" style={{marginRight: "20px"}}/> Guest: 8 </p>
                <p><img src="/images/drop.png" style={{marginRight: "20px"}}/> Bathrooms: 3 </p>
              </Box>
              <Box style={{ flexBasis: "43%" }}>
                <p><img src="/images/bedroom.png" style={{marginRight: "20px"}}/> Bedroom: 3 </p>

                <p><img src="/images/Wifi.png" style={{marginRight: "20px"}}/> Wifi: Fast Speed </p>
              </Box>
            </Box>
            <hr className={classes.hrLine} />
            <Box className={classes.facilities}>
              <Box className={classes.dFlex + " " + classes.imgMarginBottom}>
                <img src="/images/Image.png" height="50" width="50" />
                <Typography
                  color="textSecondary"
                  variant="body2"
                  className={classes.cardMainHeading}
                >
                  Hosted by
                  <p className={classes.cardSubHeading}>Luc Bernier</p>
                </Typography>
              </Box>
                <AppButton className={classes.msgBtn}><img src="/images/messages.png" style={{marginRight: "20px"}}/><span>Message</span> </AppButton>
            </Box>
            <hr className={classes.hrLine} />
            <Box>
              <Typography variant={isSmallSize ? "h3" : "h6"}>
                Amenities
              </Typography>
              <Box>
                <Box className={classes.amenitiesWrapSec}>
                  <p className={classes.dFlex}><img className={classes.checkImg} src="/images/garbage.png" /> Access to a garage </p>
                  <p className={classes.amenitiesWrap}><img className={classes.checkImg} src="/images/water.png" /> Access to water </p>
                </Box>
                <Box className={classes.amenitiesWrapSec}>
                  <p className={classes.dFlex} >
                    <img className={classes.checkImg} src="/images/beachchairs.png" /> Beach chairs
                  </p>
                  <p className={classes.amenitiesWrap}>
                    <img className={classes.checkImg} src="/images/beachfront.png" /> Beachfront
                  </p>
                </Box>
                <Box className={classes.amenitiesWrapSec}>
                  <p className={classes.dFlex} >
                    <img className={classes.checkImg} src="/images/dock.png" /> Doc
                  </p>
                  <p className={classes.amenitiesWrap}>
                    <img className={classes.checkImg} src="/images/pit.png" style={{marginRight: "30px"}}/> Fire pit
                  </p>
                </Box>
                <AppButton className={classes.reviewsBtn} onClick={() => setAmenties(true)}>See all amenities
                  <svg className={classes.spaceArro} width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.7125 4.77349L0 1.06099L1.0605 0.000488281L5.8335 4.77349L1.0605 9.54649L0 8.48599L3.7125 4.77349Z" fill="#364259" />
                  </svg>
                </AppButton>
              </Box>
            </Box>
            <hr className={classes.hrLine} />
            <Box>
              <Typography variant={isSmallSize ? "h3" : "h6"}>
                Rooms
              </Typography>
              <Box className={classes.roomSec}>
                <Box className={classes.roomCard}>
                  <p>Bedroom</p>
                  <p><img src="/images/bedroom.png" /> 2 Bed</p>
                </Box>
                <Box className={classes.roomCard}>
                  <p>Bedroom</p>
                  <p><img src="/images/bedroom.png" /> 2 Bed</p>
                </Box>
              </Box>
              <button className={classes.reviewsBtn} onClick={() => setRoom(true)}>See all rooms
                <svg className={classes.spaceArro} width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.7125 4.77349L0 1.06099L1.0605 0.000488281L5.8335 4.77349L1.0605 9.54649L0 8.48599L3.7125 4.77349Z" fill="#364259" />
                </svg>
              </button>
            </Box>
            <hr className={classes.hrLine} />
            <Box style={{width: "100%", height: "450px"}}>
              <Typography variant={isSmallSize ? "h3" : "h6"}>
                Availabilites
              </Typography>
              <Typography color="textSecondary" variant="body2">
                Add your travel dates to see the exact price.
              </Typography>
              <Box className={classes.calenderSpace}>
                <img src="/images/DoubleDatePicker.png" />
                {/* <Box>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box style={{width: "10%", height: "1030px", position: "absolute", marginLeft: "-40px"}}>
        <DateRangePicker
          startText="Start"
          endText="End"
          value={value}
          disablePast={true}
          onChange={handleChange}
          open={open}
          calendars={isSmallSize ? 1 : 2}
          className={classes.FixedPosition}
          renderInput={() => <React.Fragment></React.Fragment>}
        />
      </Box> 
    </LocalizationProvider>
                </Box>*/}
              </Box>
            </Box>
          </Box>

          <Box className={classes.cardItem}>
            <Box className={classes.dFlex}>
              <Typography variant={isSmallSize ? "h3" : "h2"}>
                C$8000
              </Typography><span className={classes.nightText}>/night</span>
            </Box>
            <Box className={classes.dFlex + " " + classes.reviewMargin}>
              <Typography color="textSecondary" variant="body2">
                <StarIcon style={{ color: 'green' }} />
                <StarIcon style={{ color: 'green' }} />
                <StarIcon style={{ color: 'green' }} />
                <StarIcon style={{ color: 'green' }} />
                <StarHalfIcon style={{ color: 'green' }} />
              </Typography>
              <span>4,5</span><span> (24 Review)</span>
            </Box>
            <hr className={classes.hrLine} />
            <Box>
              <SearchDate inTopBar={inTopBar} isSmallSize={isSmallSize}/>
              <Box style={{marginTop: "10px"}}>
              <GuestMenu inTopBar={inTopBar} isSmallSize={isSmallSize}/>
            </Box>
            </Box>
            <Box>
              <Button className={classes.bookingBtn}>Booking request</Button>

            </Box>
            <Box className={classes.bottomText}>
              <span>You will only be charged if you confirm</span>
            </Box>


          </Box>
        </Box>
        <hr className={classes.hrLine} />
        <Box className={classes.flexWrapper}>
          <Box>
            <Typography variant={isSmallSize ? "h3" : "h6"}>
              Reviews
            </Typography>
            <Box className={classes.dFlex}>
              <span><StarIcon style={{ color: 'green' }} />  </span>
              <Typography
                color="textSecondary"            >
                <b style={{ padding: '0 8px' }}>4,5</b>(24 Review)
              </Typography>
            </Box>
            <ReviewSlider />
            <button className={classes.reviewsBtn} onClick={() => setReview(true)}>Show all 24 reviews {'>'} </button>
            <hr className={classes.hrLine} />
          </Box>
        </Box>
        <Box className={classes.flexWrapper}>
          <Box>
            <Typography variant={isSmallSize ? "h3" : "h6"}>
              Do you still have questions?
            </Typography>
            <Typography color="textSecondary" variant="body2">
              Get a fast response about property amenities, check-in times, and general questions.
            </Typography>
            <button className={classes.reviewsBtn}>Chat with the host {'>'} </button>

          </Box>
        </Box>
        <hr className={classes.hrLine} />
        <Box className={classes.flexWrapper}>
          <Box style={{ width: "100%"}}>
            <Typography variant={isSmallSize ? "h3" : "h6"}>
              Location
            </Typography>
            <Typography color="textSecondary" variant="body2">
              Canada, Quebec
            </Typography>
            {/* <img src="/images/Map.png" width="100%"/> */}
            <Box id="googleMap" style={{ overflowY: "scroll", height: "220px", width: "100%"}}></Box>
            <button className={classes.reviewsBtn} onClick={() => setMap(true)}>Show More {'>'} </button>
            <hr className={classes.hrLine} />
          </Box>
        </Box>

        <Box className={classes.flexWrapper}>
          <Box className={classes.ruleWrap}>
            <Typography variant={isSmallSize ? "h3" : "h6"}>
              Things to note
            </Typography>
            <ul className={classes.ulWrap}>
              <li><img src="/images/check-vector.png" className={classes.checkImg} />Cell phone reception is poor near this property</li>
              <li><img src="/images/check-vector.png" className={classes.checkImg} />Nearby noise potential</li>
              <li><img src="/images/check-vector.png" className={classes.checkImg} />Water is not drinkable</li>
              <li onClick={() => setThingsToNote(true)} style={{cursor: "pointer"}}>
                <strong>See all </strong>
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.7125 4.77349L0 1.06099L1.0605 0.000488281L5.8335 4.77349L1.0605 9.54649L0 8.48599L3.7125 4.77349Z" fill="#364259" />
                </svg>
              </li>
            </ul>
          </Box>
          <Box className={classes.ruleWrap}>
            <Typography variant={isSmallSize ? "h3" : "h6"}>
              Rules
            </Typography>
            <ul className={classes.ulWrap}>
              <li><img src="/images/check-vector.png" className={classes.checkImg} />Minimum age to rent: 18</li>
              <li><img src="/images/check-vector.png" className={classes.checkImg} />Suitable for children (2-12 years)</li>
              <li><img src="/images/check-vector.png" className={classes.checkImg} />Suitable for babies (under 2 years old)</li>
              <li><img src="/images/check-vector.png" className={classes.checkImg} />Smoking allowed inside</li>
              <li><img src="/images/check-vector.png" className={classes.checkImg} />Possible events or parties</li>
              <li onClick={() => setRules(true)} style={{cursor: "pointer"}}>
                <strong>See all </strong>
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.7125 4.77349L0 1.06099L1.0605 0.000488281L5.8335 4.77349L1.0605 9.54649L0 8.48599L3.7125 4.77349Z" fill="#364259" />
                </svg>
              </li>
            </ul>
          </Box>
          <Box className={classes.ruleWrap}>
            <Typography variant={isSmallSize ? "h3" : "h6"}>
              Cancellation policy
            </Typography>
            <ul className={classes.ulWrap}>
              <li>
                <Typography variant={isSmallSize ? "h3" : "h6"}>
                  Flexible
                </Typography></li>
              <li>You will receive a full refund as long as you cancel at least 24 hours prior to check-in. You will receive a full refund, less the first night, if you cancel within...</li>
              <li onClick={() => setCancellation(true)} style={{cursor: "pointer"}}>
                <strong>See all </strong>
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.7125 4.77349L0 1.06099L1.0605 0.000488281L5.8335 4.77349L1.0605 9.54649L0 8.48599L3.7125 4.77349Z" fill="#364259" />
                </svg>
              </li>
            </ul>
          </Box>
        </Box>
        <hr className={classes.hrLine} />
        <Box className={classes.flexWrapper}>
          <Box className={classes.mobileHandle}>
            <Typography variant={isSmallSize ? "h3" : "h6"}>
              Recommendations for you
            </Typography>
            <Box className={classes.RecommendationsWrapper}>
              <Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <RecommendationImageSlider images={images}/>
      </Container>
      <Footer />
    </div>

  );
};

export default UniqueProperty;
