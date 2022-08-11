import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(
  ({breakpoints}) => ({
    MainBox: {
        width: "85%",
        marginLeft: "10%",
        marginRight: "5%",
        marginTop: "40px",
        [breakpoints.down(430)]: {
            width: "100%",
            marginLeft: "0%",
            marginRight: "0%",
            overflowX: "hidden"
        }
    },

    InnerfirstDiv: {

    },

    dflexRow: {
        display: "flex",
        flexDirection: "row",
    },

    dflexRow2: {
        display: "flex",
        flexDirection: "row",
        [breakpoints.down(430)]: {
            flexDirection: "column"
        }
    },

    mainImage: {
        width: "45%",
        marginRight :"2%",
        [breakpoints.down(430)]: {
            width: "100%",
            marginRight :"0%",
            overflowX: "hidden"
        }
    },

    propertyImage: {
        width:"100%", height: "320px", borderRadius: "16px",
        [breakpoints.down(430)]: {
            width: "108%",
            marginRight :"0%",
            borderRadius: "0px",
            overflowX: "hidden"
        }
    },

    AltitudeText: {
        width: "35%",
        marginLeft :"2%",
        [breakpoints.down(770)]: {
            width: "60%",
        },
        [breakpoints.down(430)]: {
            width: "100%",
            marginLeft: "10px",
            marginRight :"0%",
            borderRadius: "0px",
            overflowX: "hidden"
        }
    },

    grayColor: {
        color: "#5A6987",
    },

    LeftMargin10: {
        marginLeft: "10px"
    },

    Guest: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "70%",
        [breakpoints.down(1025)]: {
            width: "90%",
        },

        [breakpoints.down(430)]: {
            flexDirection:"column",
        }
    },

    Guest2: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "78%",
        [breakpoints.down(1025)]: {
            width: "98%",
        },
        [breakpoints.down(430)]: {
            flexDirection:"column",
        }
    },

    ArrivalBox: {
        width: "80%",
        border: '1px solid #EAEEF5',
        borderRadius: '24px',
        display: "flex",
        flexDirection: 'row',
        height: "40px",
        [breakpoints.down(1025)]: {
            width: "110%",        
        },
        [breakpoints.down(770)]: {
            width: "100% !important",        
        },
        [breakpoints.down(430)]: {
            display:"none",
        }
    },

    ArrivalBox2: {
        width: "90%",
        border: '1px solid #EAEEF5',
        borderRadius: '24px',
        flexDirection: 'row',
        height: "40px",
        display: "none",
        [breakpoints.down(430)]: {
            display:"block",
            paddingLeft: "20%"
        }
    },

    topMargin5: {
        marginTop: "5px",
    },

    topMargin15: {
        marginTop: "15px",
    },
    topMargin151: {
        [breakpoints.down(430)]: {
            marginTop: "15px",
        }
    },

    dColumn: {
        display: "flex",
        flexDirection: "column"
    },

    MainRating: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        [breakpoints.down(430)]: {
            flexDirection: "column",
            width: "90%",
            marginLeft: "20px"
        }
    },

    marginBottom: {
        marginBottom: "5px"
    },

    RatingButton: {
        border: "1px solid #EAEEF5",
        borderRadius: "24px",
        width: "53px",
        height: "32px",
        paddingLeft: "15px"
    },

    textArea: {
        width: "100%", height: "130px", borderRadius: "12px", paddingLeft: "20px", paddingTop: "12px", border: "1px solid #EAEEF5", resize: "none",marginBottom: "60px"
    }

   /*______________________*/
  }),
);