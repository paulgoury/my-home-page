import { useContext } from "react";

import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";
import { IconButton } from "@mui/material";

import { SettingsContext, useActions } from "../../../../tools";

function SettingsButton() {
  const { state } = useContext(SettingsContext);
  const { changeVisibiliyWidgetsMenu } = useActions();

  return (
    <IconButton
      disabled={state.mainGridData.isDraggable}
      onClick={changeVisibiliyWidgetsMenu}
    >
      <WidgetsRoundedIcon sx={{ width: "100%", height: "100%" }} />
    </IconButton>
  );
}

export default SettingsButton;
