import React from "react";
import {filmPropTypes} from "../../common-prop-types";
import {Link} from "react-router-dom";
import VideoPlayer from "../../components/video-player/video-player";
import PropTypes from "prop-types";
import {withSmallMovieCardState} from "../../hocs/with-small-movie-card-state";
import {FilmPreviewSize} from "../../constants";

const SmallMovieCard = (props) => {
  const {film, handleMouseEnter, handleMouseLeave, playPreview} = props;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={`/films/${film.id}`}>
        <VideoPlayer
          poster={film.frame}
          src={film.video}
          playPreview={playPreview}
          width={FilmPreviewSize.WIDTH}
          height={FilmPreviewSize.HEIGHT}
          muted
        />
      </Link>
      <h3 className="small-movie-card__title">
        <Link
          to={`/films/${film.id}`}
          className="small-movie-card__link"
        >
          {film.title}
        </Link>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  film: filmPropTypes,
  handleMouseEnter: PropTypes.func,
  handleMouseLeave: PropTypes.func,
  playPreview: PropTypes.bool
};

export {SmallMovieCard};
export default withSmallMovieCardState(SmallMovieCard);
