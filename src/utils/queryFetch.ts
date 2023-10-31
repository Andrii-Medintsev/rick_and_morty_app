export const queryFetch = (query: string) => {
  return fetch('https://rickandmortyapi.com/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query,
    }),
  })
    .then((res) => res.json())
    .then(data => data.data);
};