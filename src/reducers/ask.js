import * as types from "../constants/appType";

const initialState = {
  isLoading: false,
  hasNewsToDisplay: false,
  news: [],
  loadMoreNews: [],
}

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCHING_ASK:
      return Object.assign({}, state, {
        isLoading: true,
      });

    case types.FETCHING_NEXT_PAGE_ASK:
      return Object.assign({}, state, {

      });


    case types.ERROR_GETTING_ASK:
      return Object.assign({}, state, {
        isLoading: false,
        news: []
      });

    case types.RECEIVED_DATA_ASK:
      return Object.assign({}, state, {
        isLoading: false,
        news: action.data.data
      });

    case types.RECEIVED_MORE_DATA_ASK:
      return Object.assign({}, state, {
        isLoading: false,
        loadMoreNews: action.data.data,
        news: state.news.concat(action.data.data),
      });

    default:
      return state;
  }
};
export default newsReducer;
