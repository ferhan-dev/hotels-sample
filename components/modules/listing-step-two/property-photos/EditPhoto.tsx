import { Avatar, AvatarProps, Box, Grid, IconButton } from "@material-ui/core";
import React, { useCallback, useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import CloseIcon from "src/components/elements/icons/Close";
import DragMoveToLineIcon from "src/components/elements/icons/DragMoveToLine";
import ImageAddIcon from "src/components/elements/icons/ImageAdd";
import PencilIcon from "src/components/elements/icons/Pencil";
import AppTypography from "src/components/elements/Typography";
import { palette } from "src/components/foundation/palette";
import { DeletePhotoDialog } from "./Dialog";
import { useEditPhotoStyles } from "./styles";

interface Props {
  bottom: React.ReactNode;
  children: React.ReactNode[];
  top: React.ReactNode;
}

export const EditPropertyPhotos: React.FC<Props> = ({
  bottom,
  children,
  top,
}) => {
  const classes = useEditPhotoStyles();
  return (
    <>
      {top}
      <AppTypography variant="displaySmall" component="h2">
        Secondary photos
      </AppTypography>
      <Grid container className={classes.gridContainer} spacing={3}>
        {React.Children.toArray(
          children.map((imageNode) => (
            <Grid item sm={6} xs={12}>
              {imageNode}
            </Grid>
          ))
        )}
      </Grid>
      {bottom}
    </>
  );
};

interface CardProps extends AvatarProps {
  index: number;
  label: string;
  image?: File;
  onEditImage: (image: File, index: number) => void;
  onDeleteImage: (image?: File) => void;
  onReorderImage?: (image?: File) => void;
}

export const EditPhotoCard: React.FC<CardProps> = ({
  index,
  label,
  image,
  onDeleteImage,
  onEditImage,
  onReorderImage,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const classes = useEditPhotoStyles();

  const handleChange = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      target.files && onEditImage(target.files[0], index);
    },
    []
  );

  const inputElement = (
    <input
      type="file"
      className={classes.input}
      accept="image/jpeg,image/png"
      onChange={handleChange}
    />
  );
  return (
    <>
      <DeletePhotoDialog
        open={open}
        onClose={() => setOpen(false)}
        onDelete={() => onDeleteImage(image)}
      />
      <Droppable droppableId={`${index}`}>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            <Draggable index={index} draggableId={`${index}`}>
              {(provided) => (
                <div ref={provided.innerRef} {...provided.draggableProps}>
                  <AppTypography variant="action">{label}</AppTypography>
                  <Avatar
                    className={classes.image}
                    variant="rounded"
                    {...props}
                    src={image && URL.createObjectURL(image)}
                  >
                    {image ? null : inputElement}
                    <ImageAddIcon />
                  </Avatar>
                  <Box className={classes.iconBtnWrapper}>
                    <IconButton
                      {...provided.dragHandleProps}
                      className={classes.iconBtn}
                    >
                      <DragMoveToLineIcon
                        style={{
                          color: palette.grey?.[900],
                          fontSize: "16.5px",
                        }}
                      />
                    </IconButton>
                    <IconButton className={classes.iconBtn}>
                      {inputElement}
                      <PencilIcon
                        color="primary"
                        style={{ fontSize: "18px" }}
                      />
                    </IconButton>
                    <IconButton
                      onClick={() => setOpen(true)}
                      className={classes.iconBtn}
                    >
                      <CloseIcon color="error" style={{ fontSize: "16.6px" }} />
                    </IconButton>
                  </Box>
                </div>
              )}
            </Draggable>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </>
  );
};
