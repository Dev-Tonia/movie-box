import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import trailer from "../../public/images/trailer.png";
export default function MovieDetails() {
  const { id } = useParams();
  const [detail, setDetails] = useState({});
  async function fetchDetails() {
    const resp = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?&append_to_response=videos,credit&api_key=3ce2b5fcb3edb153888e064f88e7eb16`
    );
    const data = await resp.json();
    setDetails(data);
  }
  useEffect(() => {
    fetchDetails();
  }, []);
  return (
    <div className="w-11/12 mx-auto my-11">
      <div className=" h-[440px] overflow-hidden mb-3">
        <img
          src={`https://image.tmdb.org/t/p/w500${detail.poster_path}`}
          alt=""
          className=" w-full"
        />
      </div>

      <div>
        <div className=" flex items-center space-x-2 text-lg mb-2 font-semibold">
          <p>{detail.title} </p> <p>• {detail.release_date}</p>
          <p> • PG-13</p> <p>• {detail.runtime}m</p>
        </div>
      </div>
      <p>{detail.overview}</p>
    </div>
  );
}
