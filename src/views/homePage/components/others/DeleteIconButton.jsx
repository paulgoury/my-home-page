import { useContext } from "react";

import ClearIcon from "@mui/icons-material/Clear";

import { SettingsContext } from "../../tools";
import { CustomIconButton } from "../";

function DeleteIconButton({ handleClick, handleStyle }) {
  const { state } = useContext(SettingsContext);

  return (
    <CustomIconButton
      isVisible={state.mainGridData.isDraggable}
      handleClick={handleClick}
      handleStyle={handleStyle}
    >
      <ClearIcon color="error" fontSize="small" />
    </CustomIconButton>
  );
}

export default DeleteIconButton;
