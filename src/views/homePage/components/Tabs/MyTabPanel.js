import "./myTabPanel.css";

const MyTabPanel = ({ children, value, index }) => {
  const layout = <div className="tab-panel-component">{children}</div>;

  return value === index ? layout : null;
};

export default MyTabPanel;
