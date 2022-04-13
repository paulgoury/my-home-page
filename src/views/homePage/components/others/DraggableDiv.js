import "../styles/draggableDiv.css";

function DraggableDiv({ onDragLeave, onDragEnd, children }) {
  return (
    <div
      className="draggable-div"
      draggable
      onDragLeave={onDragLeave}
      onDragEnd={onDragEnd}
    >
      {children}
    </div>
  );
}

export default DraggableDiv;
