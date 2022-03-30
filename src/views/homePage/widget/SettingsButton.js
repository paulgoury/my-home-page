import React from "react";

const SettingsButton = React.forwardRef(({ style, classname, id }, ref) => {
  return (
    <div style={{ ...style }} className={classname} ref={ref} key={id}>
      Componente
    </div>
  );
});

export default SettingsButton;
