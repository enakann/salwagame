import React, { useState, useRef } from "react";

import person from "./Svgs/person.svg";
export default function Players(props) {
  const [players, setScore] = useState({});
  var players1 = [];
  var players2 = [];
  var allPlayers = [];
  var winner1 = { color: "#17a2b8", "fontSize": "13px" ,"float":"left"};
  var loser1 = { color:"white" ,"float":"left","fontSize":"10px"};

  var winnerScore = { fontSize: "10px" };
  var loserscore = { fontSize: "10px" };

   let investigate = (e) =>{
       console.log(e)
   }



  //   console.log(props)
  // const style1 = { height: "6vmin" };
  // style={hovered ? style1 : style2}
  var players1 = props.allplayers.map((people, index) => {
    if (index % 2 === 0) {
      return ( <div className="PlayerWithPhoto"
        style={people.score ? winner1 : loser1}
       onClick={() => props.callback(people.id)} > 
    
 
         <div style={{"width":"30px","height":"10px","float":"left"}}>
             <span> 
                 
                 <img onClick={investigate}  style={{ width: "15px","border-radius":"50%" }} src={ people.male ? person : "/images/girl.jpg"}></img>
              
                
                  </span>
               </div>
            
               {/* {people.name} */}
         <div style={{"width":"100px","height":"50%","display":"inline","flaot":"left"}}>
               <p style={people.score ? winner1 : loser1}>
                 {people.name} &nbsp;&nbsp;

                 {people.score ? 
                 <React.Fragment>
                { people.score ? <img src="/images/tick.jpg" style={{width:"15px","border-radius":"50%"}}></img>:""}
                 <span style={people.score ? winnerScore : loserscore}> &nbsp;&nbsp;{people.score}
                 </span>
                 </React.Fragment>:""}


               </p>
         </div>
         </div>
       



       
      );
    }
	
	
  });

  var players2 = props.allplayers.map((people, index) => {
    if (index % 2 !== 0) {
      return ( <div className="PlayerWithPhoto"
        style={people.score ? winner1 : loser1}
       onClick={() => props.callback(people.id)} > 
    
 
         <div style={{"width":"30px","height":"10px","float":"left"}}>
             <span> 
                 
                 <img onClick={investigate}  style={{ width: "15px","border-radius":"50%" }} src={ people.male ? person : "/images/girl.jpg"}></img>
              
                
                  </span>
               </div>
            
               {/* {people.name} */}
         <div style={{"width":"100px","height":"50%","display":"inline","flaot":"left"}}>
               <p style={people.score ? winner1 : loser1}>
                 {people.name} &nbsp;&nbsp;

                 {people.score ? 
                 <React.Fragment>
                { people.score ? <img src="/images/tick.jpg" style={{width:"15px","border-radius":"50%"}}></img>:""}
                 <span style={people.score ? winnerScore : loserscore}> &nbsp;&nbsp;{people.score}
                 </span>
                 </React.Fragment>:""}


               </p>
         </div>
         </div>
       



       
      );
    }
  });

  return props.type == "even" ? (
    <div id={props.id}>{players1}</div>
  ) : (
    <div id={props.id}>{players2}</div>
  );
}
