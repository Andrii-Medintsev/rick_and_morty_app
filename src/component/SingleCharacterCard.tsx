import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { green } from '@mui/material/colors';
import { Link, useParams } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';

const capitalize = (word: string) => {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
};

const SingleCharacterCard = () => {
  const characterId = useParams().id;
  const characters = useAppSelector((state) => state.characters.value);
  const character = characters.find((c) => c.id === characterId);

  if (!character) {
    return;
  }

  const {
    name,
    id,
    species,
    image,
    status,
    location,
    episode
  } = character;

  return (
    <Card
      key={id}
      sx={{
        display: 'flex',
        background: '#3C3E44',
        borderRadius: '9px',
        color: '#f5f5f5',
      }}
    >
      <CardMedia
        component='img'
        sx={{ width: 560, height: 560 }}
        image={image}
        alt={name}
      />
      <CardContent
        sx={{
          display: 'flex',
          position: 'relative',
          flexDirection: 'column',
          gap: '20px',
          padding: '40px',
        }}
      >
        <Box>
          <Typography
            variant='h5'
            component='div'
            sx={{
              fontSize: 48,
              fontWeight: 800,
            }}
          >
            {name}
          </Typography>

          <Typography
            sx={{
              fontSize: 24,
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: '7px',
              '&::before': {
                content: '""',
                display: 'block',
                width: '12px',
                height: '12px',
                backgroundColor: `${
                  status === 'Alive'
                    ? '#55CC44'
                    : status === 'Dead'
                    ? '#D63D2E'
                    : '#9e9e9e'
                }`,
                borderRadius: '50%',
              },
            }}
          >
            {`${capitalize(status)} - ${species}`}
          </Typography>
        </Box>

        <Box>
          <Typography
            color='#9e9e9e'
            sx={{
              fontSize: 24,
              fontWeight: 500,
            }}
          >
            Last known location:
          </Typography>

          <Typography
            sx={{
              fontSize: 36,
              fontWeight: 400,
            }}
          >
            {location}
          </Typography>
        </Box>

        <Box>
          <Typography
            color='#9e9e9e'
            sx={{
              fontSize: 24,
              fontWeight: 500,
            }}
          >
            First seen in:
          </Typography>

          <Typography
            sx={{
              fontSize: 36,
              fontWeight: 400,
            }}
          >
            {episode}
          </Typography>
        </Box>

        <Typography
          sx={{
            position: 'absolute',
            bottom: 40,
            fontSize: 24,
            textDecoration: 'underline',
            textUnderlineOffset: 8,
            '&:hover': {
              color: green[500],
            },
          }}
        >
          <Link to='/'>Go back</Link>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SingleCharacterCard;
