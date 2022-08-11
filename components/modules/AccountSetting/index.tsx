import React, { useState } from "react";
import { Grid, Typography, Container, Box, Avatar } from "@material-ui/core";
import { accountItems } from "./data";
import { useRouter } from "next/router";
import PersonalInfo from "./personlaInfo";
import { useAccountStyles } from "./styles";
import Payment from "./Payment";
import Security from "./security";
import Host from "./host";
import Notification from "./notification";

interface Props {
  getMeData: any;
}
const AccountSetting: React.FC<Props> = ({ getMeData }) => {
  const router = useRouter();
  const accountRoute = router.route.replace("/", "");
  const classes = useAccountStyles();
  const [value, setValues] = useState("");
  return (
    <>
      {accountRoute !== "my-properties" ? (
        <div>
          {!value ? (
            <Container className={classes.container}>
              <Box className={classes.accountHeader}>
                <Typography variant="h6">
                  Hello, {getMeData?.name} 👋
                </Typography>
                <Typography>
                  Change your profile and account settings.
                </Typography>
              </Box>
              <Grid className={classes.accountDetail}>
                {accountItems &&
                  accountItems.map((item, index) => {
                    return (
                      <Grid
                        item
                        lg={4}
                        md={6}
                        sm={12}
                        className={classes.accountGridItem}
                        key={index}
                        onClick={() => setValues(item?.flag)}
                      >
                        <Box className={classes.accountCard}>
                          <Avatar src={item?.image} />
                          <Typography variant="h6">{item?.title}</Typography>
                          <Typography>{item?.contents}</Typography>
                        </Box>
                      </Grid>
                    );
                  })}
              </Grid>
            </Container>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
      {value == "personal" && (
        <PersonalInfo
          back="personal"
          setValues={setValues}
          getMeData={getMeData}
        />
      )}
      {value == "security" && (
        <Security back="security" setValues={setValues} />
      )}
      {value == "payment" && <Payment />}
      {value == "notification" && (
        <Notification back="notification" setValues={setValues} />
      )}
      {value == "Host" && <Host />}
    </>
  );
};

export default AccountSetting;
