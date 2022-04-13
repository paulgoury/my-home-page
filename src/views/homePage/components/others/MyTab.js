import { Tabs } from "@mui/material";

const MyTab = ({ children, value, onChange }) => {
  return (
    <Tabs value={value} onChange={onChange} centered>
      {children}
    </Tabs>
  );
};

export default MyTab;
