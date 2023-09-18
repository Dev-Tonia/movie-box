import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RiStarFill } from "react-icons/ri";

import Tickets from "../../public/images/Tickets.png";
import List from "../../public/images/List.png";
import SuggestedMovies from "../../public/images/Suggested-movie.png";
import ExpandArrow from "../../public/images/Expand-Arrow.png";
import Watch from "../../public/images/watch.png";

import MenuBar from "../components/MenuBar";

const API_KEY = `3ce2b5fcb3edb153888e064f88e7eb16`;
const API_URL = "https://api.themoviedb.org/3/movie/";

function MovieDetails() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [credits, setCredits] = useState(null);
  const [trailerThumbnail, setTrailerThumbnail] = useState(null);

  useEffect(() => {
    // Fetch movie details using the movie_id and API key
    fetch(`${API_URL}${id}?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => setMovieDetails(data))
      .catch((error) => console.error("Error fetching movie details:", error));

    // Fetch movie credits to get director, writer, and stars
    fetch(`${API_URL}${id}/credits?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => setCredits(data))
      .catch((error) => console.error("Error fetching movie credits:", error));

    // Fetch movie videos to get trailer thumbnail
    fetch(`${API_URL}${id}/videos?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        const trailer = data.results.find((video) => video.type === "Trailer");
        if (trailer) {
          setTrailerThumbnail(
            `https://img.youtube.com/vi/${trailer.key}/0.jpg`
          );
        }
      })
      .catch((error) => console.error("Error fetching movie videos:", error));
  }, [id]);

  if (!movieDetails || !credits || trailerThumbnail === null) {
    return <div>Loading...</div>;
  }

  const director = credits.crew.find((person) => person.job === "Director");
  const writer = credits.crew.find((person) => person.job === "Writer");
  const stars = credits.cast.slice(0, 5); // Get the top 5 cast members

  return (
    <section className=" mx-10 mt-3 md:mt-0 md:mx-0 md:flex">
      <MenuBar className=" " />
      <div className="wrapper md:mx-10 mt-2 md:mt-7 mb-2">
        <div className=" h-[440px] overflow-hidden mb-3 rounded-3xl relative">
          {trailerThumbnail && (
            <img
              className="trailer-thumbnail"
              src={trailerThumbnail}
              alt="Trailer Thumbnail"
            />
          )}
          <div className=" absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center flex-col gap-2">
            <button className="bg-[#e8e8e834] flex items-center justify-center border-none cursor-pointer h-20 w-20 rounded-full">
              <img className=" w-11 " src={Watch} alt="Watch Icon" />
            </button>
            <p className=" text-[#e8e8e8] bg-zinc-600 bg-opacity-80">
              Watch Trailer
            </p>
          </div>
        </div>
        <article className="  md:flex gap-4 ">
          <div className="md:w-2/3  right-section">
            <div className="flex justify-between">
              <div className=" flex-col min-[950px]:flex-row flex  space-x-2 mb-2 text-base font-medium text-gray-600">
                <p className="font-bold text-lg " data-testid=" movie-title">
                  {movieDetails.title}
                </p>

                <div className=" flex">
                  <p data-testid=" movie-release-date">
                    • {movieDetails.release_date}
                  </p>
                  <p> • PG-13</p>
                  <p data-testid=" movie-runtime">• {movieDetails.runtime}m</p>
                </div>
              </div>
              <div className="  md:hidden text-gray-950 flex   ">
                <RiStarFill className=" text-yellow-200" />
                <span>8.5|860k</span>
              </div>
            </div>
            <div className="movie-desctiption" data-testid="movie-overview">
              <p>{movieDetails.overview}</p>
            </div>

            <div className="movie-director">
              Director:{" "}
              <span>{director ? director.name : "Not available"}</span>
            </div>

            <div className="movie-writer">
              Writer: <span>{writer ? writer.name : "Not available"}</span>
            </div>
            <div className="movie-stars">
              Stars: <span>{stars.map((star) => star.name).join(", ")}</span>
            </div>
            <div className="movie-top-position ">
              <button className="btn btn-movie-details btn-dark ">
                Top rated movies #65
              </button>
              <button className="btn btn-widest">
                Awards 9 nominations
                <span>
                  <img
                    className="expant-arrow-icon"
                    src={ExpandArrow}
                    alt="Expand Arrow "
                  />
                </span>
              </button>
            </div>
          </div>
          <div className=" left-selection mt-4 md:mt-0 md:w-1/3">
            <div className=" hidden md:flex text-gray-950">
              <RiStarFill className=" text-yellow-200" />
              <span>8.5|860k</span>
            </div>
            <div className="movie-details-cta-cnt ">
              <button className="btn btn-movie-details btn-dark">
                <span>
                  <img
                    className="ticket-icon"
                    src={Tickets}
                    alt="Two Tickets Icon"
                  />
                </span>
                See Showtimes
              </button>

              <button className="btn btn-movie-details btn-light">
                <span>
                  <img className="list-icon" src={List} alt="List Icon" />
                </span>
                More watch options
              </button>
            </div>
            <div className="sugessted-movies">
              <img
                className="suggested-movies-img"
                src={SuggestedMovies}
                alt="Suggested Movies "
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default MovieDetails;
