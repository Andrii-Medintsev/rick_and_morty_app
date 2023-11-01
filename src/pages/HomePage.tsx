/* eslint-disable react-hooks/exhaustive-deps */
import {
  Alert,
  Box,
  Pagination,
  PaginationItem,
  Snackbar,
} from '@mui/material';
import { useEffect, useState } from 'react';
import CharacterCard from '../component/CharacterCard';
import Filter from '../component/Filter';
import FloatingButton from '../component/FloatingButton';
import Loader from '../component/Loader';
import { CharacterType } from '../types/CharacterType';
import { getCharacters } from '../utils/getCharacters';

const Home = () => {
  const [characters, setCharacters] = useState<CharacterType[] | []>([]);
  const [noQueryMatch, setNoQueryMatch] = useState(false);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getCharacters(currentPage).then((res) => {
      setCharacters(res.results.slice(0, 6));
      setPages(res.info.pages);
    });
  }, [currentPage]);

  const handleClose = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setNoQueryMatch(false);
  };

  return (
    <Box sx={{ maxWidth: '1280px', height: '100%', margin: 'auto' }}>
      {characters.length ? (
        <>
          <Filter
            onSetCharacters={setCharacters}
            onSetPages={setPages}
            onChangeNoQueryMatch={setNoQueryMatch}
          />
          <Snackbar
            open={noQueryMatch}
            autoHideDuration={5000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity='info'
              variant='filled'
              sx={{ width: '100%' }}
            >
              No such characters
            </Alert>
          </Snackbar>

          <Box
            sx={{
              position: 'relative',
              width: '100%',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '25px',
              marginBottom: '17px',
            }}
          >
            {characters && characters.length > 0 && (
              <>
                {characters.map((c) => (
                  <CharacterCard key={c.id} character={c} />
                ))}
              </>
            )}
            <FloatingButton />
          </Box>

          <Pagination
            count={pages}
            page={currentPage}
            onChange={(_, value) => setCurrentPage(value)}
            size='large'
            variant='outlined'
            shape='rounded'
            sx={{
              display: 'flex',
              justifyContent: 'center',
              height: '44px',
            }}
            renderItem={(item) => (
              <PaginationItem
                sx={{
                  backgroundColor: '#3C3E44',
                  '&:hover': {
                    backgroundColor: '#3C3E44',
                  },
                }}
                {...item}
              />
            )}
          />
        </>
      ) : (
        <Loader />
      )}
    </Box>
  );
};

export default Home;
