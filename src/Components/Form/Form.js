import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextInput from './CustomFields/TextInput';
import { useState, useEffect } from 'react'
import cloneDeep from 'lodash/cloneDeep';

export default function Form(props) {
  const { formItems, formData, onSubmit, onChange } = props;

  const [localFormData, setLocalFormData] = useState(formData);
  const [localFormItems, setLocalFormItems] = useState(cloneDeep(formItems));
  const [submitDisabled, setSubmitDisabled] = useState(false);

  useEffect(() => {
    setLocalFormData(formData)
  }, [formData])

  const handleChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    const udpatedFormData = { ...localFormData, [fieldName]: fieldValue }
    let errorFlag = false;
    const udpatedFormItems = localFormItems.map(item => {
      if (item.name === fieldName) {
        if (item.validate?.length > 0) {
          for (let i = 0; i < item.validate.length; i++) {
            const validationObject = item.validate[i];
            if (validationObject.criteria === 'length') {
              if (fieldValue && fieldValue.length !== validationObject.value) {
                item.error = true;
                item.helperText = validationObject.helperText;
                errorFlag = true
                return item;
              }
            } else if (validationObject.criteria === 'regex') {
              if (fieldValue && !validationObject.value.test(fieldValue)) {
                item.error = true;
                item.helperText = validationObject.helperText;
                errorFlag = true
                return item;
              }
            } else if (validationObject.criteria === 'required') {
              if (!fieldValue) {
                item.error = true;
                item.helperText = validationObject.helperText;
                errorFlag = true
                return item;
              }
            }
          }
          item.error = false;
          item.helperText = '';
        }
      }
      return item
    })
    setLocalFormItems(udpatedFormItems);
    setLocalFormData(udpatedFormData);
    setSubmitDisabled(errorFlag);
    if(!errorFlag) {
      onChange(udpatedFormData);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(localFormData);
  }

  const handleReset = (event) => {
    event.preventDefault();
    setLocalFormItems(cloneDeep(formItems))
    setLocalFormData(formData);
    setSubmitDisabled(false);
    onChange(formData);
  }

  return (
    <Box component="form" noValidate onSubmit={handleSubmit} onReset={handleReset} sx={{ m: 3 }}>
      <Grid container spacing={6}>
        {
          localFormItems.map((item) => {
            return (
              <Grid item xs={12} sm={6} key={item.name}>
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
            disabled = {submitDisabled}
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
