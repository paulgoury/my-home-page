import { useContext, useEffect, useState } from "react";

import { Paper, TextField, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useSnackbar } from "notistack";

import { SettingsContext, useActions } from "../../../../tools";
import { BookmarkBox, CustomDialog } from "../";
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
  const { addBookmarkBox, changeEditableMainGrid, removeBookmarkBox } =
    useActions();

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
          isIconVisible={false}
          handleStyle={
            bookmarkBoxData.bookmarkBoxDisplay === "image"
              ? styles.borderNoWrap
              : ""
          }
          handleClick={() =>
            handleClickBookmarkBoxDisplay({
              bookmarkBoxDisplay: "image",
            })
          }
          paperVariant="bookmarkBox"
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
      <BookmarkBox isVisible isIconVisible={false} paperVariant="bookmarkBox">
        <CircularProgress />
      </BookmarkBox>
    );
  };

  const handleBookmarkBoxName = () => {
    if (bookmarkBoxData.bookmarkBoxName !== "") {
      return (
        <BookmarkBox
          isVisible
          isIconVisible={false}
          handleStyle={
            bookmarkBoxData.bookmarkBoxDisplay === "name"
              ? styles.borderNoWrap
              : styles.noWrap
          }
          handleClick={() =>
            handleClickBookmarkBoxDisplay({
              bookmarkBoxDisplay: "name",
            })
          }
          paperVariant="bookmarkBox"
        >
          <Typography variant="h6">
            {bookmarkBoxData.bookmarkBoxName}
          </Typography>
        </BookmarkBox>
      );
    }
    return (
      <BookmarkBox isVisible isIconVisible={false} paperVariant="bookmarkBox">
        <CircularProgress />
      </BookmarkBox>
    );
  };

  const buildBookmarksBox = () => {
    return state.bookmarks.bookmarksBox.map((item) => {
      const { code, name, link, image, display } = item;

      return (
        <BookmarkBox
          key={code}
          isVisible
          isIconVisible={state.mainGridData.isDraggable}
          bookmarkBoxLink={state.mainGridData.isDraggable ? "" : link}
          iconName="remove"
          iconSize="small"
          handleClickIcon={() => removeBookmarkBox({ bookmarkBoxCode: code })}
          handleStyleIcon={styles.deleteIcon}
          iconVariant="smallSquare"
          paperVariant="bookmarkBox"
        >
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
      <Paper variant="widget">
        {buildBookmarksBox()}
        <BookmarkBox
          isVisible={state.mainGridData.isDraggable}
          isIconVisible
          hideLink
          iconName="add"
          iconSize="medium"
          handleClick={handleOpen}
          paperVariant="bookmarkBox"
          iconVariant="largeSquare"
        />
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
        <div className={styles.bookmarkBoxes}>
          <div>{handleBookmarkBoxImage()}</div>
          <div>{handleBookmarkBoxName()}</div>
        </div>
      </CustomDialog>
    </>
  );
}

export default BookmarksBox;
