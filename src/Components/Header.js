import React from "react";
import logo from './logo.svg';
function Header(props) {
  return (
    <header>
        <button  style={{"float":"left","backgroundColor":" #20262e"}}  onClick={() => props.reset()}> 
     <img  src={logo} className="App-logo" alt="logo" />
     </button> 
      <h1>{props.curq}</h1>
    </header>
  );
}

export default Header;
