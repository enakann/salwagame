import React, { useState } from "react";
// import "./congrats.css"


export default function Winner(props){
    return (
    <div>
        <img
                src="/images/congrats.gif"
                alt="logo"
              />

      {props.winners.map(winner =>{
            return <div style={{"color":"red"}}><h2>{winner.name}</h2></div>
      })}
    </div>
    )
}