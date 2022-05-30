import { useContext } from "react";

import { Switch } from "@mui/material";

import { SettingsContext, useActions } from "../../tools";

function EditSwitch() {
  const { state } = useContext(SettingsContext);
  const { changeEditableMainGrid } = useActions();

  return (
    <Switch
      disabled={state.isVisibleWidgetsMenu}
      checked={state.mainGridData.isDraggable}
      onChange={changeEditableMainGrid}
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    />
  );
}

export default EditSwitch;
