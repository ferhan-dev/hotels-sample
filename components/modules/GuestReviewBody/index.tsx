import { Avatar, Box, Typography } from '@material-ui/core'
import React from 'react'
import {useStyles} from './styles'
import StarIcon from '@material-ui/icons/Star';
import AppDivider from 'src/components/elements/Divider';
import MobileSlider from './MobileSlider';



const index = () => {

    const classes = useStyles();

    return (
        <React.Fragment>
            <Box className={classes.MainBox}>
                <Box className={classes.InnerfirstDiv}>
                    <Box className={classes.dflexRow2}>
                        <Box className={classes.mainImage}>
                        <MobileSlider />
                        </Box> 
                        <Box className={classes.AltitudeText}>
                            <Typography variant="h5"> The Tree House </Typography>
                            <Box className={classes.dflexRow}>
                                <StarIcon style={{color: "#1DAF92", marginRight :"5px"}}/>
                                <Typography style={{borderRight: "1px solid #D7DDEA", width: "140px"}}>4,5 <span className={classes.grayColor} style={{marginLeft :"5px"}}>(24 Review)</span></Typography>
                                <Typography className={classes.grayColor+ " " + classes.LeftMargin10}> Canada, Quebec </Typography>
                            </Box><br />
                            <Box className={classes.Guest}>
                                <Box className={classes.dflexRow}>
                                    <img src="/images/guest.png" width="20px" height="20px"/>
                                    <Typography ><span className={classes.LeftMargin10+ " "+ classes.grayColor} style={{marginRight :"10px"}}>Guest:</span>8</Typography>
                                </Box>
                                <Box className={classes.dflexRow+ " "+ classes.topMargin151}>
                                    <img src="/images/bedroom.png" width="20px" height="15px" style={{marginTop: "5px"}}/>
                                    <Typography ><span className={classes.LeftMargin10+ " "+ classes.grayColor} style={{marginRight :"10px"}}>Bedroom:</span>3</Typography>
                                </Box>
                            </Box><br />
                            <Box className={classes.Guest2}>
                                <Box className={classes.dflexRow}>
                                    <img src="/images/drop.png" width="20px" height="20px" style={{marginTop: "5px"}}/>
                                    <Typography ><span className={classes.LeftMargin10+ " "+ classes.grayColor} style={{marginRight :"10px"}}>Bathrooms:</span>3</Typography>
                                </Box>
                                <Box className={classes.dflexRow+ " "+ classes.topMargin151}>
                                    <img src="/images/Wifi.png" width="20px" height="15px" style={{marginTop: "5px"}}/>
                                    <Typography ><span className={classes.LeftMargin10+ " "+ classes.grayColor} style={{marginRight :"10px"}}>Wifi:</span>Fast Speed</Typography>
                                </Box>
                            </Box><br />
                            <Box className={classes.ArrivalBox+" "+classes.LeftMargin10}>
                                <Typography className={classes.LeftMargin10+ " "+ classes.topMargin5}><span className={classes.grayColor}>Arrival:</span>8 Sep 2020</Typography>
                                <Typography className={classes.LeftMargin10+ " "+ classes.topMargin5} style={{color: "#D7DDEA"}}>I</Typography>
                                <Typography className={classes.LeftMargin10+ " "+ classes.topMargin5}><span className={classes.grayColor}>Departure </span>13 Sep 2020</Typography>
                            </Box><br />
                            <Box className={classes.ArrivalBox2+" "+classes.LeftMargin10}>
                                <Typography className={classes.LeftMargin10+ " "+ classes.topMargin5}><span className={classes.grayColor}>Arrival:</span>8 Sep 2020</Typography>
                            </Box><br />
                            <Box className={classes.ArrivalBox2+" "+classes.LeftMargin10}>
                            <Typography className={classes.LeftMargin10+ " "+ classes.topMargin5}><span className={classes.grayColor}>Departure </span>13 Sep 2020</Typography>
                            </Box><br />
                            <Box className={classes.dflexRow+" "+classes.marginBottom}>
                                <Avatar src="/images/TImage.png"></Avatar>
                                <Box className={classes.dColumn+ " " + classes.LeftMargin10}>
                                    <Typography variant="caption" className={classes.grayColor}>Hosted by</Typography>
                                    <Typography variant="caption" className={classes.topMargin5}>Luc Bernier</Typography>
                                </Box>
                            </Box>
                        </Box>
                        
                        </Box>
                    </Box>
                    <Box className={classes.MainRating}>
                        <Box className={classes.dColumn+" "+ classes.topMargin15}>
                            <Typography variant="h5"> Cleanliness </Typography>
                            <Typography variant="caption"> How was the communication between you and the host? </Typography>
                        </Box>
                        <Box className={classes.dflexRow+" "+classes.topMargin15}>
                        <StarIcon className={classes.LeftMargin10} style={{color: "#D7DDEA", marginRight :"5px"}}/>
                        <StarIcon className={classes.LeftMargin10} style={{color: "#D7DDEA", marginRight :"5px"}}/>
                        <StarIcon className={classes.LeftMargin10} style={{color: "#D7DDEA", marginRight :"5px"}}/>
                        <StarIcon className={classes.LeftMargin10} style={{color: "#D7DDEA", marginRight :"5px"}}/>
                        <StarIcon className={classes.LeftMargin10} style={{color: "#D7DDEA", marginRight :"5px"}}/>
                        <Box className={classes.RatingButton+" "+classes.LeftMargin10}>
                            <Typography>0.0</Typography>
                        </Box>
                        </Box>
                    </Box><br />
                    <AppDivider />
                    <Box className={classes.MainRating}>
                        <Box className={classes.dColumn+" "+ classes.topMargin15}>
                            <Typography variant="h5"> Check-in </Typography>
                            <Typography variant="caption"> Were the indications for check-ins clear and easy? </Typography>
                        </Box>
                        <Box className={classes.dflexRow+" "+classes.topMargin15}>
                        <StarIcon className={classes.LeftMargin10} style={{color: "#D7DDEA", marginRight :"5px"}}/>
                        <StarIcon className={classes.LeftMargin10} style={{color: "#D7DDEA", marginRight :"5px"}}/>
                        <StarIcon className={classes.LeftMargin10} style={{color: "#D7DDEA", marginRight :"5px"}}/>
                        <StarIcon className={classes.LeftMargin10} style={{color: "#D7DDEA", marginRight :"5px"}}/>
                        <StarIcon className={classes.LeftMargin10} style={{color: "#D7DDEA", marginRight :"5px"}}/>
                        <Box className={classes.RatingButton+" "+classes.LeftMargin10}>
                            <Typography>0.0</Typography>
                        </Box>
                        </Box>
                    </Box><br />
                    <AppDivider />
                    <Box className={classes.MainRating}>
                        <Box className={classes.dColumn+" "+ classes.topMargin15}>
                            <Typography variant="h5"> Accuracy </Typography>
                            <Typography variant="caption"> Were the informations about the property accurate? </Typography>
                        </Box>
                        <Box className={classes.dflexRow+" "+classes.topMargin15}>
                        <StarIcon className={classes.LeftMargin10} style={{color: "#D7DDEA", marginRight :"5px"}}/>
                        <StarIcon className={classes.LeftMargin10} style={{color: "#D7DDEA", marginRight :"5px"}}/>
                        <StarIcon className={classes.LeftMargin10} style={{color: "#D7DDEA", marginRight :"5px"}}/>
                        <StarIcon className={classes.LeftMargin10} style={{color: "#D7DDEA", marginRight :"5px"}}/>
                        <StarIcon className={classes.LeftMargin10} style={{color: "#D7DDEA", marginRight :"5px"}}/>
                        <Box className={classes.RatingButton+" "+classes.LeftMargin10}>
                            <Typography>0.0</Typography>
                        </Box>
                        </Box>
                    </Box><br />
                    <AppDivider />
                    <Box className={classes.MainRating}>
                        <Box className={classes.dColumn+" "+ classes.topMargin15}>
                            <Typography variant="h5"> Value </Typography>
                            <Typography variant="caption"> How would you rate per night for for this property offered? </Typography>
                        </Box>
                        <Box className={classes.dflexRow+" "+classes.topMargin15}>
                        <StarIcon className={classes.LeftMargin10} style={{color: "#D7DDEA", marginRight :"5px"}}/>
                        <StarIcon className={classes.LeftMargin10} style={{color: "#D7DDEA", marginRight :"5px"}}/>
                        <StarIcon className={classes.LeftMargin10} style={{color: "#D7DDEA", marginRight :"5px"}}/>
                        <StarIcon className={classes.LeftMargin10} style={{color: "#D7DDEA", marginRight :"5px"}}/>
                        <StarIcon className={classes.LeftMargin10} style={{color: "#D7DDEA", marginRight :"5px"}}/>
                        <Box className={classes.RatingButton+" "+classes.LeftMargin10}>
                            <Typography>0.0</Typography>
                        </Box>
                        </Box>
                    </Box><br />
                    <AppDivider />
                    <Box className={classes.MainRating}>
                        <Box className={classes.dColumn+" "+ classes.topMargin15}>
                            <Typography variant="h5"> Final average rating </Typography>
                        </Box>
                        <Box className={classes.dflexRow+" "+classes.topMargin15}>
                        <StarIcon className={classes.LeftMargin10} style={{color: "#D7DDEA", marginRight :"5px"}}/>
                        <StarIcon className={classes.LeftMargin10} style={{color: "#D7DDEA", marginRight :"5px"}}/>
                        <StarIcon className={classes.LeftMargin10} style={{color: "#D7DDEA", marginRight :"5px"}}/>
                        <StarIcon className={classes.LeftMargin10} style={{color: "#D7DDEA", marginRight :"5px"}}/>
                        <StarIcon className={classes.LeftMargin10} style={{color: "#D7DDEA", marginRight :"5px"}}/>
                        <Box className={classes.RatingButton+" "+classes.LeftMargin10}>
                            <Typography>0.0</Typography>
                        </Box>
                        </Box>
                    </Box><br />
                    <AppDivider />
                    <Box className={classes.MainRating}>
                        <Box className={classes.dColumn+" "+ classes.topMargin15}>
                            <Typography variant="h5"> Leave a comment about the stay </Typography>
                            <Typography variant="caption"> Leave comments to set expctations for the next hosts. </Typography>
                        </Box>
                    </Box><br /><br />
                    <textarea className={classes.textArea} placeholder="You can type here"/>
                </Box>
        </React.Fragment>
    )
}

export default index



    