
export const fetchMovieStart = (state, payload) => {
  return {
    ...state,
    movieDataApi: {
      ...state.movieDataApi,
      loading: true,
      error: false,
      apiCalled: true
    }
  };
}

export const fetchMovieSuccess = (state, payload) => {
  if (payload.data.Error || payload.data.Error === "Movie not found!") {
    debugger
    return {
      ...state,
      movieDataApi: {
        loading: false,
        error: false,
        apiCalled: true,
        data: {},
        searchText: ""
      },
    };
  }
  return {
    ...state,
    movieDataApi: {
      loading: false,
      error: false,
      apiCalled: true,
      data: payload.data,
      searchText: payload.payload.searchText
    },
  };
}


export const fetchMovieFailed = (state, payload) => {
  return {
    ...state,
    movieDataApi: {
      loading: false,
      error: true,
      data: {},
      apiCalled: true,
      searchText: ""
    }
  };
}