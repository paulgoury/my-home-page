import { createTheme } from "@mui/material";

import {
  customMixins,
  customPalettes,
  customShadows,
  customTransactions,
  customComponents,
} from "./";

function ThemeData({ themeMode }) {
  const { dark, light, main } = customPalettes();

  const palette = themeMode === "dark" ? dark.palette : light.palette;
  const shadows = customShadows();
  const transactions = customTransactions({
    palette: palette,
    shadows: shadows,
  });
  const mixins = customMixins({
    palette: palette,
    shadows: shadows,
    transactions: transactions,
  });
  const components = customComponents({
    palette: palette,
    mixins: mixins,
    shadows: shadows,
    transactions: transactions,
  });

  return createTheme({
    palette: palette,
    typography: {
      fontFamily: "Montserrat",
    },
    components: components,
    shadows: shadows,
    mixins: mixins,
    transitions: transactions,
  });
}

export default ThemeData;
