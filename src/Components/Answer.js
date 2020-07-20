import React, { useState } from "react";

export default function Answer(props) {



return ( <div className="card text-red bg-info mb-3"
               style={{"width": "30rem",
                  "height":"4 0rem",
                  "marginBottom":"0px",
                  "marginLeft":"150px",
                  "border":"1px solid #white",
                  boxShadow: "0.5px 1px 2px wheat"}} >
  <div className="card-header">
     <h2 style={{"color":"black"}} className="card-title">{props.answer}</h2>
  </div>
  <div className="card-body">

          <img style={{height:"80%"}}
            src={props.ansimg}
            className="img-responsive"
            alt="missing"
          />
</div>
</div>
  
);
// return props.ans

}
