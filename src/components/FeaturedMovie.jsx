import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import SwiperCard from "./swiper/SwiperCard";
const FeaturedMovie = () => {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getMovies = async () => {
    setIsLoading(true);
    const resp = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=3ce2b5fcb3edb153888e064f88e7eb16"
    );
    setIsLoading(false);
    const data = await resp.json();
    setMovieList(data.results);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex justify-between items-center my-7">
        <h2 className=" text-3xl font-bold md:text-4xl">Featured Movie</h2>
        <p className=" underline text-rose">see more</p>
      </div>

      <div className="grid grid-cols-1 min-[490px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
        {isLoading && <p className=" text-center text-xl">Loading....</p>}
        {movieList.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedMovie;
