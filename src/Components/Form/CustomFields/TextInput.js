import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';

export default function TextInput(props) {
  const { icon, value, ...rest } = props;

  return (
    <TextField
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            {icon}
          </InputAdornment>
        ),
      }}
      fullWidth
      value={value || ''}
      {...rest}
    />
  )
}
