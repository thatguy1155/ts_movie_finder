import {ServerData} from './actionTypes'
export interface mainPageProps {
    loading?:boolean,
    movies:ServerData[],
    errorMessage?:string,
    initialSearch:(searchValue:string) => void
  }