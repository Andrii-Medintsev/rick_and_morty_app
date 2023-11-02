/* eslint-disable react-hooks/exhaustive-deps */
import {
  Alert,
  Box,
  Snackbar
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import CharacterCard from '../component/CharacterCard';
import CustomPagination from '../component/CustomPagination';
import Filter from '../component/Filter';
import FloatingButton from '../component/FloatingButton';
import Loader from '../component/Loader';
import { addCharacters } from '../features/charactersSlice';
import { CharacterTypeFromServer } from '../types/CharacterType';
import { getCharacters } from '../utils/getCharacters';

const Home = () => {
  const [noQueryMatch, setNoQueryMatch] = useState(false);
  const [pagesAmount, setPagesAmount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useAppDispatch();
  const characters = useAppSelector((state) => state.characters.value);
  const characterFilter = useAppSelector(state => state.charactersFilter.value)


  useEffect(() => {
    getCharacters(currentPage, characterFilter).then((res) => {
      const results = res.results.map((c: CharacterTypeFromServer) => ({
        ...c,
        location: c.location.name,
        episode: c.episode[0].name,
      }));

      if (!results.length) {
        setNoQueryMatch(true);
        return;
      }

      dispatch(addCharacters(results));
      setPagesAmount(res.info.pages);
    });
  }, [currentPage, characterFilter]);

  const handleAlertClose = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setNoQueryMatch(false);
  };

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    window.scrollTo(0, 0);
  };

  return (
    <Box
      sx={{
        maxWidth: '1280px',
        height: '100%',
        margin: 'auto',
        zIndex: 10,
      }}
    >
      {characters.length ? (
        <>
          <Filter onSetCurrentPage={setCurrentPage}/>

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

          <CustomPagination pagesAmount={pagesAmount} currentPage={currentPage} onPageChange={handlePageChange} />

          <Snackbar
            open={noQueryMatch}
            autoHideDuration={5000}
            onClose={handleAlertClose}
          >
            <Alert
              onClose={handleAlertClose}
              severity='info'
              variant='filled'
              sx={{ width: '100%' }}
            >
              No such characters
            </Alert>
          </Snackbar>
        </>
      ) : (
        <Loader />
      )}
    </Box>
  );
};

export default Home;
