import { useContext, useState } from "react";

import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputAdornment } from "@mui/material";

import { SettingsContext } from "../../tools";

function SearchInput({ isDisabled, variant, label, icon }) {
  const { state } = useContext(SettingsContext);

  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = (event) => {
    if (event.key === "Enter" || event.type === "click") {
      window.location = state.searchEngies.default + query;
    }
  };

  return (
    <TextField
      fullWidth
      disabled={state.mainGridData.isDraggable || isDisabled}
      variant={variant}
      color="primary"
      label={label}
      onChange={handleChange}
      onKeyUp={handleSearch}
      InputProps={
        icon && {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                disabled={state.mainGridData.isDraggable || isDisabled}
                onClick={handleSearch}
              >
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
