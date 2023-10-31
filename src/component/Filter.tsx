import { Box, Button, Modal, TextField } from '@mui/material';
import { useState } from 'react';
import { SelectItem } from './SelectItem';

const Filter = () => {
  const [searchOptions, setSearchOption] = useState<string[]>([]);
  const [filterVisible, setFilterVisible] = useState(false);

  const handleFilterVisibility = () => {
    setFilterVisible(!filterVisible);
    setSearchOption([]);
  };

  const handleModalClose = () => {
    setFilterVisible(false);
  };

  const handleSubmit = () => {
    setFilterVisible(false);
  };

  return (
    <Box sx={{ display: 'flex', paddingBottom: '20px' }}>
      <Button
        variant='contained'
        sx={{ marginRight: '160px' }}
        onClick={handleFilterVisibility}
      >
        {filterVisible ? 'Remove filter' : 'Filter'}
      </Button>

      <Modal open={filterVisible} onClose={handleModalClose}>
        {/* {filterVisible && ( */}
        <Box sx={{ position: 'relative', top: 445, left: '30%' }}>
          <SelectItem
            searchOptions={searchOptions}
            onOptionChange={setSearchOption}
          />
          <Box
            sx={{
              display: 'flex',
              position: 'absolute',
              left: '280px',
              flexDirection: 'column',
              gap: '1px',
              overflow: 'visible',
            }}
          >
            {!searchOptions.length && (
              <TextField
                placeholder='Add keywords to find'
                variant='outlined'
              />
            )}
            {searchOptions.includes('Character') && (
              <>
                <TextField placeholder='Add Name' variant='outlined' />
                <TextField placeholder='Add Status' variant='outlined' />
                <TextField placeholder='Add Species' variant='outlined' />
                <TextField placeholder='Add Type' variant='outlined' />
                <TextField placeholder='Add Gender' variant='outlined' />
              </>
            )}

            {searchOptions.includes('Location') && (
              <>
                <TextField placeholder='Add Location Name' variant='outlined' />
                <TextField placeholder='Add Location Type' variant='outlined' />
                <TextField placeholder='Add Dimension' variant='outlined' />
              </>
            )}

            {searchOptions.includes('Episodes') && (
              <>
                <TextField placeholder='Add Episode Name' variant='outlined' />
                <TextField placeholder='Add Episodes' variant='outlined' />
              </>
            )}
          </Box>
          <Button
            variant='contained'
            sx={{ position: 'absolute', left: '540px' }}
            onClick={handleSubmit}
          >
            Find
          </Button>
        </Box>
        {/* )} */}
      </Modal>
    </Box>
  );
};

export default Filter;
