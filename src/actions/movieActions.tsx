import { SEARCH_MOVIES_REQUEST,SEARCH_MOVIES_SUCCESS,SEARCH_MOVIES_FAILURE } from './types'
export const API_CALL = (searchValue:string) => {
  return fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
      .then(response => response.json())
}

export const initialSearch = () => (dispatch:any) => {
  console.log("here")
  API_CALL("man")
            .then(jsonResponse => {
        
            dispatch({
                type: SEARCH_MOVIES_SUCCESS,
                payload: jsonResponse.Search
        	});
      	});
}

export const search = (searchValue:string) => (dispatch:any) => {
    console.log(searchValue)
    dispatch({
      type: SEARCH_MOVIES_REQUEST
    });

    API_CALL(searchValue)
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          dispatch({
            type: SEARCH_MOVIES_SUCCESS,
            payload: jsonResponse.Search
          });
        } else {
          dispatch({
            type: SEARCH_MOVIES_FAILURE,
            error: jsonResponse.Error
          });
      }
      });
  };