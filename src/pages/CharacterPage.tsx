import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CharacterType } from '../types/CharacterType';
import { getCharacter } from '../utils/getCharacter';
import SingleCharacterCard from '../component/SingleCharacterCard';
import FloatingButton from '../component/FloatingButton';
import { Box } from '@mui/material';
import Loader from '../component/Loader';

const CharacterPage = () => {
  const [character, setCharacter] = useState<CharacterType>();
  const id = useParams().id;

  useEffect(() => {
    getCharacter(id).then((res) => setCharacter(res));
  }, [id]);

  return (
    <Box sx={{ position: 'relative', height: '100%', width: '100%' }}>
      {character ? (
        <>
          {character && <SingleCharacterCard character={character} />}
          <FloatingButton />
        </>
      ) : (
        <Loader />
      )}
    </Box>
  );
};

export default CharacterPage;
