/* eslint-disable react/prop-types */
import { useState } from 'react';
import { HeartIcon } from '@heroicons/react/24/solid';

import imdb from '../assets/imdb.png';
import rt from '../assets/rotten_tomato.png';
import { useGetGenreListQuery } from '../store/reducers/movieReducer';
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
  const {
    data: genres = [],
    isLoading,
    error,
  } = useGetGenreListQuery(props.genre_ids);

  const [favorite, setFavorite] = useState(false);
  const navigate = useNavigate();
  if (error) return <p>An error occurred</p>;
  return (
    <div className="w-60 h-96 mb-10">
      <div className="relative">
        <img
          src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
          alt={props.original_title}
          className="h-80 w-60 object-cover cursor-pointer"
          onClick={() => navigate(`/movies/${props.id}`)}
        />
        <div className="flex justify-between px-5 absolute top-5 left-0 w-full z-10">
          <p className="text-xs bg-gray-500 rounded-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 w-20 px-2 py-1 flex justify-center items-center text-center text-white">
            {props.vote_count % 2 == 0 ? 'TV Series' : 'Movie'}
          </p>
          <p
            className="h-8 w-8 bg-gray-500 rounded-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 flex justify-center items-center text-center cursor-pointer"
            onClick={() => setFavorite(!favorite)}
          >
            <HeartIcon
              className="w-5 h-5"
              color={favorite ? '#BE123C' : '#fff'}
            />
          </p>
        </div>
      </div>
      <p className="text-[#9CA3AF] text-xs mt-3">
        {props.original_language.toUpperCase()} {props.release_date}
      </p>
      <h6
        className="mt-3 font-bold text-lg cursor-pointer"
        onClick={() => navigate(`/movies/${props.id}`)}
      >
        {props.original_title}
      </h6>
      <div className="mt-3 flex justify-between">
        <div className="flex items-center gap-3">
          <img src={imdb} alt="IMDB" className="!w-8 !h-4 object-cover" />
          <p>{props.vote_average}</p>
        </div>
        <div className="flex items-center gap-3">
          <img src={rt} alt="IMDB" className="!w-4 !h-4 object-cover" />
          <p>97%</p>
        </div>
      </div>
      <p className="text-[#9CA3AF] mt-3">
        {isLoading ? 'Genres' : genres.map((genre) => genre.name).join(', ')}
      </p>
    </div>
  );
};

export default Card;
