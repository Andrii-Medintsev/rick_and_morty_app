import { Box } from '@mui/material';
import { DotSpinner } from '@uiball/loaders';

const Loader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <DotSpinner size={60} speed={0.9} color='#fff' />
    </Box>
  );
};

export default Loader;
