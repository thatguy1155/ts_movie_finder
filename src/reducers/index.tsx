import { combineReducers } from 'redux'
import movieReducer from './movieReducer'




//send all the reducers back to the store
export default combineReducers({
    movieState: movieReducer 
})