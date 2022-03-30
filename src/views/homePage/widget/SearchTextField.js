import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

const SearchTextField = ({ key }) => {
  const RedditTextField = styled((props) => (
    <TextField InputProps={{ disableUnderline: true }} {...props} />
  ))(({ theme }) => ({
    "& .MuiFilledInput-root": {
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "red",
    },
  }));

  return <RedditTextField key={key} />;
};

export default SearchTextField;
