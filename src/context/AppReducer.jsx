export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_WATCHLIST":
      return { ...state, watchlist: [...state.watchlist, action.payload] };
    case "ADD_MOVIE_TO_WATCHED":
      return {
        ...state,
        watched: [...state.watched, action.payload],
        watchlist: state.watchlist.filter((movie) => movie !== action.payload),
      };
    case "REMOVE_MOVIE_FROM_WATCHLIST":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    case "MOVE_TO_WATCHLIST":
      return {
        ...state,
        watchlist: [...state.watchlist, action.payload],
        watched: state.watched.filter((movie) => movie !== action.payload),
      };
    case "REMOVE_FROM_WATCHED":
      return {
        ...state,
        watched: state.watched.filter((movie) => movie.id !== action.payload),
      };
    default:
      return state;
  }
};
