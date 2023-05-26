import React, { useEffect, useState } from "react";
import axios from "../../axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import Loader from "../loader/Loader";

const base_url = "https://image.tmdb.org/t/p/original/";

export default function Row({ title, fetchURL, isLargeRow, data }) {
  const [movies, setMovies] = useState([
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ]);
  const [loading, setLoading] = useState(true);

  const { rowId, setRowId, trailerUrl, setTrailerUrl } = data;

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      setLoading(false);
    }
    fetchData();
  }, [fetchURL]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
      setRowId("");
    } else {
      movieTrailer(movie?.name || movie?.title || "")
        .then((url) => {
          const urlParam = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParam.get("v"));
          setRowId(title);
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie, index) =>
          loading ? (
            <Loader isLargeRow={isLargeRow} key={index} />
          ) : (
            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          )
        )}
      </div>
      {rowId === title && trailerUrl && (
        <YouTube videoId={trailerUrl} opts={opts} />
      )}
    </div>
  );
}
