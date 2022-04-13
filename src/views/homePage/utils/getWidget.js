import * as Widgets from "../components";

function getWidget({ widgetName, props }) {
  const Widget = Object.entries(Widgets).find(([key]) => {
    return key === widgetName;
  })[1];

  return <Widget {...props} />;
}

export default getWidget;
