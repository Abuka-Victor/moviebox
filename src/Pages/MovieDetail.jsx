/* eslint-disable no-unused-vars */
import { useParams } from 'react-router-dom';
import MovieDetailBanner from '../components/MovieDetailBanner';

import {
  StarIcon,
  ChevronDownIcon,
  TicketIcon,
  ListBulletIcon,
} from '@heroicons/react/24/solid';
import {
  useGetMovieByIDQuery,
  useGetMovieCreditsByIDQuery,
  useGetMovieListQuery,
} from '../store/reducers/movieReducer';
import { Fragment } from 'react';

const MovieDetail = (props) => {
  const { id } = useParams();
  const {
    data: movieDetails = [],
    isLoading,
    error,
  } = useGetMovieByIDQuery(id);
  const {
    data: movieCredits = { cast: [], crew: [] },
    isLoadingCredits,
    errorCredits,
  } = useGetMovieCreditsByIDQuery(id);
  const {
    data: movieList = [],
    isLoadingList,
    errorList,
  } = useGetMovieListQuery();

  if (error) return <div>An error occurred</div>;

  return (
    <div>
      <div className="sm:h-[70vh] h-[50vh] text-white mb-16">
        <MovieDetailBanner {...movieDetails} />
      </div>
      <div className="w-11/12 mx-auto">
        <div className="flex justify-between items-center mb-6 sm:flex-row flex-col">
          <div className="flex gap-4 items-center">
            <p className="text-2xl">
              <span data-testid="movie-title">
                {movieDetails.original_title}
              </span>
              •{' '}
              <span data-testid="movie-release-date">
                {isLoading
                  ? 'Year'
                  : new Date(movieDetails.release_date).toUTCString()}
              </span>
              • PG-
              {movieDetails.adult ? '13' : '18'} •
              <span data-testid="movie-runtime">{movieDetails.runtime}m</span>
            </p>
            {isLoading
              ? 'Genres'
              : movieDetails.genres.map((genre) => {
                  return (
                    <p
                      className="text-[#B91C1C] text-xs border border-solid border-[#F8E7EB] rounded-xl text-center px-4 py-1"
                      key={genre.id}
                    >
                      {genre.name}
                    </p>
                  );
                })}
          </div>
          <div className="flex gap-3 items-center">
            <StarIcon className="w-5 h-5" color="gold" />
            <p className="text-[#E8E8E8] text-2xl">
              {movieDetails.vote_average}{' '}
              <span className="text-[#666] text-xl">
                | {movieDetails.vote_count}
              </span>
            </p>
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-[8fr_4fr] gap-7 flex flex-col">
          <div className="text-xl font-light">
            <p className="mb-9" data-testid="movie-overview">
              {movieDetails.overview}
            </p>
            <p className="mb-8">
              Director : <span className="text-[#BE123C]">Steve Boeddeker</span>
            </p>
            <p className="mb-8">
              Writers :{' '}
              <span className="text-[#BE123C]">
                {isLoadingCredits
                  ? 'Crew Writers'
                  : movieCredits.crew
                      .filter((gen, id) => id <= 4)
                      .map((genre) => genre.name)
                      .join(', ')}{' '}
              </span>
            </p>
            <p className="mb-8">
              Stars :{' '}
              <span className="text-[#BE123C]">
                {isLoadingCredits
                  ? 'Actors'
                  : movieCredits.cast
                      .filter((gen, id) => id <= 4)
                      .map((genre) => genre.name)
                      .join(', ')}
              </span>
            </p>
            <div className="flex items-center gap-6 border border-[#C7C7C7] rounded-[10px] font-normal">
              <div>
                <p className="bg-[#BE123C] text-white rounded-[10px] px-5 py-3">
                  Top rated movie #65
                </p>
              </div>
              <div className="flex justify-between items-center flex-1 pr-7">
                <p>Awards 9 nominations</p>
                <ChevronDownIcon className="w-6 h-6 cursor-pointer" />
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-y-3">
              <button className="bg-[#BE123C] rounded-[10px] flex justify-center items-center gap-3 py-3">
                <TicketIcon className="w-6 h-6" color="#fff" />
                <p className="text-white text-xl">See Showtimes</p>
              </button>
              <button className="bg-[#be123d1a] rounded-[10px] flex justify-center items-center gap-3 py-3 border border-[#BE123C]">
                <ListBulletIcon className="w-6 h-6" color="#000" />
                <p className="text-black text-xl">More Watch Options</p>
              </button>
            </div>
            <div className="flex overflow-hidden rounded-xl mt-8 relative cursor-pointer">
              {isLoadingList ? (
                'Next Rated Movies'
              ) : (
                <Fragment>
                  {movieList
                    .filter((movie, id) => id > 9 && id <= 12)
                    .map((movie, id) => {
                      return (
                        <img
                          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                          alt="movie name"
                          className={`w-[33%] h-[229px] object-cover ${
                            id === 1 ? 'flex-1' : ''
                          }`}
                          key={movie.id}
                        />
                      );
                    })}
                </Fragment>
              )}
              <div className="absolute bottom-0 text-white flex justify-center items-center bg-[#12121280] w-full py-3 px-4 gap-3">
                <ListBulletIcon className="w-6 h-6" color="#fff" />
                <p>The best movies and shows in september</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
