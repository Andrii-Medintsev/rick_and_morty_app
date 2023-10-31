import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { CharacterType } from '../types/CharacterType';
import { Link } from 'react-router-dom';
import { green } from '@mui/material/colors';

type Props = {
  character: CharacterType;
};

const capitalize = (word: string) => {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
};

const SingleCharacterCard: React.FC<Props> = ({ character }) => {
  return (
    <Card
      key={character.id}
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
        image={character.image}
        alt={character.name}
      />
      <CardContent
        sx={{
          display: 'flex',
          position: 'relative',
          flexDirection: 'column',
          gap: '30px',
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
            {character.name}
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
                  character.status === 'Alive'
                    ? '#55CC44'
                    : character.status === 'Dead'
                    ? '#D63D2E'
                    : '#9e9e9e'
                }`,
                borderRadius: '50%',
              },
            }}
          >
            {`${capitalize(character.status)} - ${character.species}`}
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
            {character.location.name}
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
            {character.episode[0].id}
          </Typography>
        </Box>

        <Typography sx={{
          position: 'absolute',
          bottom: 40,
          fontSize: 24,
          textDecoration: 'underline',
          textUnderlineOffset: 8,
          '&:hover': {
            color: green[500],
          }
        }}>
          <Link to='/'>Go back</Link>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SingleCharacterCard;
