import { Avatar, Box, Button,  Typography,  Checkbox } from '@material-ui/core'
import React from 'react'
import {useStyles} from './style'
import AppDivider from 'src/components/elements/Divider'
import AddNumber from './BookingButtons/AddNumber'
import UniqueDate from "../Booking/Date"
import GuestsMenu from '../Booking/Guest'
import { useState } from 'react'
import AddPayment from './BookingButtons/AddPayments'
import Coupon from './BookingButtons/Coupon'
import VerificationPopUp from './BookingButtons/AddNumber/verificationPopUp'

const index = () => {
    const classes = useStyles();
    const [addNumber, setAddNumber] = useState(false);
    const [addPayment, setAddPayment] = useState(false);
    const [coupon, setCoupon] = useState(false);
    const [verification, setVerification] = useState(false);

    return (
        <React.Fragment>
            {addNumber && <AddNumber description={addNumber} setDescription={setAddNumber} setVerification={setVerification}/>}
            {addPayment && <AddPayment description={addPayment} setDescription={setAddPayment}/>}
            {coupon && <Coupon description={coupon} setDescription={setCoupon}/>}
            {verification && <VerificationPopUp description={verification} setDescription={setVerification}/>}

            <Box className={classes.Wrapper}>
                <Box className={classes.FirstBox}>
                <Box className={classes.firstSection}>
                <Typography variant="h3">Review trip details and adjust options if needed</Typography><br />
                <Box className={classes.RowDirection}>
                <Avatar src="/images/clock.png" className={classes.ClockImage}/>
                <Typography className={classes.grayColor} style={{marginLeft: "15px", fontSize: "14px"}}>Check-in:</Typography>
                <Avatar src="/images/clock.png" className={classes.ClockImage} style={{marginLeft: "75px"}}/>
                <Typography className={classes.grayColor} style={{marginLeft: "15px", fontSize: "14px"}}>Check-out:</Typography>
                </Box>
                <Box className={classes.RowDirection} >
                <Typography variant="h6" style={{marginLeft: "45px", fontSize: "14px"}}>From 4:00 PM</Typography>
                <Typography variant="h6" style={{marginLeft: "95px", fontSize: "14px"}}>11:00 AM</Typography>
                </Box><br />
                <AppDivider /><br />
                <Box className={classes.RowDirection} >
                <Typography variant="h6" className={classes.grayColor} style={{marginLeft: "45px", fontSize: "14px"}}>DATES</Typography>
                <Typography variant="caption" className={classes.Dates}>From September 20th to September 22nd 2021</Typography>
                </Box>
                <Box className={classes.RowDirection} >
                <Typography variant="h6" className={classes.grayColor} style={{marginLeft: "45px", fontSize: "14px"}}>Guests</Typography>
                <Typography variant="caption" className={classes.Dates} style={{marginTop: "5px"}}>2 Adult, 2 Children</Typography>
                </Box><br />
                <AppDivider /><br />
                <Typography variant="h3">House rules</Typography><br />
                <Box className={classes.RowDirection} >
                <Avatar src="/images/tick.png" style={{width: "15px", height: "15px"}}/>
                <Typography  style={{marginLeft: "15px", fontSize: "14px", marginTop: "-5px"}}>Minimum age to rent: 18</Typography>
                </Box>
                <Box className={classes.RowDirection} style={{ marginTop: "10px"}}>
                <Avatar src="/images/tick.png" style={{width: "15px", height: "15px"}}/>
                <Typography  style={{marginLeft: "15px", fontSize: "14px", marginTop: "-5px"}}>Suitable for children (2-12 years)</Typography>
                </Box>
                <Box className={classes.RowDirection} style={{ marginTop: "10px"}}>
                <Avatar src="/images/cross.png" style={{width: "15px", height: "15px"}}/>
                <Typography  style={{marginLeft: "15px", fontSize: "14px", marginTop: "-5px"}}>Suitable for babies (under 2 years old)</Typography>
                </Box>
                <Box className={classes.RowDirection} style={{ marginTop: "10px"}}>
                <Avatar src="/images/tick.png" style={{width: "15px", height: "15px"}}/>
                <Typography  style={{marginLeft: "15px", fontSize: "14px", marginTop: "-5px"}}>Smoking allowed inside</Typography>
                </Box>
                <Box className={classes.RowDirection} style={{ marginTop: "10px"}}>
                <Avatar src="/images/tick.png" style={{width: "15px", height: "15px"}}/>
                <Typography  style={{marginLeft: "15px", fontSize: "14px", marginTop: "-5px"}}>Pets allowed</Typography>
                </Box>
                <Box className={classes.RowDirection} style={{ marginTop: "10px"}}>
                <Avatar src="/images/cross.png" style={{width: "15px", height: "15px"}}/>
                <Typography  style={{marginLeft: "15px", fontSize: "14px", marginTop: "-5px"}}>Possible events or parties</Typography>
                </Box>
                <Box className={classes.RowDirection} style={{ marginTop: "10px"}}>
                <Avatar src="/images/cross.png" style={{width: "15px", height: "15px"}}/>
                <Typography  style={{marginLeft: "15px", fontSize: "14px", marginTop: "-5px"}}>Events allowed</Typography>
                </Box>
                <Box className={classes.RowDirection} style={{ marginTop: "10px"}}>
                <Avatar src="/images/cross.png" style={{width: "15px", height: "15px"}}/>
                <Typography  style={{marginLeft: "15px", fontSize: "14px", marginTop: "-5px"}}>Open fires allowed</Typography>
                </Box><br />
                <AppDivider /><br />
                <Box className={classes.RowDirection} style={{ justifyContent: "space-between" }}>
                <Typography variant="h5">Payment</Typography><br />
                <Button style={{border: "1px solid #EAEEF5", borderRadius: "24px", fontSize: "12px"}} onClick={() => setAddPayment(true)}>Add a payment method</Button>
                </Box>
                <br />
                <AppDivider /><br />
                <Typography variant="h5">Required for your trip</Typography><br />
                <Box className={classes.RowDirection} style={{ justifyContent: "space-between" }}>
                <Typography variant="h5">Phone number</Typography><br />
                <Button style={{border: "1px solid #EAEEF5", borderRadius: "24px"}} onClick={() => setAddNumber(true)}>Add</Button>
                </Box>
                <Typography className={classes.grayColor}>Add and confirm your phone number to get trip updates.</Typography><br />
                <AppDivider /><br />
                <Box>
                    <Box  className={classes.RowDirection}>
                        <Box>
                            <Avatar src="/images/BookingImage.png"></Avatar>
                        </Box>
                        <Box style={{marginLeft: "20px", display: "flex", flexDirection: "column", marginTop: "5px"}}>
                            <Typography variant="caption" className={classes.grayColor}>Hosted by</Typography>
                            <Typography variant="caption"><strong>Luc Bernier</strong></Typography>
                        </Box>
                    </Box><br />
                    <Box style={{width: "100%"}}>
                        <Typography variant="h6">Message to host</Typography>
                        <textarea placeholder="Do you want to say anything to your host?" style={{width:"100%", height: "156px", border: "1px solid #EAEEF5", borderRadius: "6px", resize: "none", paddingTop:"10px", paddingLeft: "15px"}}></textarea>
                    </Box>
                </Box><br />
                <AppDivider /><br />
                <Box>
                <Typography variant="h3">Cancellation policy</Typography><br />
                <Typography variant="h6">Flexible</Typography>
                <Typography variant="caption" className={classes.grayColor}>You will receive a full refund as long as you cancel at least 24 hours prior to check-in. You will receive a full refund, less the first night, if you cancel within 24 hours of check-in. <br /> Any refund will be at the discretion of the host if you cancel after check-in.</Typography>
                </Box>
                </Box>
                </Box><br />
                <AppDivider /><br />

{/* _____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________*/}
                <Box className={classes.SecondBox}>
                <Box className={classes.mainBox}>
                    <Box className={classes.innerBox}>
                    <Box className={classes.TreeHouseMain}>
                        <Box style={{width: "30%", height: "100px"}}>
                            <Avatar src="/images/properties/rustic-chalets.png" style={{width: "100%", height: "100%", borderRadius: "12px"}}></Avatar>
                        </Box>
                        <Box style={{marginLeft: "10px"}}>
                            <Typography variant="h5">The Tree House</Typography>
                            <Typography variant="caption" className={classes.grayColor}>8 guests, 3 beds</Typography><br />
                            <Typography variant="caption" className={classes.grayColor}>Petite-Rivière-Saint-François, Canada</Typography>
                            <Box className={classes.RowDirection} style={{marginTop:"5px"}}>
                                <Avatar src="/images/YesFill.png" style={{width: "20px", height: "20px"}}></Avatar>
                                <Typography variant="caption" style={{marginLeft: "10px"}}><strong>4,5</strong></Typography>
                                <Typography variant="caption" style={{marginLeft: "2px"}} className={classes.grayColor}>(24 Review)</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <br />
                    <AppDivider/>
                    <br />
                    <Typography variant="h5"> Booking informations </Typography>
                    <UniqueDate inTopBar={false} isSmallSize={false}/>
                    <Box style={{marginTop: "10px"}}>
                    <GuestsMenu inTopBar={false} isSmallSize={false}/>
                    </Box>
                    <br />
                    <br />
                    <AppDivider/>
                    <br />

                    <Typography variant="h5"> Price details </Typography>

                    <br />
                    <Box className={classes.RowDirection} style={{ justifyContent: "space-between"}}>
                    <Typography variant="caption" className={classes.grayColor}> C$199.00 x 5 nights </Typography>
                    <Typography variant="caption"> $995.00 </Typography>
                    </Box>
                    <br />
                    <Box className={classes.RowDirection} style={{ justifyContent: "space-between"}}>
                    <Typography variant="caption" className={classes.grayColor}> Cleaning fee </Typography>
                    <Typography variant="caption"> $50.00 </Typography>
                    </Box>
                    <br />
                    <Box className={classes.RowDirection} style={{ justifyContent: "space-between"}}>
                    <Typography variant="caption" className={classes.grayColor}> Occupancy taxed and fees </Typography>
                    <Typography variant="caption"> $50.00 </Typography>
                    </Box>
                    <br />
                    <Box className={classes.RowDirection} style={{ justifyContent: "space-between"}}>
                    <Typography variant="caption" className={classes.grayColor}> Refundable security deposit </Typography>
                    <Typography variant="caption"> $50.00 </Typography>
                    </Box>
                    <br />
                    <Box className={classes.RowDirection} style={{ justifyContent: "space-between"}}>
                    <Typography variant="h5"> Total (CAD) </Typography>
                    <Typography variant="h5"> $1,243.00 </Typography>
                    </Box>
      
                    </Box><br />
                </Box>
{/* _____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________*/}
                <Box style={{ width: "90%", marginLeft: "5%", marginRight: "5%", marginTop: "30px"}} onClick={() => setCoupon(true)}>
                    <Button variant="outlined" style={{width: "100%", borderRadius: "24px"}}>Do you have a coupon code?</Button>
                </Box>
{/* _____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________*/}
                <Box className={classes.RefundableSecurity} >
                    <Box className={classes.RefundableInner}>
                    <Typography variant="h5"> Refundable security deposit </Typography>
                    <Typography variant="caption" className={classes.grayColor}>Charged 7 days before your arrival. We are gonna refund your security deposit 5 days after your stay. </Typography>
                    <Typography variant="h6" style={{color: "#1DAF92", marginTop: "10px"}}>$50.00 </Typography>
                    </Box><br />
                </Box>
                {/* _____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________*/}
                <Box className={classes.PaymentPolicyMain}>
                    <Checkbox />
                    <Typography style={{marginTop: "10px"}}>I agree to the <strong><u>Payment policy</u></strong>, <strong><u>Cancellation policy</u></strong>, and <strong><u>Rental agreement</u></strong>.</Typography>
                </Box>
{/* _____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________*/}
                <Box className={classes.ConfirmButtonBox} >
                    <Button variant="outlined" className={classes.ConfirmButton}>Confirm and pay</Button>
                </Box>
                </Box>
            </Box>
            
        </React.Fragment>
    )
}

export default index
