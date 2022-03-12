import styled from "@emotion/styled";

const SearchTextField = () => {
  const styledTextField = styled("input")(({ theme }) => ({
      '& .MuiInputBase-input': {
          borderRadius: 4,
          position: "relative",
          backgroundColor: theme.palette.mode === "dark" ? "theme.palette."
      }
  }));

  return;
};

export default SearchTextField;
