import React from "react";
import { useParams } from "react-router-dom";

import "../stylesheets/pages/Movie.scss";

import Text from "../components/common/Text";
import Header from "../components/Header";
import Loader from "../components/common/Loader";
import Title from "../components/common/Title";

import { useFetchMovie } from "../api/movie";
import { format } from "date-fns";
import { hasEmptyValue } from "../utils/helpers";
import { API_IMAGE_SEARCH, IMAGE_SIZE_400 } from "../constants/ApiRoutes";

const Movie = () => {
  const { movieId } = useParams();

  const { data: movie = {}, isLoading } = useFetchMovie({
    movieId,
  });

  return (
    <div className="Movie">
      <Header>
        <Title text="Movie Details" type="page" />
      </Header>
      {!hasEmptyValue(movie) && !isLoading ? (
        <div className="Movie__content">
          <div className="Movie__content-banner">
            <img
              alt="movie_thumbnail"
              src={`${API_IMAGE_SEARCH}/${IMAGE_SIZE_400}/${movie?.poster_path}`}
              height="auto"
              width="100%"
            />
          </div>
          <div className="Movie__content-details">
            <Title text={movie?.title} type="card" />
            <p>Overview</p>
            <Text text={movie?.overview} />
            <p>
              Release Date:{" "}
              {!hasEmptyValue(movie?.release_date) ? (
                <Text
                  text={format(new Date(movie?.release_date), "dd-MM-yyyy")}
                />
              ) : (
                "N/A"
              )}
            </p>
          </div>
        </div>
      ) : (
        <div className="Movie__loading">
          <Loader isLoading={isLoading} size="large" />
        </div>
      )}
    </div>
  );
};

export default Movie;
