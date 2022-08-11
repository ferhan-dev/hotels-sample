import React from "react";
import { useStyles } from "./styles";
// import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useScreenSizeDown } from "src/hooks";
import AppButton from "src/components/elements/Button";
import ImageAddIcon from "src/components/elements/icons/ImageAdd";
import {
  AddPropertyPhotos,
  PropertyPhotosUploadImage,
} from "src/components/modules/listing-step-two/property-photos/AddPhoto";
import { AddPhotoDialog } from "src/components/modules/listing-step-two/property-photos/Dialog";
import {
  EditPhotoCard,
  EditPropertyPhotos,
} from "src/components/modules/listing-step-two/property-photos/EditPhoto";
import { Box, Container, Avatar, Typography, Grid } from "@material-ui/core";
interface Props {
  setEditvalue?: any;
}

const maxFiles = 6;

const Photo: React.FC<Props> = ({ setEditvalue }) => {
  // const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [setSubSection]: any = useState<"add" | "edit">("add");
  const [newImage, setNewImage] = useState<File | undefined>(undefined);
  const [propertyImages, setPropertyImages] = useState<(File | undefined)[]>(
    Array.from({ length: maxFiles })
  );
  const classes = useStyles();
  // const router = useRouter();
  const isSmallSizeDown = useScreenSizeDown("xs");

  const handleAddNewImage = useCallback(() => {
    setPropertyImages((prevImages) => [...prevImages, newImage]);
    setTimeout(() => {
      setNewImage(undefined);
    }, 200);
  }, [newImage]);

  const handleDeleteNewImage = useCallback(() => {
    setNewImage(undefined);
  }, []);

  const handleRemoveImage = useCallback((image?: File) => {
    setPropertyImages((prevImages) => {
      const images = prevImages?.filter(
        (prevImage) => prevImage?.name !== image?.name
      );

      if (images.length) return images;

      setSubSection("add");
      return Array.from({ length: 4 });
    });
  }, []);

  const handleEditImage = useCallback((image: File, index: number) => {
    setPropertyImages((prevImages) => {
      const images = [...prevImages];
      images[index] = image;

      return images;
    });
  }, []);

  const onDragEnd = useCallback(({ destination, source }: DropResult) => {
    const sourceIndex = source.index;
    const destinationIndex = destination?.index;
    setPropertyImages((prevImages) => {
      if (destinationIndex) {
        const images = [...prevImages] as (File | undefined)[];
        [images[sourceIndex], images[destinationIndex]] = [
          images[destinationIndex],
          images[sourceIndex],
        ];
        return images;
      }
      return prevImages;
    });
  }, []);

  const onDropPhoto = useCallback((acceptedFiles: File[]) => {
    setNewImage(acceptedFiles[0]);
  }, []);

  // const onDropPhotos = useCallback(
  //   (acceptedFiles: File[]) => {
  //     const imageIndex = propertyImages.findIndex(
  //       (image) => image === undefined
  //     );
  //     const emptyImagesLength = 4 - (acceptedFiles.length + imageIndex);

  //     if (imageIndex === 0) {
  //       const diff = 4 - acceptedFiles.length;
  //       diff > 0
  //         ? setPropertyImages([
  //             ...acceptedFiles,
  //             ...Array.from<undefined>({ length: diff }),
  //           ])
  //         : setPropertyImages(acceptedFiles);
  //     }

  //     if (imageIndex > 0) {
  //       setPropertyImages((prevImages) => {
  //         const filteredPreviousImages = [...prevImages]?.filter(Boolean);
  //         const emptyImages = Array.from<undefined>({
  //           length: emptyImagesLength,
  //         });
  //         return [...filteredPreviousImages, ...acceptedFiles, ...emptyImages];
  //       });
  //     }
  //   },
  //   [propertyImages]
  // );

  //     if (imageIndex > 0) {
  //       setPropertyImages((prevImages) => {
  //         const filteredPreviousImages = [...prevImages]?.filter(Boolean);
  //         const emptyImages = Array.from<undefined>({
  //           length: emptyImagesLength,
  //         });
  //         return [...filteredPreviousImages, ...acceptedFiles, ...emptyImages];
  //       });
  //     }
  //   },
  //   [propertyImages]
  // );
  return (
    <div>
      <Box className={classes.personalInfo} onClick={() => setEditvalue("")}>
        <Container className={classes.container}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            style={{ paddingBottom: "25px" }}
          >
            <Box display="flex" alignItems="center">
              <Avatar
                src={"/images/leftArrow.png"}
                className={classes.leftArrow}
              />
              <Typography variant="h6">Photos</Typography>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box>
        <Container className={classes.container}>
          <Grid className={classes.photosGalleryMain}>
            <Grid item sm={12} md={7} lg={7}>
              <Box className={classes.photosGallery}>
                {/* <Box>
                  <Typography
                    variant="h6"
                    className={classes.photosGalleryTitle}
                  >
                    Name of the Photo
                  </Typography>
                  <Box>
                    <Avatar
                      src={"/images/photoFrame.png"}
                      className={classes.photoFrame}
                    />
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="flex-end"
                    >
                      <Box
                        className={classes.photoMove}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Avatar src={"/images/move.png"} />
                      </Box>
                      <Box
                        className={classes.photoMove}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Avatar src={"/images/editGreen.png"} />
                      </Box>
                      <Box
                        className={classes.photoMove}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Avatar src={"/images/closeRed.png"} />
                      </Box>
                    </Box>
                  </Box>
                </Box> */}
                <DragDropContext onDragEnd={onDragEnd}>
                  <div>
                    <EditPropertyPhotos
                      top={
                        <EditPhotoCard
                          index={0}
                          label="Name of the Photo"
                          onDeleteImage={handleRemoveImage}
                          onEditImage={handleEditImage}
                          image={propertyImages[0]}
                          style={{
                            height: isSmallSizeDown ? "224px" : "288px",
                          }}
                        />
                      }
                      children={propertyImages.slice(1).map((image, index) => (
                        <EditPhotoCard
                          key={index + 1}
                          index={index + 1}
                          label={`Photo ${index + 1}`}
                          onDeleteImage={handleRemoveImage}
                          onEditImage={handleEditImage}
                          image={image}
                          style={{
                            height: isSmallSizeDown ? "200px" : "144px",
                          }}
                        />
                      ))}
                      bottom={
                        <>
                          <AddPhotoDialog
                            onAddNewImage={handleAddNewImage}
                            onDeleteNewImage={handleDeleteNewImage}
                            open={open}
                            image={newImage}
                            onClose={() => setOpen(false)}
                          >
                            <AddPropertyPhotos
                              dropZoneOptions={{
                                accept: "image/jpeg,image/png",
                                noClick: true,
                                maxFiles: 1,
                                onDrop: onDropPhoto,
                              }}
                            >
                              <PropertyPhotosUploadImage
                                image={newImage}
                                // className={classes.singleImage}
                                onDeleteImage={() => setNewImage(undefined)}
                              />
                            </AddPropertyPhotos>
                          </AddPhotoDialog>
                          {propertyImages.length !== maxFiles ? null : (
                            <AppButton
                              fullWidth
                              onClick={() => setOpen(true)}
                              startIcon={<ImageAddIcon />}
                              style={{ height: "44px" }}
                              variant="outlined"
                            >
                              New Image
                            </AppButton>
                          )}
                        </>
                      }
                    />
                    {/* {provided.placeholder} */}
                  </div>
                  {/* )} */}
                </DragDropContext>
                <Box>
                  <Grid className={classes.secondaryPhoto}>
                    <Grid item xs={12} sm={6}>
                      {/* <Typography
                          variant="h6"
                          className={classes.photosGalleryTitle}
                        >
                          Photo 1
                        </Typography> */}
                      {/* <Avatar
                            src={"/images/photoFrame.png"}
                            className={classes.photoFrames}
                          /> */}

                      {/* <Box
                              className={classes.photoMove}
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                            >
                              <Avatar src={"/images/move.png"} />
                            </Box> */}
                      {/* <Box
                              className={classes.photoMove}
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                            >
                              <Avatar src={"/images/editGreen.png"} />
                            </Box> */}
                      {/* <Box
                              className={classes.photoMove}
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                            >
                              <Avatar src={"/images/closeRed.png"} />
                            </Box> */}
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
            <Grid item sm={12} md={5} lg={5} className={classes.photosTipMain}>
              <Box>
                <Box display="flex" alignItems="center">
                  <Avatar
                    src={"/images/photoTip.png"}
                    className={classes.photoTip}
                  />
                  <Typography variant="h6" className={classes.tipsTitle}>
                    Photo Tips
                  </Typography>
                </Box>
                <Box className={classes.photosTipDetail}>
                  <Typography variant="h6">
                    What should the photos contain?
                  </Typography>
                  <Typography>
                    We suggest you upload 4 photos of the different rooms and
                    spaces inside and outside the accommodation.
                  </Typography>
                </Box>
                <Box className={classes.photosTipDetail}>
                  <Typography variant="h6">
                    What types of photos should I upload?
                  </Typography>
                  <Typography>
                    Please upload at least one photo of each part of the
                    accommodation, including living room, kitchen, bedroom (s),
                    bathroom (s), exterior and surroundings.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};
export default Photo;
