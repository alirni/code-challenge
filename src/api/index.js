import axios from 'axios';

export const getGenreApi = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  return data;
};

export const discoverApi = async (genreId) => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=${genreId}&primary_release_year=2022&region=US&vote_count.gte=7`
  );

  return data.results;
};

export const configurationApi = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/configuration?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  return data;
};
