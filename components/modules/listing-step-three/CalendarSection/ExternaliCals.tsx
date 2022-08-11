import {
  Avatar,
  Box,
  IconButton,
  ListItemIcon,
  makeStyles,
  Menu,
  MenuItem,
} from "@material-ui/core";
import React, { useState } from "react";
import AppButton from "src/components/elements/Button";
import AppDivider from "src/components/elements/Divider";
import AddIcon from "src/components/elements/icons/Add";
import DeleteBinIcon from "src/components/elements/icons/DeleteBin";
import MoreVerticalIcon from "src/components/elements/icons/MoreVertical";
import PencilIcon from "src/components/elements/icons/Pencil";
import AppTypography from "src/components/elements/Typography";
import { IcalFeedValues } from "src/types";
import DeleteDialog from "./DeleteDialog";

const useStyles = makeStyles(
  ({ breakpoints }) => ({
    addBtn: {
      padding: "4px 12px",
      [breakpoints.down("xs")]: {
        padding: "8px 32px",
      },
    },
  }),
  { index: 1 }
);

const useIcalMenuStyles = makeStyles(
  ({ breakpoints, palette, shape }) => ({
    root: {
      alignItems: "center",
      background: palette.grey[100],
      borderRadius: "8px",
      display: "flex",
      gap: "24px",
      height: "48px",
      padding: "4px",
      [breakpoints.down("xs")]: {
        gap: "12px",
      },
    },
    avatar: {
      height: "32px",
      width: "32px",
    },
    iconBtn: {
      borderRadius: shape.borderRadius,
      background: palette.background.paper,
      height: "40px",
      padding: "8px",
      width: "40px",
    },
    link: {
      flexGrow: 1,
    },
    listItemIcon: {
      alignItems: "center",
      height: "24px",
      minWidth: "24px",
      justifyContent: "center",
    },
    menuItem: {
      alignItems: "center",
      display: "flex",
      gap: "12px",
      height: "40px",
      padding: "8px 20px",
      width: "168px",
    },
    platform: {
      alignItems: "center",
      borderRadius: "4px",
      background: palette.background.paper,
      display: "flex",
      gap: "16px",
      padding: "4px 16px 4px 4px",
    },
  }),
  { index: 1 }
);

const getPlatformImage = (value: string) => {
  if (value === "Other Calendar") {
    return "/images/other-calendar-logo.png";
  }
  return `/images/${value.toLocaleLowerCase()}-logo.png`;
};

export const ExternaliCals = ({ children, onAdd }: any) => {
  const classes = useStyles();
  return (
    <div>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <AppTypography neutralColor={800} variant="displaySmall">
          External iCals
        </AppTypography>
        <AppButton
          className={classes.addBtn}
          startIcon={<AddIcon style={{ fontSize: "12px" }} />}
          variant="outlined"
          onClick={onAdd}
        >
          Add
        </AppButton>
      </Box>
      <AppDivider style={{ margin: "24px 0" }} />
      {children}
    </div>
  );
};

interface ICalMenuProps {
  platform: IcalFeedValues;
  onDelete: () => void;
}

const menuItems = [
  {
    label: "Edit",
    icon: <PencilIcon />,
  },
  {
    label: "Delete",
    icon: <DeleteBinIcon />,
  },
];

export const ICalMenu: React.FC<ICalMenuProps> = ({ platform, onDelete }) => {
  const classes = useIcalMenuStyles();
  const [anchorElement, setAnchorElement] = useState<HTMLElement | null>(null);
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    onDelete();
    setOpen(false);
  };

  const handleOpen = () => {
    setAnchorElement(null);
    setOpen(true);
  };

  const image = getPlatformImage(platform.type);

  return (
    <>
      <DeleteDialog
        open={open}
        onClose={() => setOpen(false)}
        onDelete={handleDelete}
        subTitle="If you decide to delete it, you will lose any changes made during it."
        title="Are you sure you want to delete external iCals?"
      />
      <Menu
        id="action-menu"
        anchorEl={anchorElement}
        keepMounted
        open={Boolean(anchorElement)}
        onClose={() => setAnchorElement(null)}
        transformOrigin={{
          horizontal: "center",
          vertical: 100,
        }}
      >
        {React.Children.toArray(
          menuItems.map(({ label, icon }, index) => (
            <MenuItem
              button
              onClick={index === 1 ? handleOpen : undefined}
              className={classes.menuItem}
            >
              <ListItemIcon className={classes.listItemIcon}>
                {icon}
              </ListItemIcon>
              <AppTypography neutralColor={500} variant="action">
                {label}
              </AppTypography>
            </MenuItem>
          ))
        )}
      </Menu>
      <div className={classes.root}>
        <div className={classes.platform}>
          <Avatar
            className={classes.avatar}
            src={image}
            variant="rounded"
          />
          <AppTypography neutralColor={800} variant="action">
            {platform.name}
          </AppTypography>
        </div>
        <AppTypography
          className={classes.link}
          neutralColor={500}
          variant="action"
        >
          {platform.url}
        </AppTypography>
        <IconButton
          onClick={(e) => setAnchorElement(e.currentTarget)}
          className={classes.iconBtn}
        >
          <MoreVerticalIcon color="action" style={{ fontSize: "20px" }} />
        </IconButton>
      </div>
    </>
  );
};
