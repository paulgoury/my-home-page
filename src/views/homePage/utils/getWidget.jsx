import * as Widgets from "../components";

function getWidget({ widgetName, widgetProps }) {
  const Widget = Object.entries(Widgets).find(([key]) => {
    return key === widgetName;
  })[1];

  return <Widget {...widgetProps} />;
}

export default getWidget;
