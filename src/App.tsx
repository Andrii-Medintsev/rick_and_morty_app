import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import Image from 'mui-image';
import { Link } from 'react-router-dom';
import bg from './assets/bg.svg';
import logo from './assets/logo.svg';
import Filter from './component/Filter';
import characters from './staticCharacters.json';
import episodes from './staticEpisodes.json';

const App = () => {
  const getEpisode = (url: string) => {
    const ep = episodes.results.find((e) => e.url === url);

    return ep?.name || 'Blablabla';
  };

  const capitalize = (word: string) => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  };

  return (
    <Box sx={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
      <Box sx={{ width: '100%', maxWidth: '1440px', margin: 'auto' }}>
        <Box sx={{ padding: '10px 27px' }}>
          <Link to='/'>
            <Image src={logo} width={40} height={40} />
          </Link>
        </Box>

        <Box
          sx={{
            backgroundImage: `url(${bg})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          <Typography
            sx={{
              height: 345,
              fontSize: 100,
              fontWeight: 900,
              display: 'grid',
              placeContent: 'center',
              backgroundImage: { bg },
            }}
          >
            The Rick and Morty API
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          background: '#272B33',
          paddingX: '100px',
          paddingTop: '40px',
        }}
      >
        <Box sx={{ maxWidth: '1280px', margin: 'auto' }}>
          <Filter />
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '25px',
            }}
          >
            <>
              {characters.results.map((c) => (
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
        </Box>
      </Box>

      <Box
        sx={{
          background: '#202329',
          lineHeight: '390px',
          color: '#fff',
          fontSize: 36,
          textAlign: 'center',
        }}
      >
        Footer
      </Box>
    </Box>
  );
};

export default App;
