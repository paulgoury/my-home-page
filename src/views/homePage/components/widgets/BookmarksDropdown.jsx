import { useContext, useEffect, useState } from "react";

import { v4 as uuidv4 } from "uuid";

import { Button, Link, Menu, MenuItem, Paper, TextField } from "@mui/material";
import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from "material-ui-popup-state/hooks";
import { useSnackbar } from "notistack";

import { SettingsContext, useActions } from "../../tools";
import { AddIconButton, DeleteIconButton, CustomDialog } from "../";

import styles from "../styles/bookmarksDropdown.module.css";

const initialBookmarksDropdownData = {
  bookmarkDropdownCategoryName: "",
  bookmarkDropdownName: "",
  bookmarkDropdownLink: "",
};

function BookmarksDropdown() {
  const { enqueueSnackbar } = useSnackbar();

  const { state } = useContext(SettingsContext);
  const {
    addBookmarkDropdownCategory,
    addBookmarkDropdownLink,
    changeEditableMainGrid,
    removeBookmarkDropdownCategory,
    removeBookmarkDropdownLink,
  } = useActions();

  const [open, setOpen] = useState({
    addCategory: false,
    addCategoryLink: false,
  });
  const [bookmarkDropdownData, setBookmarkDropdownData] = useState(
    initialBookmarksDropdownData
  );

  useEffect(() => {
    changeEditableMainGrid();
  }, [open, changeEditableMainGrid]);

  const handleOpenAddCategory = () => {
    setOpen({
      addCategoryLink: false,
      addCategory: true,
    });
  };

  const handleOpenAddCategoryItem = ({ bookmarkCategory }) => {
    setBookmarkDropdownData({
      ...bookmarkDropdownData,
      bookmarkDropdownCategoryName: bookmarkCategory,
    });
    setOpen({
      addCategory: false,
      addCategoryLink: true,
    });
  };

  const handleSetName = (event) => {
    setBookmarkDropdownData({
      ...bookmarkDropdownData,
      bookmarkDropdownName: event.target.value,
    });
  };

  const handleSetCategory = (event) => {
    setBookmarkDropdownData({
      ...bookmarkDropdownData,
      bookmarkDropdownCategoryName: event.target.value,
    });
  };

  const handleSetCategoryLink = (event) => {
    setBookmarkDropdownData({
      ...bookmarkDropdownData,
      bookmarkDropdownLink: event.target.value,
    });
  };

  const handleAcceptAddCategory = ({ bookmarkDropdownCategoryName }) => {
    const isCategoryNameUnique = state.bookmarks.bookmarksDropdown.find(
      (element) => element.categoryName === bookmarkDropdownCategoryName
    );

    if (isCategoryNameUnique === undefined) {
      if (bookmarkDropdownData.bookmarkDropdownCategoryName !== "") {
        addBookmarkDropdownCategory({ bookmarkDropdownCategoryName });
        handleCancel();
        enqueueSnackbar("Categoria añadida con éxito", {
          variant: "success",
        });
      } else {
        enqueueSnackbar("Debe rellenar todos los campos", {
          variant: "error",
        });
      }
    } else {
      enqueueSnackbar("El nombre de la categoria ya existe", {
        variant: "error",
      });
    }
  };

  const handleAcceptAddCategoryLink = ({
    bookmarkDropdownLink,
    bookmarkDropdownName,
  }) => {
    const bookmarkDropdownCategoryName =
      bookmarkDropdownData.bookmarkDropdownCategoryName;

    if (
      bookmarkDropdownData.bookmarkDropdownName !== "" &&
      bookmarkDropdownData.bookmarkDropdownLink !== ""
    ) {
      addBookmarkDropdownLink({
        bookmarkDropdownCategoryName: bookmarkDropdownCategoryName,
        bookmarkDropdownName: bookmarkDropdownName,
        bookmarkDropdownLink: bookmarkDropdownLink,
      });
      handleCancel();
      enqueueSnackbar("Marcador añadido con éxito", {
        variant: "success",
      });
    } else {
      enqueueSnackbar("Debe rellenar todos los campos", {
        variant: "error",
      });
    }
  };

  const handleCancel = () => {
    setOpen({
      addCategory: false,
      addCategoryLink: false,
    });
  };

  const MyMenu = ({
    bookmarksDropdownCode,
    bookmarksDropdownCategoryTitle,
    bookmarksDropdownCategoryLink,
  }) => {
    const popupState = usePopupState({
      variant: "popover",
      popupId: "demoMenu",
    });
    return (
      <div key={bookmarksDropdownCode}>
        <div className={styles.iconAndTitle}>
          <DeleteIconButton
            handleClick={() =>
              removeBookmarkDropdownCategory({
                bookmarkDropdownCategoryCode: bookmarksDropdownCode,
              })
            }
          />
          <Button className={styles.categoryName} {...bindTrigger(popupState)}>
            {bookmarksDropdownCategoryTitle}
          </Button>
        </div>
        <Menu {...bindMenu(popupState)}>
          {bookmarksDropdownCategoryLink.map((item) => (
            <MenuItem key={item.code} onClick={popupState.close}>
              {state.mainGridData.isDraggable ? (
                <DeleteIconButton
                  handleClick={() =>
                    removeBookmarkDropdownLink({
                      bookmarkDropdownCategoryCode: bookmarksDropdownCode,
                      bookmarkDropdownLinkCode: item.code,
                    })
                  }
                  handleStyle="none"
                />
              ) : null}
              <Link underline="none" href={item.link}>
                {item.name}
              </Link>
            </MenuItem>
          ))}
          {state.mainGridData.isDraggable ? (
            <MenuItem
              key={uuidv4()}
              onClick={() =>
                handleOpenAddCategoryItem({
                  bookmarkCategory: bookmarksDropdownCategoryTitle,
                })
              }
            >
              <AddIconButton handleStyle={styles.icon} />
              <Link underline="none">Nuevo</Link>
            </MenuItem>
          ) : undefined}
        </Menu>
      </div>
    );
  };

  return (
    <>
      <Paper className={styles.bookmarksDropdown}>
        {state?.bookmarks?.bookmarksDropdown?.map((item) => {
          return (
            <MyMenu
              key={item.code}
              bookmarksDropdownCode={item.code}
              bookmarksDropdownCategoryTitle={item.categoryName}
              bookmarksDropdownCategoryLink={item.bookmarks}
            />
          );
        })}
        <AddIconButton
          isVisible={state.mainGridData.isDraggable}
          handleClick={handleOpenAddCategory}
        />
      </Paper>
      <CustomDialog
        isVisible={open.addCategory}
        dialogTitle="Añadir categoria"
        handleAccept={() =>
          handleAcceptAddCategory({
            bookmarkDropdownCategoryName:
              bookmarkDropdownData.bookmarkDropdownCategoryName,
          })
        }
        handleCancel={handleCancel}
      >
        <TextField
          autoFocus
          fullWidth
          label="Nombre"
          variant="standard"
          onChange={handleSetCategory}
        />
      </CustomDialog>
      <CustomDialog
        isVisible={open.addCategoryLink}
        dialogTitle="Añadir marcador"
        handleAccept={() =>
          handleAcceptAddCategoryLink({
            bookmarkDropdownLink: bookmarkDropdownData.bookmarkDropdownLink,
            bookmarkDropdownName: bookmarkDropdownData.bookmarkDropdownName,
          })
        }
        handleCancel={handleCancel}
      >
        <TextField
          autoFocus
          fullWidth
          label="Nombre"
          variant="standard"
          onChange={handleSetName}
        />
        <TextField
          fullWidth
          label="Enlace"
          variant="standard"
          onChange={handleSetCategoryLink}
        />
      </CustomDialog>
    </>
  );
}

export default BookmarksDropdown;
