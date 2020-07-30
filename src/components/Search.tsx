import React, { useState, ChangeEvent } from "react";
import {searchProps} from '../types/searchTypes'
import {search} from '../actions/movieActions'
import { connect } from 'react-redux'


const Search = (props:searchProps) => {
  const {search} = props
  const [searchValue, setSearchValue] = useState("");

  const resetInputField = () => {
    setSearchValue("")
  }

  const callSearchFunction = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault();
    search(searchValue);
    resetInputField();
  }

  return (
      <form className="search">
        <input
          value={searchValue}
          onChange={(
            ev: React.ChangeEvent<HTMLInputElement>,
            ): void => setSearchValue(ev.target.value)}
          type="text"
        />
        <input onClick={callSearchFunction} type="submit" value="SEARCH" />
      </form>
    );
}

const mapDispatchToProps = {search}


export default connect(null,mapDispatchToProps)(Search)