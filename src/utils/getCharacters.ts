import { queryFetch } from './queryFetch';

export const getCharacters = (page: number) => {
  return queryFetch(`
    query {
      characters (page: ${page}) {
        info {
          count
          pages
          next
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
  `)
    .then((res) => res.characters)
    .catch((err) => console.log(err));
};