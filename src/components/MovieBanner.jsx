/* eslint-disable react/prop-types */
import { PlayCircleIcon } from '@heroicons/react/24/solid';

import imdb from '../assets/imdb.png';
import rt from '../assets/rotten_tomato.png';
import { useEffect, useState } from 'react';

const MovieBanner = (props) => {
  const [imgUrl, setImgUrl] = useState('');
  useEffect(() => {
    setImgUrl(`https://image.tmdb.org/t/p/original${props.backdrop_path}`);
  }, [imgUrl, props.backdrop_path]);
  return (
    <div
      style={{ '--image-url': `url(${imgUrl})` }}
      className={`bg-[image:var(--image-url)] w-full h-full bg-cover bg-center`}
    >
      <div className="w-full h-full flex  sm:justify-start justify-center sm:pl-16 pl-8 items-center backdrop-brightness-50">
        <div className="sm:w-3/12 flex justify-start flex-col">
          <h2 className="sm:text-5xl text-left text-xl font-bold sm:mb-4 mb-2">
            {props.original_title}
          </h2>
          <div className="flex gap-8 sm:mb-4 mb-2">
            <div className="flex items-center gap-3">
              <img src={imdb} alt="IMDB" className="!w-8 !h-4 object-cover" />
              <p>{props.vote_average}</p>
            </div>
            <div className="flex items-center gap-3">
              <img src={rt} alt="IMDB" className="!w-4 !h-4 object-cover" />
              <p>97%</p>
            </div>
          </div>
          <p className="text-left text-sm sm:mb-4 mb-2">{props.overview}</p>
          <button className="bg-[#BE123C] flex items-center justify-center gap-1 text-center py-2 uppercase text-sm font-semibold rounded-md sm:w-3/5 w-2/5">
            <PlayCircleIcon className="w-6 h-6" />
            <h4>Watch Trailer</h4>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieBanner;
