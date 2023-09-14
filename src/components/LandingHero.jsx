import { SwiperSlide } from 'swiper/react';
import Slider from './Slider';
import MovieBanner from './MovieBanner';

const LandingHero = () => {
  return (
    <div className="sm:h-[70vh] h-[50vh]">
      <Slider>
        <SwiperSlide>
          <MovieBanner />
        </SwiperSlide>
        <SwiperSlide>
          <MovieBanner />
        </SwiperSlide>
        <SwiperSlide>
          <MovieBanner />
        </SwiperSlide>
      </Slider>
    </div>
  );
};

export default LandingHero;
