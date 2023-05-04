
import { connect } from 'react-redux';
import Dashboard from './Dashboard';
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
