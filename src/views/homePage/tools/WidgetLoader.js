import * as Widgets from "../widgets/index";

function WidgetLoader({ widgetName }) {
  const Widget = Object.entries(Widgets).find(([key]) => {
    return key === widgetName;
  });

  return <Widget />;
}

export default WidgetLoader;
