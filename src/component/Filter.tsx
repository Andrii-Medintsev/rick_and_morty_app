/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setCharactersFilter } from '../features/charactersFilterSlice';
import { SelectItem } from './SelectItem';
import { addHistoryItem } from '../features/historySlice';

type Props = {
  onSetCurrentPage: (page: number) => void;
};

const Filter: React.FC<Props> = ({ onSetCurrentPage }) => {
  const dispatch = useAppDispatch();
  const history = useAppSelector((state) => state.history.value);

  const [searchOptions, setSearchOption] = useState<string[]>([]);
  const [filterIsActive, setFilterIsActive] = useState(false);

  const [characterQueries, setCharacterQueries] = useState({
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
  });

  const handleCharacterQuery = (prop: string, value: string) => {
    setCharacterQueries((prev) => {
      const newState = { ...prev, [prop]: value };

      return newState;
    });
  };

  const resetQueries = () => {
    setSearchOption([]);
    setCharacterQueries({
      name: '',
      status: '',
      species: '',
      type: '',
      gender: '',
    });
  };

  const handleFilterVisibility = () => {
    setFilterIsActive(!filterIsActive);
    dispatch(
      setCharactersFilter({
        name: '',
        status: '',
        species: '',
        type: '',
        gender: '',
      })
    );

    resetQueries();
  };

  const handleSubmit = async () => {
    dispatch(setCharactersFilter(characterQueries));
    dispatch(addHistoryItem(characterQueries));

    window.localStorage.setItem(
      'history',
      JSON.stringify([...history, characterQueries])
    );

    onSetCurrentPage(1);

    resetQueries();
  };

  return (
    <Box sx={{ display: 'flex', paddingBottom: '20px' }}>
      <Button
        variant='contained'
        sx={{ marginRight: '160px' }}
        onClick={handleFilterVisibility}
      >
        {filterIsActive ? 'Remove filter' : 'Filter'}
      </Button>
      {filterIsActive && (
        <Box sx={{ position: 'relative' }}>
          <SelectItem
            searchOptions={searchOptions}
            onOptionChange={(options: string[]) => setSearchOption(options)}
          />
          <Box
            sx={{
              display: 'flex',
              position: 'absolute',
              left: '280px',
              flexDirection: 'column',
              gap: '1px',
              overflow: 'visible',
              zIndex: 5,
            }}
          >
            {!searchOptions.length && (
              <TextField
                placeholder='Add keywords to find'
                variant='outlined'
                disabled
              />
            )}

            {searchOptions.includes('Character') && (
              <>
                {['Name', 'Status', 'Species', 'Type', 'Gender'].map((item) => (
                  <TextField
                    key={item}
                    placeholder={`Add ${item}`}
                    variant='outlined'
                    onChange={(e) =>
                      handleCharacterQuery(item.toLowerCase(), e.target.value)
                    }
                  />
                ))}
              </>
            )}

            {searchOptions.includes('Location') && (
              <>
                {['Name', 'Type', 'Dimension'].map((item) => (
                  <TextField
                    key={item}
                    placeholder={`Add Location ${item}`}
                    variant='outlined'
                    onChange={() => {}}
                  />
                ))}
              </>
            )}

            {searchOptions.includes('Episodes') && (
              <>
                {['Name', 'Episodes'].map((item) => (
                  <TextField
                    key={item}
                    placeholder={`Add ${item}`}
                    variant='outlined'
                    onChange={() => {}}
                  />
                ))}
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
      )}
    </Box>
  );
};

export default Filter;
