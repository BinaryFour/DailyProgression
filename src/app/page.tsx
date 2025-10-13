import { Divider } from '@mui/material';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';

export type Label = {
  title: string;
  checkList: string[];
};

export default function Home() {
  return (
    <Box
      component='main'
      sx={{
        flexGrow: 1,
        bgcolor: 'background.default',
        p: 3,
      }}
    >
      <Box>
        <Typography variant='h2' align='center'>
          Welcome to the homepage of Kevin Sung!
        </Typography>
        <Typography
          variant='h5'
          gutterBottom
          align='center'
          fontStyle={'italic'}
        >
          "If I don't know how to do it, I'll figure it out!"
        </Typography>
      </Box>
      <ImageList cols={3} gap={1} rowHeight={300}>
        <ImageListItem>
          <Image
            alt='Kevin Sung 1'
            src={'/KevinSung1.jpg'}
            // width={332.5}
            // height={250}
            fill
            objectFit='contain'
          />
        </ImageListItem>
        <ImageListItem>
          <Image
            alt='Kevin Sung 2'
            src={'/KevinSung2.jpg'}
            fill
            objectFit='contain'
          />
        </ImageListItem>
        <ImageListItem>
          <Image
            alt='Kevin Sung 3'
            src={'/KevinSung3.jpg'}
            fill
            objectFit='contain'
          />
        </ImageListItem>
      </ImageList>
      <Box>
        <Typography variant='h3' gutterBottom>
          There are two main purposes to this site:
        </Typography>
        <Typography variant='h5' gutterBottom>
          1. To get hired as a Software Engineer
        </Typography>
        <Typography variant='h5' gutterBottom>
          2. To play around and create tools that benefit my life!
        </Typography>
      </Box>
    </Box>
  );
}
