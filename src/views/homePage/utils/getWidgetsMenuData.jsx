import WallpaperIcon from "@mui/icons-material/Wallpaper";
import KeyboardRoundedIcon from "@mui/icons-material/KeyboardRounded";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

import BackgroundTab from "../containers/BackgroundTab";
import BookmarksTab from "../containers/BookmarksTab";
import SearchInputsTab from "../containers/SearchInputsTab";
import LogoutTab from "../containers/LogoutTab";

const getWidgetsMenuData = {
  tabs: [
    { code: 0, title: "FONDO DE PANTALLA", icon: <WallpaperIcon /> },
    { code: 1, title: "BARRA DE BUSCADOR", icon: <KeyboardRoundedIcon /> },
    { code: 2, title: "MARCADORES", icon: <StarBorderIcon /> },
    { code: 3, title: "CERRAR SESIÓN", icon: <LogoutRoundedIcon /> },
  ],
  tabPanels: [
    { code: 0, content: <BackgroundTab /> },
    { code: 1, content: <SearchInputsTab /> },
    { code: 2, content: <BookmarksTab /> },
    { code: 3, content: <LogoutTab /> },
  ],
};

export default getWidgetsMenuData;
