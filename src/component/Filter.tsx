import { Box, Button, styled } from '@mui/material';
import { grey } from '@mui/material/colors';
import SelectItem from './SelectItem';
import { useState } from 'react';

const CustomButton = styled(Button)(() => ({
  color: '#272B33',
  width: '140px',
  height: '60px',
  fontWeight: 400,
  backgroundColor: grey[100],
  '&:hover': {
    backgroundColor: grey[200],
  },
}));

const Filter = () => {
  const [filterVisible, setFilterVisible] = useState(false);

  return (
    <Box sx={{ display: 'flex', paddingBottom: '20px' }}>
      <CustomButton
        variant='contained'
        sx={{ marginRight: '160px' }}
        onClick={() => setFilterVisible(!filterVisible)}
      >
        {filterVisible ? 'Remove filter' : 'Filter'}
      </CustomButton>

      {filterVisible && (
        <Box sx={{ display: 'flex', gap: '28px' }}>
          <SelectItem />
          <CustomButton variant='contained'>Find</CustomButton>
        </Box>
      )}
    </Box>
  );
};

export default Filter;
