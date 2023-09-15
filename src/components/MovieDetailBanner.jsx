/* eslint-disable react/prop-types */
import { PlayCircleIcon } from '@heroicons/react/24/solid';

import { useEffect, useState } from 'react';

const MovieDetailBanner = (props) => {
  const [imgUrl, setImgUrl] = useState('');
  useEffect(() => {
    setImgUrl(`https://image.tmdb.org/t/p/original${props.backdrop_path}`);
  }, [imgUrl, props.backdrop_path]);
  return (
    <div
      style={{ '--image-url': `url(${imgUrl})` }}
      className={`bg-[image:var(--image-url)] w-full h-full bg-cover bg-center`}
    >
      <div className="w-full h-full flex justify-center sm:pl-16 pl-8 items-center backdrop-brightness-50">
        <div className="sm:w-3/12 flex justify-start flex-col">
          <h2 className="sm:text-5xl text-left text-xl font-bold sm:mb-4 mb-2">
            {props.original_title}
          </h2>

          <button className="flex flex-col items-center justify-center gap-1 text-center py-2 uppercase text-sm font-semibold rounded-md sm:w-3/5 w-2/5">
            <PlayCircleIcon
              className="w-28 h-28"
              fill="#fff"
              color={'#fff'}
              fillOpacity={0.5}
            />
            <h4 className="text-2xl text-[#E8E8E8]">Watch Trailer</h4>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailBanner;
