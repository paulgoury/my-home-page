import { Switch } from "@mui/material";
import { useContext } from "react";
import SettingsContext from "../tools/context/SettingsContext";

function EditSwitch() {
  const { dispatch } = useContext(SettingsContext);

  const handleOnChenge = () => {
    dispatch({ type: "editGridLayout" });
  };

  return <Switch lable="Editar" onChange={handleOnChenge} />;
}

export default EditSwitch;
