import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";

const MyTextField = ({
  isPassword,
  label,
  onChange,
  error,
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
      error={!error}
      helperText={
        isPassword && (!error ? "Correo o contraseña incorrectos" : "")
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
