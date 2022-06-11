import { useContext } from "react";

import { useTheme } from "@emotion/react";

import { SettingsContext } from "../../../tools";

function Background({ children }) {
  const { state } = useContext(SettingsContext);
  const { palette } = useTheme();

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        backgroundImage:
          state.images.backgroundImage !== ""
            ? `url(${state.images.backgroundImage})`
            : "",
        backgroundColor: palette.background.default,
        backgroundSize: "1920px 1080px",
      }}
    >
      {children}
    </div>
  );
}

export default Background;
