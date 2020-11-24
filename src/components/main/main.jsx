import React from "react";
import PropTypes from "prop-types";
import {filmsListPropTypes} from "../../common-prop-types";
import {connect} from "react-redux";
import GenresList from "../genres-list/genres-list";
import FilmsList from "../films-list/films-list";
import Header from "../header/header";
import {filteredFilmsSelector, genresFilterSelector} from "../../store/selectors";

const Main = (props) => {
  const {
    filteredFilms,
    filmsGenres,
    mainFilm: {title, genre, year},
  } = props;

  return (
    <>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img
            src="img/bg-the-grand-budapest-hotel.jpg"
            alt="The Grand Budapest Hotel"
          />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header
          className={`movie-card__head`}
        />

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img
                src="img/the-grand-budapest-hotel-poster.jpg"
                alt="The Grand Budapest Hotel poster"
                width="218"
                height="327"
              />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{year}</span>
              </p>

              <div className="movie-card__buttons">
                <button
                  className="btn btn--play movie-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <button
                  className="btn btn--list movie-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            <GenresList filmGenres={filmsGenres} />
          </ul>

          <div className="catalog__movies-list">
            <FilmsList filmsList={filteredFilms}/>
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">
              Show more
            </button>
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

Main.propTypes = {
  mainFilm: PropTypes.shape({
    title: PropTypes.string,
    genre: PropTypes.string,
    year: PropTypes.string
  }),
  filmsList: filmsListPropTypes,
  filteredFilms: filmsListPropTypes,
  isFilmsFetching: PropTypes.bool,
  filmsGenres: PropTypes.arrayOf(PropTypes.string)
};

const mapStateToProps = (state) => {
  return {
    filmsList: state.films.filmsList,
    filteredFilms: filteredFilmsSelector(state.films),
    filmsGenres: genresFilterSelector(state.films),
  };
};

export {Main};
export default connect(mapStateToProps)(Main);
