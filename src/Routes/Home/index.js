

import { connect } from 'react-redux';
import Home from './Home';
import { fetchMovieList } from '../../Redux/Actions';

const mapStateToProps = (state) => {
  return {
    ...state.MovieListReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovieList: (params) => dispatch(fetchMovieList(params)),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
