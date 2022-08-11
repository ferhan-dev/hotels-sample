import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Container,
  Avatar,
  Typography,
  Tabs,
  Tab,
  Grid,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AppBar from "@material-ui/core/AppBar";
import StepOne from "./Stepper/stepOne";
import StepTwo from "./Stepper/stepTwo";
import StepThree from "./Stepper/stepThree";
import StepFour from "./Stepper/stepFour";
import { useStylesSteps } from "./styles";
import AddPaymentModal from "../Modal/addPaymentModal";
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
const Payment = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const classes = useStylesSteps();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: any) => {
    console.log(event);
    setValue(newValue);
  };
  const [datas, setDatas] = useState(false);
  const [values, setValues] = React.useState("Bank transfer in CAD");
  const [steps, setStep] = useState("step1");
  const handleChanges = (event: any) => {
    setValues(event.target.values);
  };
  console.log(steps);
  return (
    <>
      <Box className={classes.personalInfo}>
        <Container className={classes.container}>
          <Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              className={classes.connectionSect}
            >
              <Box display="flex" alignItems="center">
                <Avatar
                  src={"/images/leftArrow.png"}
                  className={classes.leftArrow}
                />
                <Typography variant="h6">
                  Payments and bank connection
                </Typography>
              </Box>
              <Box>
                <Button className={classes.btnBack}>Back</Button>
                <Button
                  className={classes.btnNext}
                  onClick={() => {
                    setStep("step2");
                    if (steps === "step2") {
                      setStep("step3");
                    }
                    if (steps == "step3") {
                      setStep("step4");
                    }
                  }}
                >
                  {steps == "step4" ? "Confirm" : "Next"}
                </Button>
              </Box>
            </Box>
            {!datas ? (
              <Box>
                {/* <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="simple tabs example"
                  className={classes.tabs}
                >
                  <Tab label="Payments" {...a11yProps(0)} />
                  <Tab label="Payouts" {...a11yProps(1)} />
                </Tabs> */}
                <div className={classes.root}>
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
                      <Tab label="Payments" {...a11yProps(0)} />
                      <Tab label="Payouts" {...a11yProps(1)} />
                    </Tabs>
                  </AppBar>
                </div>
              </Box>
            ) : (
              ""
            )}
          </Box>
        </Container>
      </Box>
      {!datas ? (
        <>
          <Box>
            <Container
              className={`${classes.container} ${classes.containMobile}`}
            >
              <TabPanel value={value} index={0}>
                <Grid className={classes.tabContain}>
                  <Grid
                    item
                    sm={12}
                    md={8}
                    lg={8}
                    className={classes.taboneDetail}
                  >
                    <Typography variant="h6" className={classes.taboneTitle}>
                      Payment Methods
                    </Typography>
                    <Typography className={classes.tabonePara}>
                      Add a payment method using our secure payment system, then
                      start planning your next trip.
                    </Typography>
                    <Box display="flex" className={classes.addCardMain}>
                      <Box className={classes.addCard}>
                        <Box className={classes.cardContain}>
                          <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                          >
                            <Typography variant="h6">Eren’s card</Typography>
                            <Avatar
                              src={"/images/Mastercard.png"}
                              className={classes.masterCard}
                            />
                          </Box>
                          <Box marginTop="56px">
                            <Typography variant="h6">
                              5892 **** **** ****
                            </Typography>
                          </Box>
                        </Box>
                        <Avatar
                          src={"/images/cardImg.png"}
                          className={classes.cardBg}
                        />
                      </Box>
                      <Box
                        className={classes.addPayment}
                        onClick={() => setModalOpen(true)}
                      >
                        <Avatar
                          src={"/images/addIcon.png"}
                          className={classes.addIcon}
                        />
                        <Typography variant="h6">
                          Add a payment method
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    sm={12}
                    md={4}
                    lg={4}
                    className={classes.tabTwoDetail}
                  >
                    <Box>
                      <Avatar
                        src={"/images/addPayment.png"}
                        className={classes.paymentIcon}
                      />
                      <Typography variant="h6" className={classes.taboneTitle}>
                        Make all payments via ChaletRetreat
                      </Typography>
                      <Typography
                        className={classes.tabonePara}
                        style={{ maxWidth: "330px" }}
                      >
                        ChaletRetreat will never ask you to wire money. Always
                        pay and communicate through ChaletRetreat to ensure you
                        benefit from the protection offered by our Terms and
                        Conditions, our Payment Terms of Service, our
                        Cancellation Terms and other guarantees. Find out more.
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Grid className={classes.tabContain}>
                  <Grid
                    item
                    xs={6}
                    lg={6}
                    xl={8}
                    className={`${classes.taboneDetail} ${classes.tabMobile}`}
                  >
                    <Box>
                      <Typography variant="h6" className={classes.taboneTitle}>
                        Payment Methods
                      </Typography>
                      <Typography className={classes.paymentPara}>
                        When you receive payment for a reservation, we call the
                        payment given to you a “deposit”. Our secure payment
                        system supports several payment methods which can be
                        configured below. Consult the FAQ.
                      </Typography>
                    </Box>
                    <Box className={classes.paymentTitles}>
                      <Typography variant="h6" className={classes.taboneTitle}>
                        To be paid, you must register a payment method.
                      </Typography>
                      <Typography className={classes.paymentPara}>
                        Airbnb releases payments approximately 24 hours after
                        the traveler's scheduled arrival time. The time it takes
                        for the money to be deposited into your account depends
                        on your payment method. Find out more.
                      </Typography>
                    </Box>
                    <Button
                      className={classes.btnaddPayment}
                      onClick={() => setDatas(true)}
                    >
                      Add a payment method
                    </Button>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    lg={6}
                    xl={4}
                    className={`${classes.tabTwoDetail} ${classes.tabMobile}`}
                  >
                    <Box>
                      <Box
                        display="flex"
                        alignItems="center"
                        marginTop="35px"
                        marginBottom="20px"
                      >
                        <Avatar
                          src={"/images/faq.png"}
                          className={classes.faqIcon}
                        />
                        <Typography
                          variant="h6"
                          className={classes.taboneTitle}
                          style={{ marginBottom: "0px" }}
                        >
                          FAQ
                        </Typography>
                      </Box>
                      <Box className={classes.accordionData}>
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                          >
                            <Typography className={classes.heading}>
                              How do payments work?
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>
                              When you receive payment for a reservation, we
                              call the payment given to you a “deposit”. Secure
                              payment system supports several.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                          >
                            <Typography className={classes.heading}>
                              Add payout information
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>
                              When you receive payment for a reservation, we
                              call the payment given to you a “deposit”. Secure
                              payment system supports several.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                          >
                            <Typography className={classes.heading}>
                              When will I receive my payment?
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>
                              When you receive payment for a reservation, we
                              call the payment given to you a “deposit”. Secure
                              payment system supports several.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </TabPanel>
            </Container>
          </Box>
          {modalOpen ? (
            <AddPaymentModal
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
            />
          ) : (
            ""
          )}
        </>
      ) : (
        <Box>
          <Grid>
            {steps == "step1" ? (
              <StepOne handleChanges={handleChanges} values={values} />
            ) : (
              ""
            )}
            {steps == "step2" ? (
              <StepTwo handleChanges={handleChanges} values={values} />
            ) : (
              ""
            )}
            {steps == "step3" ? <StepThree /> : ""}
            {steps == "step4" ? <StepFour /> : ""}
          </Grid>
        </Box>
      )}
    </>
  );
};
export default Payment;
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
