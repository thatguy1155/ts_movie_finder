import {initialStateProperties,Action} from '../types/reducerTypes'

//검색이 실행되기 전의 초기 상태
const initialState:initialStateProperties = {
    loading: true,
    movies: [],
    errorMessage: ""
  };

export default (state:initialStateProperties = initialState, action:Action) => {
    switch (action.type) {
        case "SEARCH_MOVIES_REQUEST":
          return {
            ...state,
            loading: true,
            errorMessage: ""
          };
        case "SEARCH_MOVIES_SUCCESS":
          return {
            ...state,
            loading: false,
            movies: action.payload
          };
        case "SEARCH_MOVIES_FAILURE":
          return {
            ...state,
            loading: false,
            errorMessage: action.error
          };
        default:
          return state;
      }
}