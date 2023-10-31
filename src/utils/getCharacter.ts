import { queryFetch } from './queryFetch';

export const getCharacter = (id: string | undefined) => {
  return queryFetch(`
    query {
      character(id: ${id}) {
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
  `)
    .then((res) => res.character)
    .catch((err) => console.log(err));
};