import { ChevronRightIcon } from '@heroicons/react/24/solid';

import LandingHero from '../components/LandingHero';

import CardContainer from '../components/CardContainer';

const Home = () => {
  return (
    <div>
      <div className="sm:h-[70vh] h-[50vh] text-white mb-16">
        <LandingHero />
      </div>
      <div className="w-11/12 mx-auto">
        <div className="flex justify-between items-center mb-11">
          <h5 className="text-4xl font-bold">Featured Movies</h5>
          <div className="flex items-center gap-2 hover:underline cursor-pointer text-[#BE123C]">
            <p className=" text-lg">See More</p>
            <ChevronRightIcon className="w-5 h-5" color="#BE123C" />
          </div>
        </div>
        <CardContainer />
      </div>
    </div>
  );
};

export default Home;
