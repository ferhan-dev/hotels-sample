import React, { useCallback, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from 'react-redux';
import { Avatar, Box, Container } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import clsx from "clsx";
import AppButton from "src/components/elements/Button";
import AppDivider from "src/components/elements/Divider";
import CloseIcon from "src/components/elements/icons/Close";
import FacebookIcon from "src/components/elements/icons/Facebook";
import ImageEditIcon from "src/components/elements/icons/ImageEdit";
import UploadIcon from "src/components/elements/icons/Upload";
import AppTypography from "src/components/elements/Typography";
import ActionButtonGroup from "src/components/modules/ButtonGroup";
import { TO_ADD_LISTING_PAGE } from "src/constants";
import { useScreenSizeDown } from "src/hooks/screenSize";
import { ListingStepNavigate } from "src/types/listing";
import { updateUser } from "src/services/api";
import { userInfoSelector } from "src/store/selectors/userSelector";
import { useStyles } from "./styles";

const ProfilePhoto = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const userInfo = useSelector(userInfoSelector);

  const classes = useStyles();
  const router = useRouter();
  const isSmallSizeDown = useScreenSizeDown("xs");

  const handleChange = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      target.files
        ? setProfileImage(target.files[0])
        : setProfileImage(target.files);
    },
    []
  );

  const disableGutters = isSmallSizeDown ? false : true;
  const maxWidth = "sm" as const;
  const { back, next }: ListingStepNavigate = {
    next: { section: "property-photos", step: "two" },
    back: { section: "inbetween", step: "one" },
  };

  const onNext = () => {
    if (profileImage) {
      setError(null);
      setLoading(true);
      const formData = new FormData();
      formData.set('picture', profileImage);
      updateUser(formData).then(() => {
        router.push(`${TO_ADD_LISTING_PAGE}/${next.step}/${next.section}`);
      })
      .catch ((ex) => {
        const error = ex.response?.data;
        if (error) {
          setError(error.message);
        } else {
          setError(ex.message);
        }
      })
      .finally(() => setLoading(false));
    }
  }

  useEffect(() => {
    if (userInfo?.picture) {
      router.push(`${TO_ADD_LISTING_PAGE}/${next.step}/${next.section}`);
    }
  }, [userInfo]);

  return (
    <>
      <Container
        className={classes.root}
        disableGutters={disableGutters}
        maxWidth={maxWidth}
      >
        <AppTypography
          component="h1"
          variant="displayMedium"
          neutralColor={900}
        >
          Add your photo
        </AppTypography>
        <AppTypography
          neutralColor={500}
          style={{ margin: "8px 0 32px 0" }}
          variant="body"
        >
          Make sure your photo shows clearly your face, so that travelers can
          identify their host.
        </AppTypography>
        <Box className={classes.flexWrapper} style={{ gap: "24px" }}>
          <Avatar
            className={classes.avatar}
            src={profileImage ? URL.createObjectURL(profileImage) : undefined}
            variant="rounded"
          >
            <Avatar
              className={classes.logo}
              src="/images/grey-logo.png"
              variant="square"
            ></Avatar>
          </Avatar>
          <Box width="100%">
            {profileImage ? (
              <AppTypography
                style={{ marginBottom: "24px" }}
                variant="body"
                neutralColor={500}
              >
                This photo will be added to your profile. The hosts or travelers
                will see it, make sure it does not contain personal or sensitive
                information.
              </AppTypography>
            ) : null}
            <Box className={classes.flexWrapper} style={{ gap: "16px" }}>
              <AppButton
                startIcon={profileImage ? <ImageEditIcon /> : <UploadIcon />}
                className={classes.btn}
                variant="outlined"
              >
                <input
                  accept="image/jpeg,image/png"
                  type="file"
                  name="photo"
                  className={classes.input}
                  onChange={handleChange}
                />
                {profileImage ? "Edit Photo" : "Upload Photo"}
              </AppButton>
              <AppButton
                className={clsx(classes.btn, profileImage ? classes.error : "")}
                onClick={profileImage ? () => setProfileImage(null) : undefined}
                startIcon={
                  profileImage ? (
                    <CloseIcon color="error" />
                  ) : (
                    <FacebookIcon variant="no-background" />
                  )
                }
                variant="outlined"
              >
                {profileImage ? "Delete Photo" : "Use Facebook Photo"}
              </AppButton>
            </Box>
          </Box>
        </Box>
      </Container>
      <AppDivider />
      {error && (
        <Alert severity="error" style={{ marginBottom: "24px" }}>
          {error}
        </Alert>
      )}
      <ActionButtonGroup
        secondaryBtnProps={{
          onClick: () =>
            router.push(`${TO_ADD_LISTING_PAGE}/${back.step}/${back.section}`),
        }}
        primaryBtnProps={{
          disabled: !profileImage || loading,
          onClick: onNext,
        }}
        containerProps={{
          maxWidth,
          disableGutters,
        }}
      />
    </>
  );
};

export default ProfilePhoto;
