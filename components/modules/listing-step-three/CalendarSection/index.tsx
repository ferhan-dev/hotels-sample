import { Box, Container } from "@material-ui/core";
import { ReportProblemOutlined } from "@material-ui/icons";
import { useRouter } from "next/router";
import React, { useState } from "react";
import AppButton from "src/components/elements/Button";

import AppDivider from "src/components/elements/Divider";
import UploadIcon from "src/components/elements/icons/Upload";
import AppTypography from "src/components/elements/Typography";
import { useScreenSizeDown } from "src/hooks/screenSize";
import { ModalVariant, ListingStepNavigate, IcalFeedValues } from "src/types";
import { buildListingPath } from "src/utils";
import ActionButtonGroup from "src/components/modules/ButtonGroup";
import Calendar from "../../Calendar";
import DeleteDialog from "./DeleteDialog";
import CalendarEditPricingDialog from "./EditPricingDialog";
import { ExternaliCals, ICalMenu } from "./ExternaliCals";
import CalendarImportDialog from "./ImportDialog";
import { useStyles } from "./styles";
import { useAddListingContext } from "src/context";
import { addIcalFeed, deleteIcalFeed } from "src/services/api";

const { back, next }: ListingStepNavigate = {
  next: { section: "cancellation-policies", step: "three" },
  back: { section: "basic-fee", step: "three" },
};

const CalendarSection: React.FC = () => {
  const { form } = useAddListingContext();
  const { getValues, setValue } = form;
  const property = getValues();
  const propertyId = property.id;
  // const calendars = getValues('calendars');
  const icalFeeds = getValues('ical_feeds');

  const [platforms, setPlatforms] = useState<IcalFeedValues[]>(icalFeeds);
  const [modal, setModal] = useState<ModalVariant>("none");

  const classes = useStyles();
  const router = useRouter();
  const isLargeSizeDown = useScreenSizeDown("lg");

  const handleImport = (icalFeed: IcalFeedValues) => {
    addIcalFeed(icalFeed, propertyId).then(result => {
      icalFeeds.push(result.data);
      setValue('ical_feeds', [...icalFeeds]);
      setPlatforms([...icalFeeds]);
    });
  };

  const handleDelete = (index: number) => {
    setPlatforms((prevPlatforms) => {
      const platforms = [...prevPlatforms];
      const removedPlatforms = platforms.splice(index, 1);
      
      if (removedPlatforms.length) {
        deleteIcalFeed(removedPlatforms[0].id)
      }

      return platforms;
    });
  };

  const disableGutters = isLargeSizeDown ? false : true;
  const maxWidth = "lg" as const;

  const rightBtnElement = (
    <AppButton
      className={classes.btn}
      onClick={() => setModal("import")}
      startIcon={<UploadIcon />}
      variant="outlined"
    >
      Import
    </AppButton>
  );

  const leftBtnElement = (
    <AppButton
      className={classes.btn}
      onClick={() => setModal("edit-pricing")}
      variant="outlined"
    >
      Set Specific Pricing
    </AppButton>
  );
  
  return (
    <>
      <CalendarEditPricingDialog
        open={modal === "edit-pricing"}
        onClose={() => setModal("none")}
        onDelete={() => setModal("delete-pricing")}
      />
      <DeleteDialog
        open={modal === "delete-pricing"}
        onClose={() => setModal("none")}
        onDelete={() => setModal("none")}
        subTitle="If you decide to delete it you will lose all the changes made during
        this period and the base price chosen previously will be applied to it."
        title="Custom pricing"
      />
      <CalendarImportDialog
        open={modal === "import"}
        onClose={() => setModal("none")}
        onImport={handleImport}
      />
      <Container
        disableGutters={disableGutters}
        maxWidth={maxWidth}
        className={classes.root}
      >
        <Box className={classes.textWrapper}>
          <ReportProblemOutlined
            color="primary"
            fontSize="inherit"
            style={{ fontSize: "17px" }}
          />
          <AppTypography component="h2" neutralColor={800} variant="heading">
            Successful hosting starts with a maintained calendar
          </AppTypography>
        </Box>
        <AppTypography
          neutralColor={500}
          style={{ maxWidth: "744px" }}
          variant="body"
        >
          Travelers will book available dates instantly. Keep your calendar and
          uptime settings up to date to get reservations only when you can host
          guests. Cancellations are a source of stress for travelers. If you
          cancel because your calendar is not up to date, penalties will apply
          and the dates of the canceled reservation will no longer be available.
        </AppTypography>
        <AppDivider style={{ marginTop: "32px" }} />
        <Calendar
          leftBtn={leftBtnElement}
          rightBtn={rightBtnElement}
          rootProps={{ style: { margin: "16px 0 48px 0" } }}
        />
        <ExternaliCals onAdd={() => setModal("import")}>
          {platforms?.length ? (
            <div className={classes.menuWrapper}>
              {platforms.map((icalFeed: IcalFeedValues, index: number) => (
                <ICalMenu
                  platform={icalFeed}
                  key={index}
                  onDelete={() => handleDelete(index)}
                />
              ))}
            </div>
          ) : (
            <AppTypography className={classes.text} variant="action">
              No External iCals have been added yet
            </AppTypography>
          )}
        </ExternaliCals>
      </Container>
      <AppDivider />
      <ActionButtonGroup
        secondaryBtnProps={{
          onClick: () => router.push(buildListingPath(back)),
        }}
        primaryBtnProps={{
          onClick: () => router.push(buildListingPath(next)),
        }}
        containerProps={{
          maxWidth,
          disableGutters,
        }}
      />
    </>
  );
};

export default CalendarSection;
