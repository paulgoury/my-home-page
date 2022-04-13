import { useContext } from "react";

import { SettingsContext } from "../tools";

import "./styles/background.css";

function Background({ children }) {
  const { state } = useContext(SettingsContext);
  const { backgroundImage } = state;

  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(
          ${
            state.showWidgetsMenu
              ? backgroundImage + "&blur=250"
              : backgroundImage
          })`,
        backgroundSize: "1920px 1080px",
      }}
    >
      {children}
    </div>
  );
}

export default Background;
