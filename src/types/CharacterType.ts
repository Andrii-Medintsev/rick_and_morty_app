import { EpisodeType } from './EpisodeType';

export type CharacterType = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  location: {
    name: string;
  };
  image: string;
  episode: EpisodeType[];
};