import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles(({breakpoints}) => ({
    Wrapper: {
        width: "90%",
        marginLeft: "8%",
        marginTop: "30px",
        marginBottom: "30px",
        display: "flex",
        flexDirection: "row",
        [breakpoints.down(769)]: {
            flexDirection: "column",
            marginLeft: "2%",
        }
    },

    FirstBox: {
        width: "65%",
        [breakpoints.down(769)]: {
            width: "100%",
        }
    },

    mainBox: {
        border: "1px solid #EAEEF5", borderRadius: "24px", width: "90%", marginLeft: "5%", marginRight: "5%",
        [breakpoints.down(769)]: {
            width: "100%",
            border: "none",
            marginLeft: "0.5%"
        }
    },

    innerBox: {
        width: "80%", marginLeft: "5%", marginRight: "5%", marginTop: "20px",
        [breakpoints.down(769)]: {
            width: "100%",
            border: "none",
            marginLeft: "1%"
        }
    },

    ClockImage: {
        width: "25px", height: "25px"
    },

    Dates: {
        marginLeft: "95px", fontSize: "14px",
        [breakpoints.down(769)]: {
            marginLeft: "35px", fontSize: "12px"
        }
    },

    firstSection: {

    },
    grayColor: {
        color: "#5A6987",
    },

    TreeHouseMain: {
        display: "flex", flexDirection: "row", width: "100%", marginLeft: "5%", marginRight: "5%", marginTop: "20px"
    },

    RowDirection: {
        display: "flex", flexDirection: "row"
    },

    ConfirmButtonBox: {
        width: "90%", marginLeft: "5%", marginRight: "5%", marginTop: "30px"
    },

    ConfirmButton: {
        width: "100%", borderRadius: "24px", background: "#1DAF92", color: "white"
    },

    PaymentPolicyMain: {
        marginTop: "10px", marginLeft: "10px", display: "flex", flexDirection: "row"
    },

    RefundableSecurity: {
        border: "1px solid #EAEEF5", borderRadius: "24px", width: "90%", marginLeft: "5%", marginRight: "5%", marginTop: "30px"
    },

    RefundableInner: {
        width: "80%", marginLeft: "5%", marginRight: "5%", marginTop: "15px"
    },

    SecondBox: {
        width: "35%",
        [breakpoints.down(769)]: {
            width: "100%",
        }
    },
}));

