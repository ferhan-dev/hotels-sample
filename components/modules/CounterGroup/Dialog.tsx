import { Box } from "@material-ui/core";
import React, { useState } from "react";
import AppButton from "src/components/elements/Button";
import AppDialog from "src/components/elements/Dialog";
import AppDivider from "src/components/elements/Divider";
import CloseIcon from "src/components/elements/icons/Close";
import AppSelect from "src/components/elements/Select";
import AppTextField from "src/components/elements/TextField";
import AppTypography from "src/components/elements/Typography";
import { FormOption } from "src/types/form";
import Counter from "../Counter";
import { useDialogStyles } from "./styles";
import { useAddListingContext } from "src/context";
import { addRoomsData, updateRoomsData } from "../../../services/api/room";

interface Props {
  title: string;
  open: boolean;
  onClose: () => void;
  id: number;
  setBedCount?: (bed: number) => void;
}

const options: FormOption[] = [
  {
    label: "Simple",
    value: "Simple",
  },
  {
    label: "Double",
    value: "Double",
  },
  {
    label: "Queen",
    value: "Queen",
  },
  {
    label: "King",
    value: "King",
  },
  {
    label: "Divan-lit",
    value: "Divan-lit",
  },
  {
    label: "Bunk bed",
    value: "Bunk bed",
  },
  {
    label: "Divan",
    value: "Divan",
  },
  {
    label: "Inflatable Mattress",
    value: "Inflatable Mattress",
  },
];

const CounterGroupDialog: React.FC<Props> = ({
  title,
  open,
  onClose,
  id,
  setBedCount,
}: any) => {
  const classes = useDialogStyles();
  const { form } = useAddListingContext();
  const { setValue, getValues } = form;
  const property = getValues();
  const rooms = property.rooms;

  const [roomData, setRoomData]: any = useState(rooms[id]);

  const handleSave = () => {
    const beds = Object.values(roomData.sleeping_types).reduce(
      (acc: any, curr: any) => {
        if (Number.isFinite(curr)) {
          return acc + curr;
        } else {
          return acc;
        }
      },
      0
    );

    setBedCount(beds);
    if (roomData.id) {
      updateRoomsData({...roomData})
        .then(result => {
          setValue(`rooms.${id}`, result.data);
        });
    } else {
      addRoomsData({...roomData, propertyId: property.id})
        .then(result => {
          setValue(`rooms.${id}`, result.data);
        });
    }
    onClose();
  };

  const roomSleepingTypesHandler = (name: string, count: number) => {
    if (count > 0) {
      setRoomData({
        ...roomData,
        sleeping_types: {
          ...roomData.sleeping_types,
          [name]: count,
        },
      });
    }

    if (count < 1) {
      const sleeping_types: any = { ...roomData.sleeping_types };
      delete sleeping_types[name];
      setRoomData({
        ...roomData,
        sleeping_types: {
          ...sleeping_types,
        },
      });
    }
  };

  return (
    <AppDialog classes={{ paper: classes.paper }} maxWidth="sm" open={open}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <AppTypography variant="displaySmall">{title}</AppTypography>
        <CloseIcon onClick={onClose} />
      </Box>
      <AppDivider />
      <AppTextField
        label="Room Name"
        name="name"
        placeholder="Living room"
        onChange={(e) => setRoomData({ ...roomData, name: e.target.value })}
        value={roomData.name}
      />
      <Counter
        optional
        label="King size"
        value={roomData.sleeping_types ? (roomData.sleeping_types["King size"] || 0) : 0}
        onChange={(count) => roomSleepingTypesHandler("King size", count)}
      />
      <Counter
        optional
        label="Queen size"
        value={roomData.sleeping_types ? (roomData.sleeping_types["Queen size"] || 0) : 0}
        onChange={(count) => roomSleepingTypesHandler("Queen size", count)}
      />
      <Counter
        optional
        label="Bunk beds"
        value={roomData.sleeping_types ? (roomData.sleeping_types["Bunk beds"] || 0) : 0}
        onChange={(count) => roomSleepingTypesHandler("Bunk beds", count)}
      />
      <Counter
        optional
        label="Sleeping mattress"
        value={roomData.sleeping_types ? (roomData.sleeping_types["Sleeping mattress"] || 0) : 0}
        onChange={(count) =>
          roomSleepingTypesHandler("Sleeping mattress", count)
        }
      />
      <Counter
        optional
        label="Sofa bed"
        value={roomData.sleeping_types ? (roomData.sleeping_types["Sofa bed"] || 0): 0}
        onChange={(count) => roomSleepingTypesHandler("Sofa bed", count)}
      />
      <Counter
        optional
        label="Couch"
        value={roomData.sleeping_types ? (roomData.sleeping_types["Couch"] || 0) : 0}
        onChange={(count) => roomSleepingTypesHandler("Couch", count)}
      />
      <AppSelect
        label="Sleeping type"
        name="rooms"
        options={options}
        optional
        placeholder="Select sleeping type"
        withLabel
        value={roomData.sleeping_types?.category || undefined}
        onChange={(e) =>
          setRoomData({
            ...roomData,
            sleeping_types: {
              ...roomData.sleeping_types,
              category: e.target.value,
            },
          })
        }
      />
      <AppButton
        color="primary"
        fullWidth
        onClick={handleSave}
        variant="contained"
      >
        Save the room
      </AppButton>
    </AppDialog>
  );
};

export default CounterGroupDialog;
