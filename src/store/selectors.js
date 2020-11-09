import {createSelector} from "reselect";
import {ALL_GENRES} from "../constants";

const filmsListSelector = (state) => state.filmsList;
const genreFilterSelector = (state) => state.genre;

export const filteredFilmsSelector = createSelector(
    filmsListSelector,
    genreFilterSelector,
    (filmList, genreFilter) => {
      filmList.filter(
          (film) => {
            if (genreFilter === ALL_GENRES) {
              return true;
            }
            return film.genre === genreFilter;
          });
    }
);

export const genresFilterSelector = createSelector(
    filmsListSelector,
    (filmList) => Array.from(
        filmList.reduce((acc, film) => {
          acc.add(film.genre);
          return acc;
        }, new Set([ALL_GENRES]))
    )
);