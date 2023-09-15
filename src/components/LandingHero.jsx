import { SwiperSlide } from 'swiper/react';
import Slider from './Slider';
import MovieBanner from './MovieBanner';
import { useGetPopularMovieListQuery } from '../store/reducers/movieReducer';

const LandingHero = () => {
  const { data = [] } = useGetPopularMovieListQuery();
  return (
    <div className="sm:h-[70vh] h-[50vh]">
      <Slider>
        {data
          .filter((movie, id) => id <= 4)
          .map((movie) => {
            return (
              <SwiperSlide key={movie.id}>
                <MovieBanner {...movie} />
              </SwiperSlide>
            );
          })}
      </Slider>
    </div>
  );
};

export default LandingHero;
