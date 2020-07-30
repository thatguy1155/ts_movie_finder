import React, { useEffect } from "react";
//import "./home.css";
import "./new.css";
import Header from "./Header";
import Movie from "./Movie";
import Search from "./Search";
import { mainPageProps} from '../types/homeTypes'
import { connect } from 'react-redux'
import {initialSearch} from '../actions/movieActions'



const Home = (props:mainPageProps) => {
  const {loading,movies,errorMessage,initialSearch} = props

  useEffect(() => {
    initialSearch("")
    // eslint-disable-next-line
},[])

    return (
        <div className="App">
          <Header text="HOOKED" />
          <Search />
          <p className="App-intro">Sharing a few of our favourite movies</p>
          <div className="movies">
            {loading && !errorMessage ? (
              <span>loading... </span>
            ) : errorMessage ? (
              <div className="errorMessage">{errorMessage}</div>
            ) : (
              movies.map((movie, index) => (
                <Movie key={`${index}-${movie.Title}`} movie={movie} />
              ))
            )}
          </div>
        </div>
    );
};

const mapStateToProps = (state:any) => ({
  movies: state.movieState.movies,
  loading: state.movieState.loading,
  errorMessage: state.movieState.errorMessage
  
})
const mapDispatchToProps = {initialSearch}


export default connect(mapStateToProps,mapDispatchToProps)(Home)


