import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";

const MyTextField = ({
  isRegister,
  label,
  onChange,
  error,
  onKeyUpEnter,
  iconOnClick,
  showPassword,
}) => {
  return (
    <TextField
      fullWidth
      required
      label={label}
      variant="outlined"
      onChange={onChange}
      type={isRegister && (showPassword ? "password" : "text")}
      error={!error}
      helperText={
        isRegister && (!error ? "Correo o contraseña incorrectos" : "")
      }
      onKeyUp={isRegister && onKeyUpEnter}
      InputProps={
        isRegister && {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={iconOnClick}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }
      }
    />
  );
};

export default MyTextField;
