import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const RedirectingPage = () => {
  return (
    <Box
      sx={{
        color: 'white',
      }}
    >
      <Typography sx={{ marginBottom: '20px' }} variant='h3'>Ooops... It looks like you're lost..</Typography>

      <Typography variant='h5' fontWeight={400} borderBottom='1px solid' width='fit-content'>
        <Link to='/'>Get me out of here!</Link>
      </Typography>
    </Box>
  );
};

export default RedirectingPage;
