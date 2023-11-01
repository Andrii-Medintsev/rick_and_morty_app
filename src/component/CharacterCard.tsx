import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { green } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import { CharacterType } from '../types/CharacterType';

type Props = {
  character: CharacterType;
};

const capitalize = (word: string) => {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
};

const CharacterCard: React.FC<Props> = ({ character }) => {
  return (
    <Card
      key={character.id}
      sx={{
        display: 'flex',
        minWidth: '49%',
        maxWidth: '100%',
        flexGrow: 1,
        background: '#3C3E44',
        borderRadius: '9px',
        color: '#f5f5f5',
      }}
    >
      <CardMedia
        component='img'
        sx={{ width: 220 }}
        image={character.image}
        alt={character.name}
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
              '&:hover': {
                color: green[400],
              },
            }}
          >
            <Link to={`/character/${character.id}`}>{character.name}</Link>
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
            {character.location.name}
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
            {character.episode[0].id}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CharacterCard;
