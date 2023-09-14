import { ChevronRightIcon, HeartIcon } from '@heroicons/react/24/solid';

import LandingHero from '../components/LandingHero';

import imdb from '../assets/imdb.png';
import rt from '../assets/rotten_tomato.png';
import st from '../assets/stranger_things.png';
import Card from '../components/Card';

const Home = () => {
  return (
    <div>
      <div className="sm:h-[70vh] h-[50vh] text-white mb-16">
        <LandingHero />
      </div>
      <div className="w-4/5 mx-auto">
        <div className="flex justify-between items-center mb-11">
          <h5 className="text-4xl font-bold">Featured Movies</h5>
          <div className="flex items-center gap-2 hover:underline cursor-pointer text-[#BE123C]">
            <p className=" text-lg">See More</p>
            <ChevronRightIcon className="w-5 h-5" color="#BE123C" />
          </div>
        </div>
        <div className="flex gap-20 flex-wrap justify-center">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Home;
