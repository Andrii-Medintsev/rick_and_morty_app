import { Box } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import FloatingButton from '../component/FloatingButton';
import Loader from '../component/Loader';
import SingleCharacterCard from '../component/SingleCharacterCard';

const CharacterPage = () => {
  const id = useParams().id;
  const characters = useAppSelector((state) => state.characters.value);
  const character = characters.find((c) => String(c.id) === id);
  const navigate = useNavigate();


  return (
    <Box sx={{ position: 'relative', height: '100%', width: '100%' }}>
      {character ? (
        <>
          <SingleCharacterCard />
          <FloatingButton />
        </>
      ) : (
        <>
        <Loader />
        {
          setTimeout(() => {
            navigate('/');
          }, 2000)
        }
        </>
      )}
    </Box>
  );
};

export default CharacterPage;
