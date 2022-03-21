import { alpha, styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import mySimpleThemeDark from "../../../styles/mySimpleThemeDark";

const SearchTextField = () => {
  const RedditTextField = styled((props) => (
    <TextField InputProps={{ disableUnderline: true }} {...props} />
  ))(({ theme }) => ({
    "& .MuiFilledInput-root": {
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: mySimpleThemeDark.palette.background.default,
    },
  }));

  const inputProps = {};

  return <TextField inputProps={inputProps} />;
  // <RedditTextField variant="filled" style={{ marginTop: 11 }} />
};

export default SearchTextField;
