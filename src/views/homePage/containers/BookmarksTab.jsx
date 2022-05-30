import { Draggable, BookmarksBox, BookmarksDropdown } from "../components";
import { useActions } from "../tools";

import styles from "./styles/bookmarksTab.module.css";

function BookmarksTab() {
  const { changeVisibiliyWidgetsMenu, addWidgetToMainGrid } = useActions();

  return (
    <div className={styles.main}>
      <Draggable
        handleDragLeave={changeVisibiliyWidgetsMenu}
        handleDragEnd={() =>
          addWidgetToMainGrid({
            widget: {
              widgetName: "BookmarksBox",
              widgetProps: {},
            },
          })
        }
      >
        <BookmarksBox />
      </Draggable>
      <Draggable
        handleDragLeave={changeVisibiliyWidgetsMenu}
        handleDragEnd={() =>
          addWidgetToMainGrid({
            widget: {
              widgetName: "BookmarksDropdown",
              widgetProps: {},
            },
          })
        }
      >
        <BookmarksDropdown />
      </Draggable>
    </div>
  );
}

export default BookmarksTab;
