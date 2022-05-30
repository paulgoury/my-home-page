import { Pagination, Stack } from "@mui/material";

function CustomPagination({ isVisible, pages, page, handleChange }) {
  const Component = () => {
    return (
      <Stack spacing={2}>
        <Pagination count={pages} page={page} onChange={handleChange} />
      </Stack>
    );
  };

  return isVisible ? <Component /> : <></>;
}

export default CustomPagination;
