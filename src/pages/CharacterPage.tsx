import { Box, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import FloatingButton from '../component/FloatingButton';
import Loader from '../component/Loader';
import SingleCharacterCard from '../component/SingleCharacterCard';
import { grey } from '@mui/material/colors';

const CharacterPage = () => {
  const id = useParams().id;
  const characters = useAppSelector((state) => state.characters.value);
  const character = characters.find((c) => String(c.id) === id);

  return (
    <Box sx={{ position: 'relative', height: '100%', width: '100%' }}>
      {character ? (
        <>
          <SingleCharacterCard />
          <FloatingButton />
        </>
      ) : (
        <Box>
          <Loader />
          <Link to='/'>
            <Typography
              variant='h4'
              fontWeight={300}
              sx={{
                color: grey[100],
              }}
            >
              Get me out of here..
            </Typography>
          </Link>
        </Box>
      )}
    </Box>
  );
};

export default CharacterPage;
