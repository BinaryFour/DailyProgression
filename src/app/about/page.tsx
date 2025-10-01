import Box from '@mui/material/Box';
import React from 'react';
import Image from 'next/image';
import Typography from '@mui/material/Typography';

export default function About() {
  const whattup = 'https://i.imgur.com/AIj1iV8.gif';

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography variant='h1'>About</Typography>
      <Box>
        <Image src={whattup} alt='whattup?' width={500} height={300} />
      </Box>
      <Box>
        <Typography variant='h5'>
          Hello there! Welcome to Kevin Sung's website.
        </Typography>
        <Typography variant='body1'>
          I am a React developer who enjoys making webapps in order to make
          money!
        </Typography>
      </Box>
    </Box>
  );
}
