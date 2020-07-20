import React, { useState,useEffect,useRef } from "react";
import Images from "./Images";

const Item = props => {
  const [status, setStatus] = useState(false);
 

  const callback = () => {
    console.log("Qiuestion Answer toogle")
    console.log(props.item.Question)
    props.setcurqcb(props.item.Question)
    return setStatus(prev => !prev);
  };
  return (
    <div>
      {!status ? ( 
        <div onClick={() => callback()} style={{
          textDecoration: props.line ? 'line-through' : 'none'
        }}  className="box">
          {props.item.Question}
        </div>
      ) : (
        <div>
          <Images 
          closenext = {callback} 
          images={props.item.items}
         ans={props.item.Answer}   
         ansimg={props.item.img}       
          id={props.item.id} 
          delete={props.delete}/>

        </div>
      )}
    </div>
  );
};

export default Item;
