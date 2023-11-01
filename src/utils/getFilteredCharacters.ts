import { queryFetch } from './queryFetch';

type Props = {
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
}

export const getFilteredCharacters = ({
  name,
  status,
  species,
  type,
  gender
}: Props) => {
  return queryFetch(`
    query {
      characters (filter: {
        name: "${name}"
        status: "${status}"
        species: "${species}"
        type: "${type}"
        gender: "${gender}"
      }) {
        info {
          count
          pages
        }
        results {
          id
          name
          image
          status
          species
          location {
            name
          }
          episode {
            id
          }
        }
      }
    }
  `).then(res => res.characters)
    .catch(err => console.log(err));
};