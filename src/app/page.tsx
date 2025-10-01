import { Box } from '@mui/material';

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
      <h3>Welcome to my page!</h3>
    </Box>
  );
}
