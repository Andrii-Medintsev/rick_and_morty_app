import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { green } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { addHistoryItem } from '../features/historySlice';
import { NormalizedCharacterType } from '../types/CharacterType';

type Props = {
  character: NormalizedCharacterType;
};

const capitalize = (word: string) => {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
};

const CharacterCard: React.FC<Props> = ({ character }) => {
  const dispatch = useAppDispatch();
  const value = useAppSelector((state) => state.history.value);

  const handleAddToHistory = () => {
    dispatch(addHistoryItem(character.name));

    window.localStorage.setItem(
      'history',
      JSON.stringify([...value, character.name])
    );
  };

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
        width: '48%',
        // maxWidth: '100%',
        flexGrow: 1,
        background: '#3C3E44',
        borderRadius: '9px',
        color: '#f5f5f5',
      }}
    >
      <CardMedia component='img' sx={{ width: 220 }} image={image} alt={name} />
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
            // component='div'
            sx={{
              fontSize: 27,
              fontWeight: 800,
              '&:hover': {
                color: green[400],
              },
            }}
          >
            <Link to={`/character/${id}`} onClick={handleAddToHistory}>
              {name}
            </Link>
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
            {location}
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
            {episode}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CharacterCard;
