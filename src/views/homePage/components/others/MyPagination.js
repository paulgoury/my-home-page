import { Pagination, Stack } from "@mui/material";

function MyPagination({ count, page, onChange }) {
  return (
    <Stack spacing={2}>
      <Pagination count={count} page={page} onChange={onChange} />
    </Stack>
  );
}

export default MyPagination;
