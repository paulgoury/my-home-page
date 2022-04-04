import { useState } from "react";
import SettingsContext from "./SettingsContext";

function SettingsContextProvider({ children }) {
  const [openConfig, setOpenConfig] = useState(false);

  return (
    <SettingsContext.Provider value={{ openConfig, setOpenConfig }}>
      {children}
    </SettingsContext.Provider>
  );
}

export default SettingsContextProvider;
