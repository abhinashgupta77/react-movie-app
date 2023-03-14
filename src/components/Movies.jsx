import React, { useState } from "react";

import "../stylesheets/components/Movies.scss";

import MovieCard from "./common/MovieCard";
import Pagination from "./common/Pagination/Pagination";
import Text from "./common/Text";
import FullscreenLoader from "./common/FullscreenLoader";

import { useFetchMovies } from "../api/movie";
import { hasEmptyValue } from "../utils/helpers";
import { goToMovieDetails } from "../utils/navigationHelpers";

const Movies = () => {
  const [pageNo, setPage] = useState(1);

  const {
    data: { page, results: movies = [], total_pages = 1 } = {},
    isLoading,
  } = useFetchMovies({
    pageNo,
  });

  return (
    <>
      <div className="Movies">
        <div className="Movies__header">
          <Pagination
            pageCount={total_pages}
            onPageChange={setPage}
            currentPage={pageNo}
          />
        </div>
        {!hasEmptyValue(movies) && !isLoading && (
          <div className="Movies__cards">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                video={movie}
                onClick={() => goToMovieDetails(movie.id)}
              />
            ))}
          </div>
        )}
        {hasEmptyValue(movies) && !isLoading && (
          <div className="Movies--empty">
            <Text text="No movies found" />
          </div>
        )}
      </div>
      <FullscreenLoader isOpen={isLoading} />
    </>
  );
};

export default Movies;
