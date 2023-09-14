import { PlayCircleIcon } from '@heroicons/react/24/solid';

import imdb from '../assets/imdb.png';
import rt from '../assets/rotten_tomato.png';

const MovieBanner = () => {
  return (
    <div className="bg-[url('https://images.cinemaexpress.com/uploads/user/imagelibrary/2019/5/17/original/john-wick-3-parabellum-movie-review-keanu-reeves.jpg')] w-full h-full bg-cover bg-center">
      <div className="w-full h-full flex  sm:justify-start justify-center sm:pl-16 pl-8 items-center backdrop-brightness-50">
        <div className="sm:w-3/12 flex justify-start flex-col">
          <h2 className="sm:text-5xl text-left text-xl font-bold sm:mb-4 mb-2">
            John Wick 3 : Parabellum
          </h2>
          <div className="flex gap-8 sm:mb-4 mb-2">
            <div className="flex items-center gap-3">
              <img src={imdb} alt="IMDB" className="!w-8 !h-4 object-cover" />
              <p>86.0/100</p>
            </div>
            <div className="flex items-center gap-3">
              <img src={rt} alt="IMDB" className="!w-4 !h-4 object-cover" />
              <p>97%</p>
            </div>
          </div>
          <p className="text-left text-sm sm:mb-4 mb-2">
            John Wick is on the run after killing a member of the international
            assassins&apos; guild, and with a $14 million price tag on his head,
            he is the target of hit men and women everywhere.
          </p>
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
