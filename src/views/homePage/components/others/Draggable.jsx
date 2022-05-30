import styles from "../styles/draggable.module.css";

function Draggable({ handleDragLeave, handleDragEnd, children }) {
  return (
    <div
      className={styles.draggable}
      draggable
      onDragLeave={handleDragLeave}
      onDragEnd={handleDragEnd}
    >
      {children}
    </div>
  );
}

export default Draggable;
