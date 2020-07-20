import React,{useState,useEffect} from "react";
import "./styles.css";
import Item from "./Components/Item";
import Players from "./Components/Players"
import Header from "./Components/Header"
import config from "./config";
import axios from "axios"
import Winner from "./Components/Winner"
import logo from './logo.svg';
require("dotenv").config();
console.log(config);


var BACKEND_API = config.REACT_APP_BACKEND_API;





var images = [{ 
  items: [
   {
       img: "/images/dangal/1.jpg",
       alt: "first",
       active: true,
     },
     {
       img: "/images/dangal/2.jpg",
       alt: "first",
       active: false,
     },
     {
       img: "/images/dangal/3.jpg",
       alt: "first",
       active: false,
     },
     {
       img: "/images/dangal/4.jpg",
       alt: "first",
       active: false,
     },
     {
       img: "/images/dangal/flag.jpg",
       alt: "first",
       active: false,
     },
  
   ],
   Question: "1.Guess the Movie",
   Answer: "Dangal",
   img: "/images/dangal/answer.jpg",
   id:1},
 {
   items: [
     {
       img: "/images/dangerai/2001space.jpg",
       alt: "first",
       active: true,
     },
     {
       img: "/images/dangerai/irobot.jpg",
       alt: "second",
       active: false,
     },
     {
       img: "/images/dangerai/matrix.png",
       alt: "third",
       active: false,
     },
     {
       img: "/images/dangerai/rajni.jpg",
       alt: "third",
       active: false,
     },
   ],
  
  Question: "2.Guess the common theme",
  Answer: "AI Becomes Bad Boy!!!!!!!!!!",
  img: "/images/dangerai/answer.jpg",
  id:2
  },
  {
    items: [
      {
        img: "/images/dangerai/2001space.jpg",
        alt: "first",
        active: true,
      },
      {
        img: "/images/dangerai/irobot.jpg",
        alt: "second",
        active: false,
      },
      {
        img: "/images/dangerai/matrix.png",
        alt: "third",
        active: false,
      },
      {
        img: "/images/dangerai/rajni.jpg",
        alt: "third",
        active: false,
      },
    ],
   
   Question: "3.Guess the common theme",
   Answer: "AI Becomes Bad Boy!!!!!!!!!!",
   img: "/images/dangerai/answer.jpg",
   id:3
   },

   {
    items: [
      {
        img: "/images/dangerai/2001space.jpg",
        alt: "first",
        active: true,
      },
      {
        img: "/images/dangerai/irobot.jpg",
        alt: "second",
        active: false,
      },
      {
        img: "/images/dangerai/matrix.png",
        alt: "third",
        active: false,
      },
      {
        img: "/images/dangerai/rajni.jpg",
        alt: "third",
        active: false,
      },
    ],
   
   Question: "4.Guess the common theme",
   Answer: "AI Becomes Bad Boy!!!!!!!!!!",
   img: "/images/dangerai/answer.jpg",
   id:4
   },

   {
    items: [
      {
        img: "/images/dangerai/2001space.jpg",
        alt: "first",
        active: true,
      },
      {
        img: "/images/dangerai/irobot.jpg",
        alt: "second",
        active: false,
      },
      {
        img: "/images/dangerai/matrix.png",
        alt: "third",
        active: false,
      },
      {
        img: "/images/dangerai/rajni.jpg",
        alt: "third",
        active: false,
      },
    ],
   
   Question: "5.Guess the common theme",
   Answer: "AI Becomes Bad Boy!!!!!!!!!!",
   img: "/images/dangerai/answer.jpg",
   id:5
   },
 ]



// const items=[{'item':'A','val':"A is the message"},
//              {'item':'B','val':"B is the message"},
//              {'item':'C','val':"C is the message"}]

const allplayers = [
  { name: "AKHILESH", score: 0, max: false, male: true, id: 0 },
  { name: "ASHUTOSH", score: 0, max: false, male: true, id: 1 },
  { name: "Abhinov", score: 0, max: false, male: true, id: 2 },
  { name: "Abhishek", score: 0, max: false, male: true, id: 3 },
  { name: "Amit", score: 0, max: false, male: true, id: 4 },
  { name: "Anchal", score: 0, max: false, male: false, id: 5 },
  { name: "Anjali", score: 0, max: false, male: false, id: 6 },
  { name: "AshokKumar", score: 0, max: false, male: true, id: 7 },
  { name: "Balasundaram", score: 0, max: false, male: true, id: 8 },
  { name: "Bhanusri", score: 0, max: false, male: false, id: 9 },
  { name: "Harishankar", score: 0, max: false, male: true, id: 10 },
  { name: "Jyothishree", score: 0, max: false, male: false, id: 11 },
  { name: "Kiran", score: 0, max: false, male: true, id: 12 },
  { name: "Lakshmana", score: 0, max: false, male: true, id: 13 },
  { name: "Laxmi", score: 0, max: false, male: false, id: 14 },
  { name: "Mamatha", score: 0, max: false, male: false, id: 15 },
  { name: "Naveen", score: 0, max: false, male: true, id: 16 },
  { name: "Padmanabham", score: 0, max: false, male: true, id: 17 },
  { name: "Rajeev", score: 0, max: false, male: true, id: 18 },
  { name: "Renita", score: 0, max: false, male: false, id: 19 },
  { name: "Salwa", score: 0, max: false, male: false, id: 20 },
  { name: "Saritha", score: 0, max: false, male: false, id: 21 },
  { name: "Shailesh", score: 0, max: false, male: true, id: 22 },
  { name: "Shreenu", score: 0, max: false, male: true, id: 23 },
  { name: "SyamSundar", score: 0, max: false, male: true, id: 24 },
  { name: "Upasana", score: 0, max: false, male: false, id: 25 },
  { name: "Uttam", score: 0, max: false, male: true, id: 26 },
  { name: "VINOD", score: 0, max: false, male: true, id: 27 },
  { name: "Vivitha", score: 0, max: false, male: false, id: 28 },
  { name: "nimi", score: 0, max: false, male: false, id: 29 },
];

export default function App() {

  const [players, setPlayers] = useState([]);
  const [done,SetDone] = useState(false)
  const [items,setItems] = useState(images)
  const [winners,SetWinners] = useState([])
  const [curQ,setCurQ] = useState("Lets Gooooo!!!")


 const setcurqcb = (q) => {
      setCurQ(q)
 }


 const reset = () => {
  console.log("reset called")
  axios.post(BACKEND_API, { players: allplayers });
  setPlayers(allplayers);
};


  useEffect(() => {
    axios.get(BACKEND_API).then((res) => {
      setPlayers(res.data)
    console.log(res)});
  }, []);








  const onUserClick = (id) => {
    var _players = [...players];
    var filtered_cur_player = _players.filter((player) => player.id === id);
    var cur_player = filtered_cur_player[0];
    var _score = cur_player.score + 1;

    _players.forEach((_player, index) => {
      if (_player.id === id) {
        _players[index].score = _score;
        console.log(_player);
      }
    });
    console.log(_players);
    let _NonZero = _players.filter((a) => {
      if (a.score > 0) return a;
    });
    let _Zero = _players.filter((a) => {
      if (a.score === 0) return a;
    });
    let _firstdisplay = _NonZero.sort((a, b) => b.score - a.score);
    _firstdisplay[0].max = true; //to announce winner
    let _nextdisplay = _Zero.sort((a, b) => a.name.localeCompare(b.name));

    let _players2 = [..._firstdisplay, ..._nextdisplay];
    axios.post(BACKEND_API, { players: _players2 });
    setPlayers(_players2);
  };

  



  const Del=(id) =>{
    console.log(`DELETE ${id}`)
    let _items = [...items]
    let _newitems = _items.filter(_item => _item.id!==id)
    console.log(_newitems)
    setItems(_newitems) 
    if(_newitems.length ===0 ){
      console.log(`entered loop ${_newitems}`)
      let _players=[...players]
      let _NonZero = _players.filter((a) => {
         if (a.score > 0) return a;});
      let _pSorted = _NonZero.sort((a, b) => b.score - a.score);
      let _first3 = _pSorted.slice(0,2)
      setCurQ("CONGRATULATIONS!!!!!!!!!")
      SetDone(true)
      console.log(_first3)
      SetWinners(_first3)
      console.log(done)
      
      }
    
  }



  return (
 
    <div className="App">

      <div  onClick={() => reset()}  ><img src={logo}  className="App-logo" alt="logo" /></div>
      <Header curq={curQ}/>
      { !done ?
      (<div id="main">
    <Players allplayers={players} id="sidebar" type="even"
              callback={onUserClick} />
     <div id="page-wrap">
         {items.map(item => <Item delete= {Del}item={item} setcurqcb={setcurqcb} />)}
     </div>
      <Players allplayers={players} id="sidebar2" type="odd"
              callback={onUserClick} /> 
    </div>
    ):<div><Winner winners={winners} /></div>}
    
    
    <div onClick={() => reset()}>
    <img src={logo} className="App-logo" style={{"position":"absolute","right":"30px",top:"30px"}} alt="logo" />
    </div>


    </div>
  );
}
