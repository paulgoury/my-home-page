import WallpaperIcon from "@mui/icons-material/Wallpaper";
import InputIcon from "@mui/icons-material/Input";
import StarBorderIcon from "@mui/icons-material/StarBorder";

import { BackgroundTab, BookmarksTab, SearchInputsTab } from "../containers";

const getWidgetsMenuData = {
  tabs: [
    { code: 0, title: "FONDO DE PANTALLA", icon: <WallpaperIcon /> },
    { code: 1, title: "BARRA DE BUSCADOR", icon: <InputIcon /> },
    { code: 2, title: "MARCADORES", icon: <StarBorderIcon /> },
  ],
  tabPanels: [
    { code: 0, content: <BackgroundTab /> },
    { code: 1, content: <SearchInputsTab /> },
    { code: 2, content: <BookmarksTab /> },
  ],
};

export default getWidgetsMenuData;
