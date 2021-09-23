import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";
export const Watched = () => {
  const { watched } = useContext(GlobalContext);
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Watched Movies</h1>
          <span className="count-pill">
            {watched.length} {watched.length > 1 ? "Movies" : "Movie"}{" "}
          </span>
        </div>
        {watched.length > 0 ? (
          <div className="movie-grid">
            {watched.map((movie) => (
              <div>
                <MovieCard movie={movie} type="watched" />
              </div>
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your list</h2>
        )}
      </div>
    </div>
  );
};
