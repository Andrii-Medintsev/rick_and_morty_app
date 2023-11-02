import { Box, Typography } from '@mui/material';
import github from '../assets/github.svg';
import logo from '../assets/incodeLogo.svg';
import like from '../assets/like.svg';
import twitter from '../assets/twitter.svg';

const Footer = () => {
  return (
    <Box
      sx={{
        background: '#202329',
        // height: '390px',
        color: '#9e9e9e',
        fontSize: 36,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: '212px',
          paddingTop: '47px',
          paddingBottom: '80px',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography
          fontWeight={700}
          fontSize={13}
          sx={{ textTransform: 'uppercase', lineHeight: '22px' }}
        >
          performed as part of a test case for the company
        </Typography>

        <Box
          component='img'
          src={logo}
          sx={{
            width: '50px',
            height: '50px',
            marginTop: '34px',
            borderRadius: '50%',
            boxShadow: '0px 0px 83px 0px #E8E8E8',
          }}
        />

        <Box sx={{ display: 'flex', gap: '27px', marginTop: '56px' }}>
          <Box component='img' src={github} />
          <Box component='img' src={twitter} />
          <Box component='img' src={like} />
        </Box>

        <Typography
          //
          sx={{ marginTop: '23px' }}
        >
          2023
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
