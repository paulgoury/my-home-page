import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputAdornment } from "@mui/material";

function SearchInput({ variant, label, icon }) {
  return (
    <TextField
      fullWidth
      variant={variant}
      color="primary"
      label={label}
      InputProps={
        icon && {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }
      }
    />
  );
}

export default SearchInput;
