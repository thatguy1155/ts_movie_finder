import React from "react";
import {headerProps} from '../types/headerTypes'

const Header = (props:headerProps) => {
  return (
    <header className="App-header">
      <h2>{props.text}</h2>
    </header>
  );
};

export default Header;