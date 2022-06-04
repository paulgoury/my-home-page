import { Card, Divider, Paper } from "@mui/material";
import { Draggable, SearchInput } from "../components";
import { useActions } from "../../../tools";

import styles from "./styles/searchersTab.module.css";

function SearchInputsTab() {
  const { changeVisibiliyWidgetsMenu, addWidgetToMainGrid } = useActions();

  return (
    <div className={styles.main}>
      <div className={styles.paper}>
        <Draggable
          handleDragLeave={changeVisibiliyWidgetsMenu}
          handleDragEnd={() => {
            addWidgetToMainGrid({
              widget: {
                widgetName: "SearchInput",
                widgetProps: { variant: "outlined" },
              },
            });
          }}
        >
          <SearchInput isDisabled={true} variant={"outlined"} />
        </Draggable>
        <Draggable
          handleDragLeave={changeVisibiliyWidgetsMenu}
          handleDragEnd={() =>
            addWidgetToMainGrid({
              widget: {
                widgetName: "SearchInput",
                widgetProps: { variant: "outlined", icon: true },
              },
            })
          }
        >
          <SearchInput isDisabled={true} variant={"outlined"} icon />
        </Draggable>
        <Draggable
          handleDragLeave={changeVisibiliyWidgetsMenu}
          handleDragEnd={() =>
            addWidgetToMainGrid({
              widget: {
                widgetName: "SearchInput",
                widgetProps: { variant: "outlined", label: "Buscar..." },
              },
            })
          }
        >
          <SearchInput isDisabled={true} variant={"outlined"} label="Buscar" />
        </Draggable>
        <Draggable
          handleDragLeave={changeVisibiliyWidgetsMenu}
          handleDragEnd={() =>
            addWidgetToMainGrid({
              widget: {
                widgetName: "SearchInput",
                widgetProps: {
                  variant: "outlined",
                  label: "Buscar...",
                  icon: true,
                },
              },
            })
          }
        >
          <SearchInput
            isDisabled={true}
            variant={"outlined"}
            icon
            label="Buscar"
          />
        </Draggable>
      </div>

      <div className={styles.paper}>
        <Draggable
          handleDragLeave={changeVisibiliyWidgetsMenu}
          handleDragEnd={() =>
            addWidgetToMainGrid({
              widget: {
                widgetName: "SearchInput",
                widgetProps: {
                  variant: "filled",
                },
              },
            })
          }
        >
          <SearchInput isDisabled={true} variant={"filled"} />
        </Draggable>
        <Draggable
          handleDragLeave={changeVisibiliyWidgetsMenu}
          handleDragEnd={() =>
            addWidgetToMainGrid({
              widget: {
                widgetName: "SearchInput",
                widgetProps: {
                  variant: "filled",
                  icon: true,
                },
              },
            })
          }
        >
          <SearchInput isDisabled={true} variant={"filled"} icon />
        </Draggable>
        <Draggable
          handleDragLeave={changeVisibiliyWidgetsMenu}
          handleDragEnd={() =>
            addWidgetToMainGrid({
              widget: {
                widgetName: "SearchInput",
                widgetProps: {
                  variant: "filled",
                  label: "Buscar...",
                },
              },
            })
          }
        >
          <SearchInput isDisabled={true} variant={"filled"} label="Buscar" />
        </Draggable>
        <Draggable
          handleDragLeave={changeVisibiliyWidgetsMenu}
          handleDragEnd={() =>
            addWidgetToMainGrid({
              widget: {
                widgetName: "SearchInput",
                widgetProps: {
                  variant: "filled",
                  label: "Buscar...",
                  icon: true,
                },
              },
            })
          }
        >
          <SearchInput
            isDisabled={true}
            variant={"filled"}
            icon
            label="Buscar"
          />
        </Draggable>
      </div>

      <div className={styles.paper}>
        <Draggable
          handleDragLeave={changeVisibiliyWidgetsMenu}
          handleDragEnd={() =>
            addWidgetToMainGrid({
              widget: {
                widgetName: "SearchInput",
                widgetProps: {
                  variant: "standard",
                },
              },
            })
          }
        >
          <SearchInput isDisabled={true} variant={"standard"} />
        </Draggable>
        <Draggable
          handleDragLeave={changeVisibiliyWidgetsMenu}
          handleDragEnd={() =>
            addWidgetToMainGrid({
              widget: {
                widgetName: "SearchInput",
                widgetProps: {
                  variant: "standard",
                  icon: true,
                },
              },
            })
          }
        >
          <SearchInput isDisabled={true} variant={"standard"} icon />
        </Draggable>
        <Draggable
          handleDragLeave={changeVisibiliyWidgetsMenu}
          handleDragEnd={() =>
            addWidgetToMainGrid({
              widget: {
                widgetName: "SearchInput",
                widgetProps: {
                  variant: "standard",
                  label: "Buscar...",
                },
              },
            })
          }
        >
          <SearchInput isDisabled={true} variant={"standard"} label="Buscar" />
        </Draggable>
        <Draggable
          handleDragLeave={changeVisibiliyWidgetsMenu}
          handleDragEnd={() =>
            addWidgetToMainGrid({
              widget: {
                widgetName: "SearchInput",
                widgetProps: {
                  variant: "standard",
                  label: "Buscar...",
                  icon: true,
                },
              },
            })
          }
        >
          <SearchInput
            isDisabled={true}
            variant={"standard"}
            icon
            label="Buscar"
          />
        </Draggable>
      </div>
    </div>
  );
}

export default SearchInputsTab;
