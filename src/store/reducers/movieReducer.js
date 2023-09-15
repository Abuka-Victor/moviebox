/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const movieAPI = createApi({
  reducerPath: 'movieAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3',
    prepareHeaders: (headers) => {
      headers.set(
        'Authorization',
        `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MWQ0NGYwZjQ2ZDJiNTFiOWMzODkyNTQ5ZWZlMDlmMiIsInN1YiI6IjY0ZmYyMzk3ZmZjOWRlMGVlMjA4OWU0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4n0xXU1RXXZD-4jOFuHV-K66694z5VWYyXZBen25CfQ`
      );
    },
  }),
  endpoints: (builder) => ({
    getMovieList: builder.query({
      query: () => ({
        url: 'discover/movie?include_adult=false&include_video=false&language=en-US&page=2',
      }),
      transformResponse: (response) => response.results,
    }),
    getGenreList: builder.query({
      query: (ids) => ({
        url: 'genre/movie/list',
      }),
      transformResponse: (response, meta, ids) =>
        response.genres.filter((genre) => {
          return ids.includes(genre.id);
        }),
    }),
    getPopularMovieList: builder.query({
      query: () => ({
        url: 'movie/popular?language=en-US&page=1',
      }),
      transformResponse: (response) => response.results,
    }),
  }),
});

export const {
  useGetMovieListQuery,
  useGetGenreListQuery,
  useGetPopularMovieListQuery,
} = movieAPI;
