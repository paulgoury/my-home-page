import { Switch } from "@mui/material";

import { useActions } from "../../tools";

function EditSwitch() {
  const { editGridLayout } = useActions();

  return (
    <Switch
      lable="Editar"
      onChange={editGridLayout}
      sx={{ display: "flex", justifyContent: "center" }}
    />
  );
}

export default EditSwitch;
