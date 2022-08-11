import { Container } from "@material-ui/core";
import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { Alert } from "@material-ui/lab";
import AppButton from "src/components/elements/Button";
import AppDivider from "src/components/elements/Divider";
import ImageAddIcon from "src/components/elements/icons/ImageAdd";
import AppTypography from "src/components/elements/Typography";
import ActionButtonGroup from "src/components/modules/ButtonGroup";
import { AddPropertyPhotos, PropertyPhotosUploadImage } from "./AddPhoto";
import { AddPhotoDialog } from "./Dialog";
import { EditPhotoCard, EditPropertyPhotos } from "./EditPhoto";
import { TO_ADD_LISTING_PAGE } from "src/constants";
import { useScreenSizeDown } from "src/hooks/screenSize";
import { ListingStepNavigate } from "src/types/listing";
import { useAddListingContext } from "src/context";
import { addPhoto, deletePhoto } from "src/services/api";
import { useStyles } from "./styles";

const maxFiles = 6;

const PropertyPhotos = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [subSection, setSubSection] = useState<"add" | "edit">("add");
  const [newImage, setNewImage] = useState<File | undefined>(undefined);
  const { form } = useAddListingContext();
  const { getValues, setValue } = form;

  const property = getValues();
  const photos = property.photos;
  const [propertyImages, setPropertyImages] = useState<(File | undefined)[]>(
    Array.from({ length: maxFiles })
  );
  const classes = useStyles();
  const router = useRouter();
  const isSmallSizeDown = useScreenSizeDown("xs");

  const handleAddNewImage = useCallback(() => {
    setPropertyImages((prevImages) => [...prevImages, newImage]);
    setTimeout(() => {
      setNewImage(undefined);
    }, 200);
  }, [newImage]);

  const handleDeleteImage = useCallback((image?: File) => {
    setPropertyImages((prevImages) => {
      const imageIndex = prevImages.findIndex(
        (prevImage) => prevImage?.name === image?.name
      );
      const images = [...prevImages];
      if (imageIndex !== -1) {
        setError(null);
        setLoading(true);
        images.splice(imageIndex, 1, undefined);
        // @ts-ignore:
        const photoId = photos[imageIndex].id;
        deletePhoto(photoId).then(() => {
          photos.splice(imageIndex, 1);
          setValue('photos', photos);
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

      return images;
    });
  }, []);

  const handleDeleteNewImage = useCallback(() => {
    setNewImage(undefined);
  }, []);

  const handleRemoveImage = useCallback((image?: File) => {
    setPropertyImages((prevImages) => {
      const images = prevImages?.filter(
        (prevImage) => prevImage?.name !== image?.name
      );

      if (images.length) {
        return images;
      }

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

  const onDropPhotos = useCallback(
    (acceptedFiles: File[]) => {
      const imageIndex = propertyImages.findIndex(
        (image) => image === undefined
      );

      const formData = new FormData();
      formData.set('image', acceptedFiles[0]);
      formData.set('title', 'property image');
      setError(null);
      setLoading(true);
      addPhoto(formData, property.id).then(result => {
        // @ts-ignore
        photos.push(result.data);
        setValue('photos', photos);
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

      const emptyImagesLength = 4 - (acceptedFiles.length + imageIndex);

      if (imageIndex === 0) {
        const diff = 4 - acceptedFiles.length;
        diff > 0
          ? setPropertyImages([
              ...acceptedFiles,
              ...Array.from<undefined>({ length: diff }),
            ])
          : setPropertyImages(acceptedFiles);
      }

      if (imageIndex > 0) {
        setPropertyImages((prevImages) => {
          const filteredPreviousImages = [...prevImages]?.filter(Boolean);
          const emptyImages = Array.from<undefined>({
            length: emptyImagesLength,
          });
          return [...filteredPreviousImages, ...acceptedFiles, ...emptyImages];
        });
      }
    },
    [propertyImages]
  );

  const disableGutters = isSmallSizeDown ? false : true;
  const maxWidth = "sm" as const;
  const { back, next }: ListingStepNavigate = {
    next: { section: "property-description", step: "two" },
    back: { section: "profile-photo", step: "two" },
  };

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
          Property photos
        </AppTypography>
        <AppTypography
          neutralColor={800}
          style={{ margin: "24px 0 4px 0" }}
          variant="displaySmall"
        >
          Photo tips
        </AppTypography>
        <AppTypography neutralColor={500} variant="body">
          We suggest you upload 4 photos of the different rooms and spaces
          inside and outside the accommodation.
        </AppTypography>
        <AppTypography
          neutralColor={800}
          style={{ margin: "24px 0 4px 0" }}
          variant="body"
        >
          What types of photos should I upload?
        </AppTypography>
        <AppTypography
          style={{ marginBottom: "32px" }}
          neutralColor={500}
          variant="body"
        >
          Please upload at least one photo of each part of the accommodation,
          including living room, kitchen, bedroom (s), bathroom (s), exterior
          and surroundings.
        </AppTypography>
        {subSection === "add" ? (
          <AddPropertyPhotos
            dropZoneOptions={{
              multiple: true,
              accept: "image/jpeg,image/png",
              maxFiles,
              noClick: true,
              onDrop: onDropPhotos,
            }}
          >
            {React.Children.toArray(
              propertyImages
                .slice(0, 4)
                .map((image) => (
                  <PropertyPhotosUploadImage
                    image={image}
                    onDeleteImage={handleDeleteImage}
                  />
                ))
            )}
          </AddPropertyPhotos>
        ) : (
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
                    style={{ height: isSmallSizeDown ? "224px" : "288px" }}
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
                          className={classes.singleImage}
                          onDeleteImage={() => setNewImage(undefined)}
                        />
                      </AddPropertyPhotos>
                    </AddPhotoDialog>
                    {propertyImages.length === maxFiles ? null : (
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
            </div>
          </DragDropContext>
        )}
      </Container>
      <AppDivider />
      {error && (
        <Alert severity="error" style={{ marginBottom: "24px" }}>
          {error}
        </Alert>
      )}
      <ActionButtonGroup
        secondaryBtnProps={{
          onClick:
            subSection === "edit"
              ? () => setSubSection("add")
              : () =>
                  router.push(
                    `${TO_ADD_LISTING_PAGE}/${back.step}/${back.section}`
                  ),
        }}
        primaryBtnProps={{
          disabled: propertyImages?.filter(Boolean).length < 4 || loading,
          onClick:
            subSection === "add"
              ? () => setSubSection("edit")
              : () =>
                  router.push(
                    `${TO_ADD_LISTING_PAGE}/${next.step}/${next.section}`
                  ),
        }}
        containerProps={{
          maxWidth,
          disableGutters,
        }}
      />
    </>
  );
};

export default PropertyPhotos;
