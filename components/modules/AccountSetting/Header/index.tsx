import React from "react";
import { Typography, Container, Box, Avatar, Button } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  containerGrid: {
    maxWidth: "1600px",
    width: "90%"
  },
  personalInfo: {
    boxShadow: "0px 1px 0px #eaeef5",
    margin: "-24px -24px 0px -24px",
    padding: "16px 0px",
    "& h6": {
      fontSize: "18px",
      color: "#090F1B",
    },
  },
  leftArrow: {
    width: "12px",
    height: "12px",
    marginRight: "30px",
    marginLeft: "40px",
  },
  buttonSave: {
    background: "#F8F9FC",
    borderRadius: "24px",
    color: "#D7DDEA",
    padding: "8px 16px",
  },
}));
export default function Header({
  head,
  button,
  back,
  setValues,
  handleUpdateUser,
  handlePasswordSave,
  type,
}: any) {
  const classes = useStyles();
  const handleClick = () => {
    if (
      back == "personal" ||
      back == "security" ||
      back == "payment" ||
      back == "notification" ||
      back == "Host"
    ) {
      setValues("");
    }
  };
  return (
    <Box className={classes.personalInfo}>
      <Container className={classes.containerGrid}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center" onClick={handleClick}>
            <Avatar
              src={"/images/leftArrow.png"}
              className={classes.leftArrow}
            />
            <Typography variant="h6">{head}</Typography>
          </Box>
          <Box>
            <Button
              className={classes.buttonSave}
              onClick={() => {
                if (type == "password") {
                  handlePasswordSave();
                } else {
                  handleUpdateUser();
                }
              }}
            >
              {button}
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
