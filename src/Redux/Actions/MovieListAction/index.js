import axios from 'axios';
import {
    MOVIE_LIST_START,
    MOVIE_LIST_SUCCESS,
    MOVIE_LIST_FAILED,
} from '../../Redux.constants';

export const fetchMovieList = (payload, cb) => {
    return (dispatch) => {
        dispatch({
            type: MOVIE_LIST_START,
            payload: {},
        });
        return axios
            .get(`http://www.omdbapi.com/?t=${payload.searchText}&apikey=cda09633`)
            .then((res) => {
                dispatch({
                    type: MOVIE_LIST_SUCCESS,
                    payload: {
                        data: res.data,
                        payload: payload
                    }
                });
                cb && cb(true)
            })
            .catch((err) => {
                dispatch({
                    type: MOVIE_LIST_FAILED,
                    payload: {
                        data: err
                    }
                });
                cb && cb(false)
            });
    };
}
