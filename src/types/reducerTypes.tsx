
import {ServerData} from './actionTypes'
 
export type Action =
 | { type: 'SEARCH_MOVIES_REQUEST' }
 | { type: 'SEARCH_MOVIES_SUCCESS', payload: ServerData[] }
 | { type: 'SEARCH_MOVIES_FAILURE', error: string };

export interface initialStateProperties {
    loading?:boolean,
    movies:ServerData[],
    errorMessage?:string
  }
