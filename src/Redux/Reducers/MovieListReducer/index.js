import {
  MOVIE_LIST_START,
  MOVIE_LIST_SUCCESS,
  MOVIE_LIST_FAILED
} from '../../Redux.constants';
import {
  fetchMovieStart,
  fetchMovieSuccess,
  fetchMovieFailed
} from './Helper';
import { INITIAL_STATE } from './initialState';

export default function MovieListReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case MOVIE_LIST_START:
      return fetchMovieStart(state, action.payload);
    case MOVIE_LIST_SUCCESS:
      return fetchMovieSuccess(state, action.payload);
    case MOVIE_LIST_FAILED:
      return fetchMovieFailed(state, action.payload);
    default:
      return { ...state };
  }
}
