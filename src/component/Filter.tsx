import { Box, Button } from '@mui/material';
import { useState } from 'react';
import SelectItem from './SelectItem';

const Filter = () => {
  const [filterVisible, setFilterVisible] = useState(false);

  return (
    <Box sx={{ display: 'flex', paddingBottom: '20px' }}>
      <Button
        variant='contained'
        sx={{ marginRight: '160px' }}
        onClick={() => setFilterVisible(!filterVisible)}
      >
        {filterVisible ? 'Remove filter' : 'Filter'}
      </Button>

      {filterVisible && (
        <Box sx={{ display: 'flex', gap: '28px' }}>
          <SelectItem />
          <Button variant='contained'>Find</Button>
        </Box>
      )}
    </Box>
  );
};

export default Filter;
