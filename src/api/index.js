/* eslint-disable no-undef */
import axios from 'axios';

const callApi = async ({ url, params }) =>
  axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}${url}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&${params}`
  );

export const getGenreApi = async () => {
  const { data } = await callApi({
    url: '/genre/movie/list',
  });

  return data;
};

export const discoverApi = async (genreId) => {
  const { data } = await callApi({
    url: '/discover/movie',
    params: `with_genres=${genreId}&primary_release_year=2022&region=US&vote_count.gte=7`,
  });

  return data.results;
};

export const configurationApi = async () => {
  const { data } = await callApi({
    url: '/configuration',
  });

  return data;
};

export const getMovieApi = async (id) => {
  const { data } = await callApi({
    url: `/movie/${id}`,
    params: 'append_to_response=images',
  });

  return data;
};
