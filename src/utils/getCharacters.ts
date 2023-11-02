import { queryFetch } from './queryFetch';

interface Filter {
  name?: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
}

export const getCharacters = (
  page: number,
  {
    name = "",
    status = "",
    species = "",
    type = "",
    gender = ""
  }: Filter = {}
  ) => {
  return queryFetch(`
    query {
      characters (
        page: ${page},
        filter: {
          name: "${name}"
          status: "${status}"
          species: "${species}"
          type: "${type}"
          gender: "${gender}"
        }
      ) {
        info {
          count
          pages
          next
        }
        results {
          id
          name
          species
          status
          location {
            name
          }
          episode {
            name
          }
          image
        }
      }
    }
  `)
    .then((res) => res.characters)
    .catch((err) => console.log(err));
};