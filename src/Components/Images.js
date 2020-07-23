import React,{useState,useEffect,useRef} from "react";
import Answer from "./Item"


const Images = (props) =>{
  const [ans,setAnswer] =useState(false)

  const ref = useRef()
  console.log(props)

  const photo ={
    color: "#fff",
    boxShadow: "0px 1px 2px #ece",
    padding: "10px",
    position: "relative",
    backgroundColor: "#20262e",
    marginRight: "100px"
  }

  const getWidth = () =>{
    if(props.images.length >= 6){
      return {...photo,width:"800px","height":"550px"}
    }
    else if(props.images.length == 2){
      return {...photo,width:"500px","height":"350px"}
    }
    else if(props.images.length == 3){
      return {...photo,width:"650px","height":"350px"}
    }
    else if(props.images.length==1){
      return {...photo,width:"350px",height:"350px"}
    }


  }

  // useEffect(()=>{
  //   document.body.addEventListener("click",(event)=>{
  //     console.log("me");
  //     console.log(ref.current)
  //     console.log("me2");
  //     console.log(ref.current.contains(event.target))
  //    clicked()
  //    return
  //   })
  // },[])


  const clicked = () => {
    console.log("show answer")
    setAnswer(prev=> !prev)
  }

const delme = (id) => {
 props.closenext()
 props.delete(id)
}


  const _getImages = () =>{
   return props.images.map(image=>{
      return <img src={image.img} className="img-responsive" alt="fourth"/>})}

  const _getAnswer = () => {
     return <Answer answer={props.ans} img={props.img} />
  }

const content = _getImages()
const style=getWidth()
console.log(style)
return (
  <div ref={ref} style={style}>

<button onClick={clicked} type="button" 
class="btn btn-dark btn-sm donwload-button">
  ✅</button>

  <button onClick={()=>delme(props.id)} type="button" 
  class="btn btn-dark btn-sm donwload-button"> ❌</button>
    { !ans ?
    <div className="image-list"> 
     {content} </div>: 

(  <div style={{"border":"1px solid black"}}>{props.ans}
<div className="card-body" style={{"width":"100%"}}>

<img style={{height:"40%"}}
 src={props.ansimg}
 className="img-responsive"
 alt="missing"
/>
</div>
</div>)
   }
     </div>
  
 


)
}

export default Images