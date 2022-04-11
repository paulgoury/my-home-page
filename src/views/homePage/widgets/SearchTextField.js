import { alpha, styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import mySimpleThemeDark from "../../../palettes/mySimpleThemeDark";

const SearchTextField = () => {
  const RedditTextField = styled((props) => (
    <TextField InputProps={{ disableUnderline: true }} {...props} />
  ))(({ theme }) => ({
    "& .MuiFilledInput-root": {
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "red",
    },
  }));

  return <TextField fullWidth />;
};

export default SearchTextField;
