import { styled } from "@mui/system";
import { useContext } from "react";

import { SettingsContext } from "../tools";

function Background({ children }) {
  const { state } = useContext(SettingsContext);

  // const StyledDiv = styled("div")({
  //   height: "100vh",
  //   width: "100%",
  //   backgroundImage: `url(
  //     ${
  //       state.isVisibleWidgetsMenu
  //         ? backgroundImage + "&blur=250"
  //         : backgroundImage
  //     })`,
  //   backgroundSize: "1920px 1080px",
  // });

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        backgroundImage: `url(${state.images.backgroundImage})`,
        backgroundSize: "1920px 1080px",
      }}
    >
      {children}
    </div>
  );
}

export default Background;
