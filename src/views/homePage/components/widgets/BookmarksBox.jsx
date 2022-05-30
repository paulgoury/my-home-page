import { useContext, useEffect, useState } from "react";

import { Paper, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CircularProgress from "@mui/material/CircularProgress";
import { useSnackbar } from "notistack";

import { SettingsContext, useActions } from "../../tools";
import { CustomIconButton, BookmarkBox, CustomDialog } from "../";
import { getUrlData } from "../../utils";

import styles from "../styles/bookmarksBox.module.css";

const initialBookmarkBoxData = {
  bookmarkBoxName: "",
  bookmarkBoxLink: "",
  bookmarkBoxImageSrc: "",
  bookmarkBoxDisplay: "",
};

function BookmarksBox() {
  const { enqueueSnackbar } = useSnackbar();

  const { state } = useContext(SettingsContext);
  const { addBookmarkBox, changeEditableMainGrid } = useActions();

  const [open, setOpen] = useState(false);
  const [bookmarkBoxData, setBookmarkBoxData] = useState(
    initialBookmarkBoxData
  );

  const { getHost } = getUrlData({ link: bookmarkBoxData.bookmarkBoxLink });
  const imageSrc = `https://api.faviconkit.com/${getHost()}/64`;

  useEffect(() => {
    changeEditableMainGrid();

    return setBookmarkBoxData(initialBookmarkBoxData);
  }, [changeEditableMainGrid, open]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAccept = () => {
    if (
      bookmarkBoxData.bookmarkBoxName !== "" &&
      bookmarkBoxData.bookmarkBoxLink !== ""
    ) {
      if (bookmarkBoxData.bookmarkBoxDisplay !== "") {
        addBookmarkBox(bookmarkBoxData);
        setOpen(false);
        enqueueSnackbar("Marcador añadido con éxito", {
          variant: "success",
        });
      } else {
        enqueueSnackbar("Seleccione una vista para el marcador", {
          variant: "error",
        });
      }
    } else {
      enqueueSnackbar("Debe rellenar todos los campos", {
        variant: "error",
      });
    }
  };

  const handleClickBookmarkBoxDisplay = ({ bookmarkBoxDisplay }) => {
    setBookmarkBoxData({
      ...bookmarkBoxData,
      bookmarkBoxDisplay: bookmarkBoxDisplay,
      bookmarkBoxImageSrc: imageSrc,
    });
  };

  const handleInputBookmarkBoxName = (event) => {
    setBookmarkBoxData({
      ...bookmarkBoxData,
      bookmarkBoxName: event.target.value,
    });
  };

  const handleInputBookmarkBoxLink = (event) => {
    setBookmarkBoxData({
      ...bookmarkBoxData,
      bookmarkBoxLink: event.target.value,
    });
  };

  const handleBookmarkBoxImage = () => {
    if (getHost() !== null) {
      return (
        <BookmarkBox
          isVisible
          isActive={
            bookmarkBoxData.bookmarkBoxDisplay === "image" ? true : false
          }
          handleClick={() =>
            handleClickBookmarkBoxDisplay({
              bookmarkBoxDisplay: "image",
            })
          }
        >
          <img
            src={imageSrc}
            alt={bookmarkBoxData.bookmarkBoxName}
            width="90px"
            height="90px"
          />
        </BookmarkBox>
      );
    }
    return (
      <BookmarkBox isVisible>
        <CircularProgress />
      </BookmarkBox>
    );
  };

  const handleBookmarkBoxName = () => {
    if (bookmarkBoxData.bookmarkBoxName !== "") {
      return (
        <BookmarkBox
          isVisible
          isActive={
            bookmarkBoxData.bookmarkBoxDisplay === "name" ? true : false
          }
          handleClick={() =>
            handleClickBookmarkBoxDisplay({
              bookmarkBoxDisplay: "name",
            })
          }
        >
          {bookmarkBoxData.bookmarkBoxName}
        </BookmarkBox>
      );
    }
    return (
      <BookmarkBox isVisible>
        <CircularProgress />
      </BookmarkBox>
    );
  };

  const buildBookmarksBox = () => {
    return state.bookmarks.bookmarksBox.map((item) => {
      const { code, name, link, image, display } = item;

      return (
        <BookmarkBox key={code} isVisible code={code} bookmarkBoxLink={link}>
          {display === "image" ? (
            <img src={image} alt={name} width="90px" height="90px" />
          ) : (
            name
          )}
        </BookmarkBox>
      );
    });
  };

  return (
    <>
      <Paper className={styles.bookmarksBox}>
        {buildBookmarksBox()}
        <BookmarkBox isVisible={state.mainGridData.isDraggable} isAddBox>
          <CustomIconButton
            isVisible={state.mainGridData.isDraggable}
            handleClick={handleOpen}
          >
            <AddIcon color="success" />
          </CustomIconButton>
        </BookmarkBox>
      </Paper>

      <CustomDialog
        isVisible={open}
        dialogTitle="AÑADIR MARCADOR"
        handleAccept={handleAccept}
        handleCancel={handleClose}
      >
        <TextField
          autoFocus
          fullWidth
          label="Nombre"
          variant="outlined"
          onChange={handleInputBookmarkBoxName}
          sx={{ pb: 5 }}
        />
        <TextField
          fullWidth
          label="Enlace"
          variant="outlined"
          onChange={handleInputBookmarkBoxLink}
          sx={{ pb: 5 }}
        />
        <Typography variant="subtitle1" align="left" sx={{ pb: 1 }}>
          Seleccione que marcador desea utilizar:
        </Typography>
        <div className={styles.bookmarkBoxesPreview}>
          <div>{handleBookmarkBoxImage()}</div>
          <div>{handleBookmarkBoxName()}</div>
        </div>
      </CustomDialog>
    </>
  );
}

export default BookmarksBox;
