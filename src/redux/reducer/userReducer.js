const initial = {
  user: [],
  loading: false,
  error: null,
};

export const postReducer = (state = initial, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, loading: false, user: action.payload };

    case "FETCH_LOADING":
      return { ...state, loading: true };

    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
