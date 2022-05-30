import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

function CustomDialog({
  isVisible,
  dialogTitle,
  handleAccept,
  handleCancel,
  children,
}) {
  return (
    <Dialog open={isVisible} onClose={handleCancel}>
      <DialogTitle>{dialogTitle}</DialogTitle>
      <DialogContent dividers sx={{ p: 5 }}>
        {children}
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={handleAccept}>
          Aceptar
        </Button>
        <Button variant="contained" onClick={handleCancel}>
          Cancelar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default CustomDialog;
