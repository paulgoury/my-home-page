import * as Widgets from "../widgets/index";

function WidgetLoader({ widgetName }) {
  const Widget = Object.entries(Widgets).find(([key]) => {
    return key === widgetName;
  })[1];

  return <Widget />;
}

export default WidgetLoader;
