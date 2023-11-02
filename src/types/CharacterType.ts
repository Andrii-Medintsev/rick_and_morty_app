
export type CharacterTypeFromServer = {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  location: {
    name: string;
  };
  image: string;
  episode: {
    name: string
  }[];
};

export type NormalizedCharacterType = {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  location: string;
  image: string;
  episode: string;
};