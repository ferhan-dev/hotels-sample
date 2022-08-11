import { Avatar, Typography } from "@material-ui/core";
import { useRouter } from "next/router";
import React from "react";
import Box from "@material-ui/core/Box";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { useDispatch } from "react-redux";
import { logoutAction } from "src/store/actions/userAction";
import { useTopBarStyles } from "./styles";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppButton from "src/components/elements/Button";
import { signOut } from "next-auth/client";

interface Props {
  config: any;
  hostName: any;
  isTop?: any;
}
const ProfilePopUp: React.FC<Props> = ({ hostName, config, isTop }) => {
  const dispatch = useDispatch();
  //const [isTop] = useState(true);
  const router = useRouter();
  const type = "listing";
  const classes = useTopBarStyles({
    isTop: type ? false : isTop,
    backWhite: false,
    scroll: false
  });
  const handleLogout = () => {
    dispatch(logoutAction());
    signOut({ redirect: false });
    router.push("/");
  };
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState: any) => (
        <div>
          {config === "Topbar" ? (
            <AppButton className={classes.logoMain} {...bindTrigger(popupState)} style={{ ...(!isTop && { border: "1px solid #090F1B" }) }}>
              <Box
                className={classes.profileLogo}
                display="flex"
                alignItems="center"
                justifyContent="center"
                style={{ ...(!isTop && { width: "32px", height: "32px" }) }}
              >
                <Avatar
                  src={!isTop ? "/images/profile-dark.svg" : "/images/profile.png"}
                  variant="square"
                  style={{ ...(!isTop && { width: "auto", height: "auto" }) }}
                ></Avatar>
              </Box>
              <Avatar className={classes.barlogo} src={!isTop ? "/images/menu-line-dark.svg" : "/images/bar.png"} variant="square"></Avatar>
            </AppButton>
          ) : config === "setting" ? (
              <Box
                  display="flex"
                  alignItems="center"
                  {...bindTrigger(popupState)}
              >
              <Avatar
                src={"/images/avtarProfile.png"}
                // className={classes.profileAvtar}
              />
              <ArrowDropDownIcon className={classes.arrowIcon} />
            </Box>
          ) : (
            ""
          )}

          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            className={classes.popover}
          >
            <Box className={classes.popoverBox}>
              <Box className={classes.boxBorder}>
                <Box display="flex" alignItems="center" marginBottom="16px">
                  <Avatar
                    className={classes.account}
                    src="/images/account.png"
                    variant="square"
                  ></Avatar>
                  <Typography
                    className={classes.accountTitle}
                    onClick={() => router.push("/account-setting")}
                  >
                    My account
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" marginBottom="16px">
                  <Avatar
                    className={classes.account}
                    src="/images/personalInfo.png"
                    variant="square"
                  ></Avatar>
                  <Typography className={classes.accountTitle}>
                    Personal informations
                  </Typography>
                </Box>{" "}
              </Box>
              <Box className={classes.boxBorder}>
                {hostName ? (
                  <>
                    <Box display="flex" alignItems="center" marginBottom="16px">
                      <Avatar
                        className={classes.account}
                        src="/images/personalInfo.png"
                        variant="square"
                      ></Avatar>
                      <Typography className={classes.accountTitle}>
                        Host dashboard
                      </Typography>
                    </Box>{" "}
                    <Box display="flex" alignItems="center" marginBottom="16px">
                      <Avatar
                        className={classes.account}
                        src="/images/personalInfo.png"
                        variant="square"
                      ></Avatar>
                      <Typography className={classes.accountTitle}>
                        Inbox
                      </Typography>
                    </Box>{" "}
                    <Box display="flex" alignItems="center" marginBottom="16px">
                      <Avatar
                        className={classes.account}
                        src="/images/personalInfo.png"
                        variant="square"
                      ></Avatar>
                      <Typography className={classes.accountTitle}>
                        My properties
                      </Typography>
                    </Box>
                  </>
                ) : (
                  ""
                )}

                <Box display="flex" alignItems="center" marginBottom="16px">
                  <Avatar
                    className={classes.account}
                    src="/images/message.png"
                    variant="square"
                  ></Avatar>
                  <Typography className={classes.accountTitle}>
                    Messages
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" marginBottom="16px">
                  <Avatar
                    className={classes.account}
                    src="/images/booking.png"
                    variant="square"
                  ></Avatar>
                  <Typography className={classes.accountTitle}>
                    Bookings
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" marginBottom="16px">
                  <Avatar
                    className={classes.account}
                    src="/images/favourite.png"
                    variant="square"
                  ></Avatar>
                  <Typography className={classes.accountTitle}>
                    Favorites
                  </Typography>
                </Box>
              </Box>
              <Box className={classes.boxBorder}>
                <Box
                  display="flex"
                  alignItems="center"
                  marginBottom="16px"
                  className={classes.hostBox}
                >
                  <Avatar
                    className={classes.account}
                    src="/images/host.png"
                    variant="square"
                  ></Avatar>
                  <Typography className={classes.accountTitle}>
                    {hostName ? "List a property" : "Become a host"}
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  marginBottom="16px"
                  className={classes.hostBox}
                >
                  <Avatar
                    className={classes.account}
                    src="/images/logout.png"
                    variant="square"
                  ></Avatar>
                  <Typography
                    className={classes.logoutTitle}
                    onClick={handleLogout}
                  >
                    Log out
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Popover>
        </div>
      )}
    </PopupState>
  );
};

export default ProfilePopUp;
