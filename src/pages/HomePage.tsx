import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Pagination,
  PaginationItem,
  Typography
} from '@mui/material';
import Filter from '../component/Filter';
// import characters from '../staticCharacters.json';
import { useEffect, useState } from 'react';
import episodes from '../staticEpisodes.json';

type CharacterType = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[] | [];
  url: string;
  created: string;
};

const getAllCharacters = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then((res) => res.json())
    .then((res) => res.results);
};

const Home = () => {
  const [characters1, setCharacters1] = useState<CharacterType[]>([]);

  useEffect(() => {
    getAllCharacters().then((res) => setCharacters1(res));
  }),
    [];

  const getEpisode = (url: string) => {
    const ep = episodes.results.find((e) => e.url === url);

    return ep?.name || 'Blablabla';
  };

  const capitalize = (word: string) => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  };

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
        <>
          {characters1.map((c) => (
            <Card
              key={c.id}
              sx={{
                display: 'flex',
                flexBasis: '48%',
                flexGrow: 2,
                background: '#3C3E44',
                borderRadius: '9px',
                color: '#f5f5f5',
              }}
            >
              <CardMedia
                component='img'
                sx={{ width: 220 }}
                image={c.image}
                alt={c.name}
              />
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <Box>
                  <Typography
                    variant='h5'
                    component='div'
                    sx={{
                      fontSize: 27,
                      fontWeight: 800,
                    }}
                  >
                    {c.name}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 16,
                      fontWeight: 500,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '7px',
                      '&::before': {
                        content: '""',
                        display: 'block',
                        width: '9px',
                        height: '9px',
                        backgroundColor: `${
                          c.status === 'Alive'
                            ? '#55CC44'
                            : c.status === 'Dead'
                            ? '#D63D2E'
                            : '#9e9e9e'
                        }`,
                        borderRadius: '50%',
                      },
                    }}
                  >
                    {`${capitalize(c.status)} - ${c.species}`}
                  </Typography>
                </Box>

                <Box>
                  <Typography
                    color='#9e9e9e'
                    sx={{
                      fontSize: 15,
                      fontWeight: 500,
                    }}
                  >
                    Last known location:
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 18,
                      fontWeight: 400,
                    }}
                  >
                    {c.location.name}
                  </Typography>
                </Box>

                <Box>
                  <Typography
                    color='#9e9e9e'
                    sx={{
                      fontSize: 15,
                      fontWeight: 500,
                    }}
                  >
                    First seen in:
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 18,
                      fontWeight: 400,
                    }}
                  >
                    {getEpisode(c.episode[0])}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </>
      </Box>

      <Pagination
        count={10}
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
