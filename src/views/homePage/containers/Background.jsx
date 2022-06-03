import { useContext } from "react";

import { SettingsContext } from "../tools";

function Background({ children }) {
  const { state } = useContext(SettingsContext);

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
