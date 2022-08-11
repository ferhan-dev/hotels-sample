import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Controller } from "react-hook-form";
import { Container } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import AppDivider from "src/components/elements/Divider";
import AddIcon from "src/components/elements/icons/Add";
import EditIcon from "src/components/elements/icons/Edit";
import AppSelect from "src/components/elements/Select";
import AppTypography from "src/components/elements/Typography";
import ActionButtonGroup from "src/components/modules/ButtonGroup";
import Counter from "src/components/modules/Counter";
import CounterGroup from "src/components/modules/CounterGroup";
import { useAddListingContext } from "src/context";
import { useScreenSizeDown } from "src/hooks/screenSize";
import { FormOption } from "src/types/form";
import { ListingStepNavigate } from "src/types/listing";
import { buildListingPath } from "src/utils";
import { updateProperties } from "src/services/api/listingForm";
import { useStyles } from "./styles";

const options: FormOption[] = Array.from({ length: 10 }).map((_, index) => {
  const value = index + 1;
  return { value, label: value };
});

const { back, next }: ListingStepNavigate = {
  next: { section: "customer-expectations-and-security", step: "one" },
  back: { section: "address", step: "one" },
};

const Guests: React.FC = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { form } = useAddListingContext();
  const { control, getValues, setValue, watch, unregister }: any = form;

  const classes = useStyles();
  const router = useRouter();
  const isSmallSizeDown = useScreenSizeDown("sm");

  const disableGutters = isSmallSizeDown ? false : true;
  const maxWidth = "sm" as const;

  const numberOfRooms = watch("number_of_rooms", 0);
  const rooms = watch("rooms");
  const disabled = !watch(["number_of_rooms", "maximum_guests"]).every(Boolean) || loading;

  const roomsHandler = (count: any) => {
    setValue("number_of_rooms", count);

    const rooms = getValues("rooms");

    if (count > rooms?.length) {
      setValue(`rooms.${count - 1}`, { name: "room" });
    }

    if (count < rooms?.length) {
      const updatedRooms = rooms?.filter(
        (_: any, index: any) => index + 1 <= count
      );
      unregister("rooms");
      setValue("rooms", updatedRooms);
    }
  };

  const onNext = () => {
    setError(null);
    setLoading(true);
    const property = getValues();
    updateProperties(property, property.id).then(() => {
      router.push({
        pathname: buildListingPath(next),
      });
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
 
  useEffect(() => {
    let beds = 0;

    rooms.forEach((room: any) => {
      if (room.sleeping_types) {
        const currRoomBeds: any = Object.values(room.sleeping_types).reduce(
          (acc: any, curr: any) => {
            if (Number.isFinite(curr)) {
              return acc + curr;
            } else {
              return acc;
            }
          },
          0
        );

        beds += currRoomBeds;
      }
    });
    
    setValue("number_of_beds", beds);
  });

  return (
    <>
      <Container
        disableGutters={disableGutters}
        maxWidth={maxWidth}
        className={classes.root}
      >
        <AppTypography
          component="h2"
          neutralColor={900}
          variant="displayMedium"
        >
          Guests
        </AppTypography>
        <Controller
          name="maximum_guests"
          control={control}
          render={({
            field: { ref, value, ...others },
            fieldState: { error },
          }) => (
            <AppSelect
              label="Maximum number of guests"
              placeholder="Choose max. number of guests"
              withLabel
              options={options}
              {...others}
              inputRef={ref}
              value={value ? value : ""}
              error={Boolean(error)}
              message={error?.message}
            />
          )}
        />
        <AppDivider />
        <Controller
          name="number_of_rooms_bath"
          control={control}
          render={({
            field: { value, onBlur, onChange },
            fieldState: { error },
          }) => (
            <Counter
              label="How many rooms do we find bath?"
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              error={Boolean(error)}
              message={error?.message}
            />
          )}
        />
        <AppDivider />
        <Controller
          name="number_of_rooms"
          control={control}
          render={({ field: { value, onBlur }, fieldState: { error } }) => (
            <Counter
              label="Number of Rooms"
              value={value}
              onBlur={onBlur}
              onChange={roomsHandler}
              error={Boolean(error)}
              message={error?.message}
            />
          )}
        />
        {React.Children.toArray(
          Array.from({ length: numberOfRooms }).map((_, index) => (
            <CounterGroup
              btnProps={{
                startIcon: rooms[index].sleeping_types ? (
                  <EditIcon style={{ fontSize: "17px" }} />
                ) : (
                  <AddIcon style={{ fontSize: "17px" }} />
                ),
                children: `${
                  rooms[index].sleeping_types ? "Edit" : "Add Beds"
                }`,
              }}
              label={
                rooms[index].sleeping_types
                  ? rooms[index].name
                  : `Number of beds for Room ${index + 1}`
              }
              info=" beds"
              dialogTitle={`Room ${index + 1}`}
              id={index}
            />
          ))
        )}

        <AppDivider />
        <Controller
          name="number_of_open_concept_rooms"
          control={control}
          render={({
            field: { value, onBlur, onChange },
            fieldState: { error },
          }) => (
            <Counter
              label="Number of open concept rooms"
              value={value}
              optional
              onBlur={onBlur}
              onChange={onChange}
              error={Boolean(error)}
              message={error?.message}
            />
          )}
        />
      </Container>
      <AppDivider />
      {error && (
        <Alert severity="error" style={{ marginBottom: "24px" }}>
          {error}
        </Alert>
      )}
      <ActionButtonGroup
        secondaryBtnProps={{
          onClick: () => router.push(buildListingPath(back)),
        }}
        primaryBtnProps={{
          disabled,
          onClick: onNext
        }}
        containerProps={{
          maxWidth,
          disableGutters,
        }}
      />
    </>
  );
};

export default Guests;
