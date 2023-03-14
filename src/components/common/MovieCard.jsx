import React from "react";
import PropTypes from "prop-types";
import { format } from "date-fns";

import "../../stylesheets/components/common/MovieCard.scss";

import Card from "./Card";
import Title from "./Title";
import Text from "./Text";

import { hasEmptyValue } from "../../utils/helpers";
import {
  API_IMAGE_SEARCH,
  IMAGE_SIZE_ORIGINAL,
} from "../../constants/ApiRoutes";

const MovieCard = ({ video, onClick }) => {
  const { poster_path, title, release_date, overview } = video;
  return (
    <Card className="MovieCard" onClick={onClick}>
      <div className="MovieCard__Image">
        <img
          alt="movie_thumbnail"
          src={`${API_IMAGE_SEARCH}/${IMAGE_SIZE_ORIGINAL}/${poster_path}`}
          height="auto"
          width="100%"
        />
      </div>
      <div className="MovieCard__details">
        <div className="MovieCard__details-header">
          <Title text={title} type="card" />
        </div>
        <div className="MovieCard__details-duration">
          <Text text="Release Date: " />{" "}
          {!hasEmptyValue(release_date) ? (
            <Title
              text={format(new Date(release_date), "dd MMM yyyy")}
              type="list"
            />
          ) : (
            "N/A"
          )}
        </div>
        <Text text={overview} />
      </div>
    </Card>
  );
};

MovieCard.propTypes = {
  video: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    overview: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
