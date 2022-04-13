const MyTabPanel = ({ className, children, value, index }) => {
  const layout = <div className={className}>{children}</div>;

  return value === index ? layout : null;
};

export default MyTabPanel;
