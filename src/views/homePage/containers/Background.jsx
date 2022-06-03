import { useContext } from "react";

import { SettingsContext } from "../tools";

function Background({ children }) {
  const { state } = useContext(SettingsContext);
  const stateBackgroundImage = state.images.backgroundImage;

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        backgroundImage:
          stateBackgroundImage !== ""
            ? `url(${state.images.backgroundImage})`
            : "primary",
        backgroundSize: "1920px 1080px",
      }}
    >
      {children}
    </div>
  );
}

export default Background;
