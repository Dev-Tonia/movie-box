import { Link } from "react-router-dom";
import MoviePoster from "../../public/images/Poster-Image.png";
import fruit from "../../public/images/fruit.png";
import imob from "../../public/images/imob.png";
const MovieCard = (props) => {
  const movie = props.movie;
  return (
    <Link to={movie.id.toString()}>
      <div data-testid="movie-card">
        <div className="poster h-[370px]" data-testid="movie-poster">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            className="w-full h-full bg-cover"
            alt=""
          />
        </div>
        <p className=" text-xs font-bold mt-1" data-testid="movie-release-date">
          {movie.release_date}
        </p>
        <h5 className=" font-bold my-1" data-testid=" movie-title">
          {movie.title}
        </h5>
        <div className="rating flex items-center justify-between mb-0.5">
          <div className="flex items-center space-x-2">
            <img src={imob} alt="" />
            <span className=" text-xs">86/100</span>
          </div>
          <div className="flex items-center space-x-2">
            <img src={fruit} alt="" />
            <span className="text-xs">{movie.vote_average * 10}%</span>
          </div>
        </div>
        <p className=" text-xs font-bold">Action, Adventure, Horror</p>
      </div>
    </Link>
  );
};

export default MovieCard;
