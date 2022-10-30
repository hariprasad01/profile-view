import { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Form from './Components/Form/Form';
import { getUserById, updateUserDetails } from './api'

const theme = createTheme();

const profileFormItems = [
  {
    name: 'firstName',
    label: "First Name",
    icon: <PersonIcon />
  },
  {
    name: 'lastName',
    label: "Last Name",
    icon: <PersonIcon />
  },
  {
    name: 'displayName',
    label: "Display Name",
    icon: <AccountBoxOutlinedIcon />
  },
  {
    name: 'email',
    label: "Email Address",
    icon: <MailOutlineIcon />
  },
  {
    name: 'workNo',
    label: "Phone No (Work)",
    icon: <LocalPhoneOutlinedIcon />
  },
  {
    name: 'homeNo',
    label: "Phone No (Home)",
    icon: <LocalPhoneOutlinedIcon />
  },
  {
    name: 'location',
    label: "Location",
    icon: <LocationOnOutlinedIcon />
  }
]

export default function ProfileForm() {
  const [formData, setFormData] = useState({})

  useEffect(() => {
    getUserById('JYzT4N6pxfDBaxu5uru3').then(data => {
      setFormData(data);
    })
  }, [])

  const handleSubmit = (udpatedFormData) => {
    updateUserDetails('JYzT4N6pxfDBaxu5uru3', udpatedFormData);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Form formItems={profileFormItems} formData={formData} onSubmit={handleSubmit} onReset={handleSubmit}></Form>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
