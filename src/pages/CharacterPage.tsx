import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CharacterType } from '../types/CharacterType';
import { getCharacter } from '../utils/getCharacter';
import SingleCharacterCard from '../component/SingleCharacterCard';

const CharacterPage = () => {
  const [character, setCharacter] = useState<CharacterType>();
  const id = useParams().id;

  useEffect(() => {
    getCharacter(id)
      .then(res => setCharacter(res));
  }, [id])

  return (
    <>
      {character && (
        <SingleCharacterCard character={character}/>
      )}
    </>
  )
}

export default CharacterPage