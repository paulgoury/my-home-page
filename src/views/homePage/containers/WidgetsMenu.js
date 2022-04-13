import { useContext, useState } from "react";

import {
  IconButton,
  ImageListItem,
  InputAdornment,
  Tab,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ImageList from "@mui/material/ImageList";

import { getUnsplashConfig } from "../../../utils";

import { MyPagination, MyTab, MyTabPanel } from "../components";
import { SettingsContext } from "../tools";
import { SearchInputsTab } from "../containers";

import deletePhotosMock from "./photosMock.json";

import "./styles/widgetsMenu.css";

const WidgetsMenu = () => {
  const { state, dispatch } = useContext(SettingsContext);
  const [photos, setPhotos] = useState({});
  const [tab, setTab] = useState(0);
  const [page, setPage] = useState(1);

  const totalPages = photos?.response?.total_pages;

  const handleTab = (event, newValue) => {
    setTab(newValue);
  };

  const handleSearchUnsplash = async (event) => {
    if (event.key === "Enter") {
      try {
        const unsplashPhotos = await getUnsplashConfig.search.getPhotos({
          query: event.target.value,
          page: page,
          perPage: 10,
          orientation: "landscape",
        });
        setPhotos(unsplashPhotos);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const displayPhotos = () => {
    return photos?.response?.results?.map((item) => {
      return (
        <ImageListItem>
          <img
            onClick={() => {
              dispatch({ type: "setImage", value: item.urls.raw });
            }}
            src={item.urls.thumb}
          />
        </ImageListItem>
      );
    });
  };

  const handlePagination = (event, value) => {
    setPage(value);
  };

  // const handleIncrementCols = () => {
  //   dispatch({ type: "incrementCols" });
  // };

  // const handleDecrementCols = () => {
  //   dispatch({ type: "decrementCols" });
  // };

  // const handleIncrementMargin = () => {
  //   dispatch({ type: "incrementMargin" });
  // };

  // const handleDecrementMargin = () => {
  //   dispatch({ type: "decrementMargin" });
  // };

  return (
    <div className="widgets-menu-div" hidden={!state.showWidgetsMenu}>
      <MyTab value={tab} onChange={handleTab}>
        <Tab label="Fondo de pantalla" />
        <Tab label="Barra de buscador" />
        <Tab label="Marcadores" />
        {/* <Tab label="Columnas" /> */}
      </MyTab>

      <MyTabPanel className="widgets-menu-tab-panel" value={tab} index={0}>
        <TextField
          fullwidth
          onKeyUp={handleSearchUnsplash}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <ImageList cols={6}>{displayPhotos()}</ImageList>
        <MyPagination
          count={totalPages}
          page={page}
          onChange={handlePagination}
        />
      </MyTabPanel>

      <MyTabPanel className="widgets-menu-tab-panel" value={tab} index={1}>
        <SearchInputsTab />
      </MyTabPanel>

      <MyTabPanel
        className="widgets-menu-tab-panel"
        value={tab}
        index={2}
      ></MyTabPanel>

      {/* <MyTabPanel value={indexTab} index={2}>
        <Button onClick={handleDecrementCols}>-</Button>
        <MyPaper>{state.cols} columnas</MyPaper>
        <Button onClick={handleIncrementCols}>+</Button>
        <Button onClick={handleDecrementMargin}>-</Button>
        <MyPaper>{state.margin} margen</MyPaper>
        <Button onClick={handleIncrementMargin}>+</Button>
      </MyTabPanel> */}
    </div>
  );
};

export default WidgetsMenu;
