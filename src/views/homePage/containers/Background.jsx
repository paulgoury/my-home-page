import { useContext } from "react";

import { SettingsContext } from "../../../tools";

function Background({ children }) {
  const { state } = useContext(SettingsContext);
  // : state.themeData.palette.background.default
  // state.images.backgroundImage !== ""
  // ? `url(${state.images.backgroundImage})`

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        backgroundImage: `url(https://source.unsplash.com/random/1920x1080/?blur=80)`,
        // backgroundSize: "1920px 1080px",
      }}
    >
      {children}
    </div>
  );
}

export default Background;
