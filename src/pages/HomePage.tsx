/* eslint-disable react-hooks/exhaustive-deps */
import {
  Box,
  Pagination,
  PaginationItem
} from '@mui/material';
import { useEffect, useState } from 'react';
import CharacterCard from '../component/CharacterCard';
import Filter from '../component/Filter';
import { CharacterType } from '../types/CharacterType';
import { getCharacters } from '../utils/getCharacters';

const Home = () => {
  const [characters, setCharacters] = useState<CharacterType[] | []>([]);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getCharacters(currentPage)
      .then(res => {
        setCharacters(res.results);
        setPages(res.info.pages)
      })
  }, [currentPage]);

  // const getEpisode = (id: string) => {
  //   let name;

  //   queryFetch(`
  //     query {
  //       episodesByIds(ids: ${id}) {
  //       name
  //     }
  //   }`)
  //     .then(res => name = res.episodesByIds[0].name)

  //   return name;
  // };

  return (
    <Box sx={{ maxWidth: '1280px', margin: 'auto' }}>
      <Filter />
      <Box
        sx={{
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
              <CharacterCard key={c.id} character={c}/>
            ))}
          </>
        )}
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
    </Box>
  );
};

export default Home;
