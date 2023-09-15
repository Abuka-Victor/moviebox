import Card from './Card';
import { useGetMovieListQuery } from '../store/reducers/movieReducer';
import Spinner from './Spinner';
import { Fragment } from 'react';

// https://image.tmdb.org/t/p/original/path.png

const CardContainer = () => {
  const { data = [], error, isLoading } = useGetMovieListQuery();
  if (error) {
    return <div>An error occurred</div>;
  }
  return (
    <div className="flex gap-20 flex-wrap justify-center">
      {isLoading ? (
        <Spinner />
      ) : (
        <Fragment>
          {data.map((movie) => {
            return <Card {...movie} key={movie.id} data-testid="movie-card" />;
          })}
        </Fragment>
      )}
    </div>
  );
};

export default CardContainer;
