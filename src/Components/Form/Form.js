import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextInput from './CustomFields/TextInput';
import { useState, useEffect } from 'react'

export default function Form(props) {
  const { formItems, formData, onSubmit } = props;

  const [localFormData, setLocalFormData] = useState(formData);

  useEffect(() => {
    setLocalFormData(formData)
  }, [formData])

  const handleChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    const udpatedFormData = { ...localFormData, [fieldName]: fieldValue }
    setLocalFormData(udpatedFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(localFormData);
  }

  const handleReset = (event) => {
    event.preventDefault();
    setLocalFormData(formData);
  }

  return (
    <Box component="form" noValidate onSubmit={handleSubmit} onReset={handleReset} sx={{ mt: 2 }}>
      <Grid container spacing={6}>
        {
          formItems.map((item) => {
            return (
              <Grid item xs={12} sm={4} key={item.name}>
                <TextInput {...item} value={localFormData[item.name]} onChange={handleChange} />
              </Grid>
            )
          })
        }
      </Grid>
      <Grid container spacing={6} sx={{ mt: 6 }}>
        <Grid item xs={12} sm={6}>
          <Button
            fullWidth
            type="reset"
            variant="outlined"
            sx={{ mt: 3, mb: 2 }}
          >
            Reset
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Save Changes
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}
