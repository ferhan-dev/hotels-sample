import { Avatar, AvatarProps, Box, IconButton } from "@material-ui/core";
import React from "react";
import { DropzoneOptions, useDropzone } from "react-dropzone";
import CloseIcon from "src/components/elements/icons/Close";
import AppTypography from "src/components/elements/Typography";
import { palette } from "src/components/foundation/palette";
import { useScreenSizeDown } from "src/hooks/screenSize";
import { useAddPhotoStyles } from "./styles";

interface Props {
  dropZoneOptions?: DropzoneOptions;
}

export const AddPropertyPhotos: React.FC<Props> = ({
  children,
  dropZoneOptions,
}) => {
  const classes = useAddPhotoStyles();
  const isSmallSizeDown = useScreenSizeDown("xs");

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    ...dropZoneOptions,
  });

  return (
    <Box
      {...getRootProps({
        className: classes.root,
        style: { background: isDragActive ? palette.grey?.[100] : undefined },
      })}
    >
      <Box className={classes.imagesWrapper}>{children}</Box>
      <AppTypography
        className={classes.text}
        variant="action"
        neutralColor={600}
      >
        {isSmallSizeDown ? (
          "Upload Images"
        ) : (
          <>
            Drag your images here, or{" "}
            <AppTypography
              style={{ position: "relative" }}
              component="span"
              variant="action"
              color="primary"
            >
              <input
                {...getInputProps({
                  className: classes.input,
                  style: { display: "initial" },
                })}
              />
              browse
            </AppTypography>
          </>
        )}
      </AppTypography>
      <AppTypography
        className={classes.text}
        variant="subHeading"
        neutralColor={400}
      >
        SUPPORTS: PNG, JPG
      </AppTypography>
    </Box>
  );
};

interface ImageProps extends AvatarProps {
  image?: File;
  onDeleteImage: (image?: File) => void;
}
export const PropertyPhotosUploadImage: React.FC<ImageProps> = ({
  image,
  src,
  style,
  className,
  onDeleteImage,
  ...props
}) => {
  const classes = useAddPhotoStyles();

  return (
    <Box padding="8px" className={className} style={style} position="relative">
      {image ? (
        <IconButton
          onClick={() => onDeleteImage(image)}
          className={classes.iconBtn}
        >
          <CloseIcon color="inherit" style={{ fontSize: "11px" }} />
        </IconButton>
      ) : null}
      <Avatar
        className={classes.avatar}
        variant="rounded"
        src={image ? URL.createObjectURL(image) : undefined}
        {...props}
      >
        <Avatar
          className={classes.logo}
          src="/images/grey-logo.png"
          variant="square"
        ></Avatar>
      </Avatar>
    </Box>
  );
};
