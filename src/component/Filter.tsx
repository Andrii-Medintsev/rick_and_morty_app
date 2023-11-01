/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Button, TextField } from '@mui/material';
import { useState } from 'react';
import { CharacterType } from '../types/CharacterType';
import { getCharactersByLocation } from '../utils/getCharactersByLocation';
import { getFilteredCharacters } from '../utils/getFilteredCharacters';
import { SelectItem } from './SelectItem';

type Props = {
  onSetCharacters: (c: CharacterType[]) => void;
  onSetPages: (pages: number) => void;
  onChangeNoQueryMatch: (isVisible: boolean) => void;
};

const Filter: React.FC<Props> = ({
  onSetCharacters,
  onSetPages,
  onChangeNoQueryMatch,
}) => {
  const [searchOptions, setSearchOption] = useState<string[]>([]);
  const [filterVisible, setFilterVisible] = useState(false);
  const [generalQuery, setGeneralQuery] = useState('');

  const [characterQueries, setCharacterQueries] = useState({
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
  });

  const [locationQueries, setLocationQueries] = useState({
    name: '',
    type: '',
    dimension: '',
  });

  const [episodeQueries, setEpisodeQueries] = useState({
    name: '',
    episopdes: '',
  });

  const handleSearchOptions = (options: string[]) => {
    setGeneralQuery('');
    setSearchOption(options);
  };

  const handleCharacterQuery = (prop: string, value: string) => {
    setCharacterQueries((prev) => {
      const newState = { ...prev, [prop]: value };

      return newState;
    });
  };

  const handleLocationQuery = (prop: string, value: string) => {
    setLocationQueries((prev) => {
      const newState = { ...prev, [prop]: value };

      return newState;
    });
  };

  const handleEpisodeQuery = (prop: string, value: string) => {
    setEpisodeQueries((prev) => {
      const newState = { ...prev, [prop]: value };

      return newState;
    });
  };

  const resetQueries = () => {
    setGeneralQuery('');
    setSearchOption([]);
    setCharacterQueries({
      name: '',
      status: '',
      species: '',
      type: '',
      gender: '',
    });

    setLocationQueries({
      name: '',
      type: '',
      dimension: '',
    });

    setEpisodeQueries({
      name: '',
      episopdes: '',
    });
  };

  const handleFilterVisibility = () => {
    setFilterVisible(!filterVisible);

    resetQueries();
  };

  // const handleModalClose = () => {
  //   setFilterVisible(false);
  // };

  const handleSubmit = async () => {
    const filterdCharacters = await getFilteredCharacters(characterQueries);
    const charactersByLocation = await getCharactersByLocation(locationQueries);

    console.log(charactersByLocation.results);

    if (!filterdCharacters.results.length || !charactersByLocation.results.length) {
      onChangeNoQueryMatch(true);
      return;
    }

    onSetCharacters(filterdCharacters.results);
    onSetPages(charactersByLocation.info.pages);

    resetQueries();
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
      {filterVisible && (
        <Box sx={{ position: 'relative' }}>
          <SelectItem
            searchOptions={searchOptions}
            onOptionChange={handleSearchOptions}
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
                onChange={(e) => setGeneralQuery(e.target.value)}
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
                    onChange={(e) =>
                      handleLocationQuery(item.toLowerCase(), e.target.value)
                    }
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
                    onChange={(e) =>
                      handleEpisodeQuery(item.toLowerCase(), e.target.value)
                    }
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

      {/* <Modal open={filterVisible} onClose={handleModalClose}>
        <Box></Box>
      </Modal> */}
    </Box>
  );
};

export default Filter;
