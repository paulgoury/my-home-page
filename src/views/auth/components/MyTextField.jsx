import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";

const MyTextField = ({
  isPassword,
  label,
  onChange,
  error,
  showHelperText,
  onKeyUpEnter,
  iconOnClick,
  passwordMode,
}) => {
  return (
    <TextField
      fullWidth
      required
      label={label}
      variant="outlined"
      onChange={onChange}
      type={isPassword && (passwordMode ? "password" : "text")}
      error={error === 0 ? false : true}
      helperText={
        showHelperText &&
        isPassword &&
        (error === 1
          ? "Correo o contraseña incorrectos"
          : error === 2
          ? "Las contraseñas no coinciden"
          : "")
      }
      onKeyUp={isPassword && onKeyUpEnter}
      InputProps={
        isPassword && {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={iconOnClick}>
                {passwordMode ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }
      }
    />
  );
};

export default MyTextField;
