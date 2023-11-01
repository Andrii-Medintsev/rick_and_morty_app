import Image from 'mui-image';
import { Link } from 'react-router-dom';
import bg from '../assets/bg.svg';
import logo from '../assets/logo.svg';
import { Box, Typography } from '@mui/material';

const Header = () => {
  return (
    <Box sx={{ width: '100%', maxWidth: '1440px', marginX: 'auto' }}>
      <Box sx={{ padding: '10px 27px', width: 'fit-content' }}>
        <Link to='/'>
          <Image src={logo} width={40} height={40} />
        </Link>
      </Box>

      <Box
        sx={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >

      <Typography
        sx={{
          height: 345,
          fontSize: 100,
          fontWeight: 900,
          display: 'grid',
          placeContent: 'center',
          backgroundImage: { bg },
        }}
      >
        The Rick and Morty API
      </Typography>
      </Box>
    </Box>
  );
};

export default Header;
