import phoneBook from '../img/phonebook2.jpg';
import phone from '../img/phone.webp';

import { Paper, Typography } from '@mui/material';


export default function Home() {
  return (
    <Paper
      sx={{
        backgroundImage: `url(${phone})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'contain',
        backgroundAttachment: 'fixed',
        height: '450px',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '200px',
        borderRadius: 'none',
      }}
    >
      <img src={phoneBook} alt="Phonebook" width="48" />
      <Typography
        variant="h1"
        color="#e84a5f"
        fontWeight={700}
        align="center"
        backgroundColor="gainsboro; opacity:0.8"
        borderRadius={8}
      >
        Phonebook
      </Typography>
    </Paper>
  );
}


