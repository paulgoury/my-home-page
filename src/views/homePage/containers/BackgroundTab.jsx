import { useCallback, useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import {
  IconButton,
  InputAdornment,
  TextField,
  ImageListItem,
  ImageListItemBar,
  Paper,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ImageList from "@mui/material/ImageList";
import InfoIcon from "@mui/icons-material/Info";
import CircularProgress from "@mui/material/CircularProgress";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import WallpaperRoundedIcon from "@mui/icons-material/WallpaperRounded";
import { useSnackbar } from "notistack";

import { CustomPagination } from "../components";
import { SettingsContext, useActions } from "../../../tools";
import { getUnsplashImages } from "../utils";

import deletePhotosMock from "./photosMock.json";

import styles from "./styles/backgroundTab.module.css";

function BackgroundTab() {
  const { state } = useContext(SettingsContext);
  const { register, handleSubmit } = useForm();

  const { enqueueSnackbar } = useSnackbar();
  const {
    setBackgroundImage,
    addToFavoriteImages,
    removeImageFromFavoriteImages,
  } = useActions();

  // const [gallery, setGallery] = useState(deletePhotosMock);
  const [gallery, setGallery] = useState(null);
  const [page, setPage] = useState(1);
  const [input, setInput] = useState("");

  useEffect(() => {
    setGallery(null);
    setInput("");
  }, [state.isVisibleWidgetsMenu]);

  const onSubmit = async (data) => {
    const photos = await getUnsplashImages({ page: page, query: data.query });
    setGallery(photos.response.total !== 0 ? photos : null);
    setInput(data.query);
  };

  const handleClickInfo = ({ authorUrl }) => {
    window.open(authorUrl);
  };

  const handleClickFavorite = useCallback(
    ({ imageSrc, imageAlt, imageUserName, imageUserMedia }) => {
      const favoriteImage = state.images.favoriteImages.find(
        (e) => e.src === imageSrc
      );
      favoriteImage !== undefined
        ? removeImageFromFavoriteImages({
            favoriteImageCode: favoriteImage.code,
          })
        : addToFavoriteImages({
            imageSrc,
            imageAlt,
            imageUserName,
            imageUserMedia,
          });
    },
    [
      addToFavoriteImages,
      removeImageFromFavoriteImages,
      state.images.favoriteImages,
    ]
  );

  const handleClickModify = ({
    imageSrc,
    imageAlt,
    imageUserName,
    imageUserMedia,
  }) => {};

  const displayImageIcons = ({
    imageSrc,
    imageAlt,
    imageUserName,
    imageUserMedia,
  }) => {
    return (
      <>
        <IconButton
          onClick={() =>
            handleClickInfo({
              authorUrl: imageUserMedia,
            })
          }
        >
          <InfoIcon />
        </IconButton>
        <IconButton
          onClick={() =>
            handleClickFavorite({
              imageSrc: imageSrc,
              imageAlt: imageAlt,
              imageUserName: imageUserName,
              imageUserMedia: imageUserMedia,
            })
          }
        >
          {state.images.favoriteImages.find((e) => e.src === imageSrc) !==
          undefined ? (
            <FavoriteRoundedIcon />
          ) : (
            <FavoriteBorderRoundedIcon />
          )}
        </IconButton>
        <IconButton
          onClick={() =>
            handleClickModify({
              imageSrc: imageSrc,
              imageAlt: imageAlt,
              imageUserName: imageUserName,
              imageUserMedia: imageUserMedia,
            })
          }
        >
          <AutoFixHighRoundedIcon />
        </IconButton>
        <IconButton
          onClick={() => {
            setBackgroundImage({ backgroundImage: imageSrc });
          }}
        >
          <WallpaperRoundedIcon />
        </IconButton>
      </>
    );
  };

  const displayPhotos = () => {
    return gallery?.response?.results?.map((item, index) => {
      return (
        <ImageListItem key={index}>
          <img src={item.urls.full} alt={item.alt_description} />
          <ImageListItemBar
            subtitle={item.user.name}
            actionIcon={displayImageIcons({
              imageSrc: item.urls.full,
              imageAlt: item.alt_description,
              imageUserName: item.user.name,
              imageUserMedia: item.user.portfolio_url,
            })}
          />
        </ImageListItem>
      );
    });
  };

  const displayFavoriteImages = () => {
    return state.images.favoriteImages.map((item, index) => {
      return (
        <ImageListItem key={index}>
          <img src={item.src} alt={item.alt} />
          <ImageListItemBar
            subtitle={item.userName}
            actionIcon={displayImageIcons({
              imageSrc: item.src,
              imageAlt: item.alt,
              imageUserName: item.userName,
              imageUserMedia: item.userMedia,
            })}
          />
        </ImageListItem>
      );
    });
  };

  const handlePagination = async (event, value) => {
    const photos = await getUnsplashImages({ page: value, query: input });
    setPage(value);
    setGallery(photos);
  };

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register("query")}
            placeholder="Buscar fotos..."
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton type="submit">
                    <SearchIcon
                      color={gallery !== null ? "primary" : "white"}
                    />
                  </IconButton>
                  <IconButton onClick={() => setGallery(null)}>
                    <FavoriteBorderRoundedIcon
                      color={gallery !== null ? "white" : "primary"}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </form>
      </div>
      <Paper variant="tabContent" className={styles.paperContainer}>
        <div className={styles.imageList}>
          <ImageList cols={3} gap={8}>
            {gallery !== null ? displayPhotos() : displayFavoriteImages()}
          </ImageList>
        </div>
      </Paper>
      <div className={styles.footer}>
        <CustomPagination
          isVisible={gallery !== null}
          pages={gallery?.response?.total_pages}
          page={page}
          handleChange={handlePagination}
        />
      </div>
    </div>
  );
}

export default BackgroundTab;
