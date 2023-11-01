import { queryFetch } from './queryFetch';

type Props = {
  name: string;
  type: string;
  dimension: string;
}

export const getCharactersByLocation = ({
  name,
  type,
  dimension,
}: Props) => {
  return queryFetch(`
  query {
    locations (filter: {
      name:"${name}",
      type: "${type}",
      dimension: "${dimension}"
  }) {
      info {
        count
        pages
      }
      results {
        residents {
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
  }
  `).then(res => res.locations)
    .catch(err => console.log(err));
};