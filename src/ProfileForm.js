import { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import PersonIcon from '@mui/icons-material/Person';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Card from '@mui/material/Card';
import { Grid, Typography } from '@mui/material';

import Form from './Components/Form/Form';
import { getUserById, updateUserDetails } from './api'

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
    updateUserDetails('JYzT4N6pxfDBaxu5uru3', udpatedFormData)
      .then(() => {
        setFormData(udpatedFormData);
      });
  };

  return (
    <>
      <CssBaseline />
      <Grid container spacing={1} sx={{ height: '100vh', paddingLeft: 3.5, mt: 1 }}>
        <Grid item xs={12} sm={9} sx={{
          padding: 6,
          mt: 2
        }}>
          <Typography variant="h6">
            My Profile
          </Typography>
          <Card raised={true} sx={{
            mt: 2,
            padding: 4,
            alignItems: 'center',
            borderRadius: 7,
            boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
          }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative'
              }}
            >
              <Form formItems={profileFormItems} formData={formData} onSubmit={handleSubmit} onReset={handleSubmit}></Form>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3} sx={{
          backgroundColor: "#F8F8F8",
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <img src='profilePic.jpg' width='50%' height='auto' alt='profile' style={{ borderRadius: '12%', boxShadow: 'grey 0px 7px 29px 0px' }}></img>
          <Typography variant="h6" sx={{
            mt: 2
          }}>
            {`${formData.firstName} ${formData.lastName}`}
          </Typography>
          <Typography variant="subtitle1" sx={{
            mt: 1
          }}>
            {`${formData.displayName}`}
          </Typography>
          <Typography variant="subtitle2" sx={{
            mt: 1
          }}>
            {`${formData.email}`}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
