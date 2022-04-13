import { MyAccordion, DraggableDiv, SearchInput } from "../components";
import { useGridLayout, useActions } from "../tools";

function SearchInputsTab() {
  const { showWidgetsMenu } = useActions();
  const { addWidgetToMainGridLayout } = useGridLayout();

  const handleOnWidgetDragEnd = ({ widgetName, props }) => {
    return () => {
      addWidgetToMainGridLayout({
        widget: { widgetName, props },
      });
    };
  };

  return (
    <>
      <MyAccordion title="Outlined">
        <DraggableDiv
          onDragLeave={showWidgetsMenu}
          onDragEnd={handleOnWidgetDragEnd({
            widgetName: "SearchInput",
            props: { variant: "outlined" },
          })}
        >
          <SearchInput variant={"outlined"} />
        </DraggableDiv>
        <DraggableDiv
          onDragLeave={showWidgetsMenu}
          onDragEnd={handleOnWidgetDragEnd({
            widgetName: "SearchInput",
            props: { variant: "outlined", icon: true },
          })}
        >
          <SearchInput variant={"outlined"} icon />
        </DraggableDiv>
        <DraggableDiv
          onDragLeave={showWidgetsMenu}
          onDragEnd={handleOnWidgetDragEnd({
            widgetName: "SearchInput",
            props: { variant: "outlined", label: "Buscar..." },
          })}
        >
          <SearchInput variant={"outlined"} label="Buscar" />
        </DraggableDiv>
        <DraggableDiv
          onDragLeave={showWidgetsMenu}
          onDragEnd={handleOnWidgetDragEnd({
            widgetName: "SearchInput",
            props: {
              variant: "outlined",
              label: "Buscar...",
              icon: true,
            },
          })}
        >
          <SearchInput variant={"outlined"} icon label="Buscar" />
        </DraggableDiv>
      </MyAccordion>
      <MyAccordion title="Filled">
        <DraggableDiv
          onDragLeave={showWidgetsMenu}
          onDragEnd={handleOnWidgetDragEnd({
            widgetName: "SearchInput",
            props: {
              variant: "filled",
            },
          })}
        >
          <SearchInput variant={"filled"} />
        </DraggableDiv>
        <DraggableDiv
          onDragLeave={showWidgetsMenu}
          onDragEnd={handleOnWidgetDragEnd({
            widgetName: "SearchInput",
            props: {
              variant: "filled",
              icon: true,
            },
          })}
        >
          <SearchInput variant={"filled"} icon />
        </DraggableDiv>
        <DraggableDiv
          onDragLeave={showWidgetsMenu}
          onDragEnd={handleOnWidgetDragEnd({
            widgetName: "SearchInput",
            props: {
              variant: "filled",
              label: "Buscar...",
            },
          })}
        >
          <SearchInput variant={"filled"} label="Buscar" />
        </DraggableDiv>
        <DraggableDiv
          onDragLeave={showWidgetsMenu}
          onDragEnd={handleOnWidgetDragEnd({
            widgetName: "SearchInput",
            props: {
              variant: "filled",
              label: "Buscar...",
              icon: true,
            },
          })}
        >
          <SearchInput variant={"filled"} icon label="Buscar" />
        </DraggableDiv>
      </MyAccordion>
      <MyAccordion title="Standard">
        <DraggableDiv
          onDragLeave={showWidgetsMenu}
          onDragEnd={handleOnWidgetDragEnd({
            widgetName: "SearchInput",
            props: {
              variant: "standard",
            },
          })}
        >
          <SearchInput variant={"standard"} />
        </DraggableDiv>
        <DraggableDiv
          onDragLeave={showWidgetsMenu}
          onDragEnd={handleOnWidgetDragEnd({
            widgetName: "SearchInput",
            props: {
              variant: "standard",
              icon: true,
            },
          })}
        >
          <SearchInput variant={"standard"} icon />
        </DraggableDiv>
        <DraggableDiv
          onDragLeave={showWidgetsMenu}
          onDragEnd={handleOnWidgetDragEnd({
            widgetName: "SearchInput",
            props: {
              variant: "standard",
              label: "Buscar...",
            },
          })}
        >
          <SearchInput variant={"standard"} label="Buscar" />
        </DraggableDiv>
        <DraggableDiv
          onDragLeave={showWidgetsMenu}
          onDragEnd={handleOnWidgetDragEnd({
            widgetName: "SearchInput",
            props: {
              variant: "standard",
              label: "Buscar...",
              icon: true,
            },
          })}
        >
          <SearchInput variant={"standard"} icon label="Buscar" />
        </DraggableDiv>
      </MyAccordion>
    </>
  );
}

export default SearchInputsTab;
