import React from "react";
import logo from './logo.svg';
function Header(props) {
  return (
    <header>
        <button  style={{"position":"absolute","top":"-2px","left":"-35px"
        ,"backgroundColor":" #20262e"}}  
        onClick={() => props.reset()}> 
     <img  src={logo} className="App-logo" alt="logo" />
     </button> 
      <h1 style={{"marginBottom":"5px"}}>{props.curq}</h1>
    </header>
  );
}

export default Header;
