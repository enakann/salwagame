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





var images = [
   {
    items: [
      {
        img: "/images/2guessactor/akshay.jpg",
        alt: "first",
        active: true,
      },
    ],
      Question: "1. Guess the Actor",
      Answer: "Akshay Kumar",
      img: "/images/2guessactor/akshay_ans.jpg",
      id:1
   },
   {
    items: [
      {
        img: "/images/2guessactor/hema.jpg",
        alt: "first",
        active: true,
      },
    ],
      Question: "2. Guess the Actor",
      Answer: "Hema Malini",
      img: "/images/2guessactor/hema_ans.jpg",
      id:2
   },
   {
    items: [
      {
        img: "/images/2guessactor/manoj_kumar.jpg",
        alt: "first",
        active: true,
      },
    ],
      Question: "3. Guess the Actor",
      Answer: "Manoj Kumar",
      img: "/images/2guessactor/manoj_kumar_ans.jpg",
      id:3
   },
   {
    items: [
      {
        img: "/images/2guessactor/sridevi.jpg",
        alt: "first",
        active: true,
      },
    ],
      Question: "4. Guess the Actor",
      Answer: "Sridevi",
      img: "/images/2guessactor/sridevi_ans.jpg",
      id:4
   },
    {
    items: [
      {
        img: "/images/2guessactor/srk.jpg",
        alt: "first",
        active: true,
      },
    ],
      Question: "5. Guess the Actor",
      Answer: "Shahrukh Khan",
      img: "/images/2guessactor/srk_ans.jpg",
      id:5
   },
   {
    items: [
      {
        img: "/images/3minpos/bb.png",
        alt: "first",
        active: true,
      },
    ],
      Question: "6. Guess the movie",
      Answer: "Bhool Bhulaiya",
      img: "/images/3minpos/bb_ans.jpg",
      id:6
   },
    {
    items: [
      {
        img: "/images/3minpos/ddlj.jpg",
        alt: "first",
        active: true,
      },
    ],
      Question: "7. Guess the movie",
      Answer: "Dilwale Dulhaniya Le Jayenge",
      img: "/images/3minpos/ddlj_ans.png",
      id:7
   },
    {
    items: [
      {
        img: "/images/3minpos/hera_pheri.jpg",
        alt: "first",
        active: true,
      },
    ],
      Question: "8. Guess the movie",
      Answer: "Hera Pheri",
      img: "/images/3minpos/hera_pheri_ans.jpg",
      id:8
   },
    {
    items: [
      {
        img: "/images/3minpos/inception.jpg",
        alt: "first",
        active: true,
      },
    ],
      Question: "9. Guess the movie",
      Answer: "Inception",
      img: "/images/3minpos/inception_ans.jpg",
      id:9
   },
   
   {
    items: [
      {
        img: "/images/3minpos/khamoshi.png",
        alt: "first",
        active: true,
      },
    ],
      Question: "10. Guess the movie",
      Answer: "Khamoshi",
      img: "/images/3minpos/khamoshi_ans.jpg",
      id:10
   },
    {
    items: [
      {
        img: "/images/3minpos/matrix.jpg",
        alt: "first",
        active: true,
      },
    ],
      Question: "11. Guess the movie",
      Answer: "Matrix",
      img: "/images/3minpos/matrix_ans.jpg",
      id:11
   },
   
    {
    items: [
      {
        img: "/images/3minpos/mohabbatein.png",
        alt: "first",
        active: true,
      },
    ],
      Question: "12. Guess the movie",
      Answer: "Mohabbatein",
      img: "/images/3minpos/mohabbatein_ans.jpg",
      id:12
   },
   
   {
    items: [
      {
        img: "/images/3minpos/the_social_network.jpg",
        alt: "first",
        active: true,
      },
    ],
   
      Question: "13. Guess the movie",
      Answer: "The Social Network",
      img: "/images/3minpos/the_social_network_ans.jpg",
      id:13
   
   },
   
    {
    items: [
      {
        img: "/images/3minpos/titanic.jpg",
        alt: "first",
        active: true,
      },
    ],
   
      Question: "14. Guess the movie",
      Answer: "Titanic",
      img: "/images/3minpos/titanic_ans.jpg",
      id:14
   
   },
   
   {
    items: [
      {
        img: "/images/3minpos/truman_show.jpg",
        alt: "first",
        active: true,
      },
    ],
   
      Question: "15. Guess the movie",
      Answer: "The Truman Show",
      img: "/images/3minpos/truman_show_ans.jpg",
      id:15
   },
   
   
    {
    items: [
      {
        img: "/images/3minpos/wake_up_sid.jpg",
        alt: "first",
        active: true,
      },
    ],
      Question: "16. Guess the movie",
      Answer: "Wake up Sid",
      img: "/images/3minpos/wake_up_sid_ans.jpg",
      id:16
   },
   
   
   
    {
    items: [
      {
        img: "/images/4diags/anand_1.jpg",
        alt: "first",
        active: true,
      },
      {
        img: "/images/4diags/anand_2.jpg",
        alt: "second",
        active: false,
      },
    ],
   
      Question: "17. Guess the movie",
      Answer: "Anand",
      img: "/images/4diags/anand_ans.jpg",
      id:17
   },
   
   {
    items: [
      {
        img: "/images/4diags/barfi_1.jpg",
        alt: "first",
        active: true,
      },
      {
        img: "/images/4diags/barfi_2.png",
        alt: "second",
        active: false,
      },
    ],
      Question: "18. Guess the movie",
      Answer: "Barfi",
      img: "/images/4diags/barfi_ans.jpg",
      id:18
   },
   
   {
    items: [
      {
        img: "/images/4diags/damini_1.png",
        alt: "first",
        active: true,
      },
      {
        img: "/images/4diags/damini_2.jpg",
        alt: "second",
        active: false,
      },
    ],
   
      Question: "19. Guess the movie",
      Answer: "Damini",
      img: "/images/4diags/damini_ans.jpg",
      id:19
   },
   
   {
    items: [
      {
        img: "/images/4diags/dead_poets_society_1.jpg",
        alt: "first",
        active: true,
      },
      {
        img: "/images/4diags/dead_poets_society_2.jpg",
        alt: "second",
        active: false,
      },
    ],
   
      Question: "20. Guess the movie",
      Answer: "Dead Poets Society",
      img: "/images/4diags/dead_poets_society_ans.jpg",
      id:20
   },
   
    {
    items: [
      {
        img: "/images/4diags/fg_1.jpg",
        alt: "first",
        active: true,
      },
      {
        img: "/images/4diags/fg_2.jpg",
        alt: "second",
        active: false,
      },
    ],
   
      Question: "21. Guess the movie",
      Answer: "Forrest Gump",
      img: "/images/4diags/fg_ans.jpg",
      id:21
   },
   
   
   {
    items: [
      {
        img: "/images/4diags/fn_1.jpg",
        alt: "first",
        active: true,
      },
      {
        img: "/images/4diags/fn_2.jpg",
        alt: "second",
        active: false,
      },
    ],
      Question: "22. Guess the movie",
      Answer: "Finding Nemo",
      img: "/images/4diags/fn_ans.png",
      id:22
   },
   
   
   {
    items: [
      {
        img: "/images/4diags/gangs_of_was_1.png",
        alt: "first",
        active: true,
      },
      {
        img: "/images/4diags/gangs_of_was_2.jpg",
        alt: "second",
        active: false,
      },
    ],
      Question: "23. Guess the movie",
      Answer: "Gangs of Wasseypur",
      img: "/images/4diags/gangs_of_was_ans.jpeg",
      id:23
   },
   
   
   
   {
    items: [
      {
        img: "/images/4diags/gf_1.jpg",
        alt: "first",
        active: true,
      },
      {
        img: "/images/4diags/gf_2.jpg",
        alt: "second",
        active: false,
      },
    ],
   
      Question: "24. Guess the movie",
      Answer: "Godfather",
      img: "/images/4diags/gf_ans.jpg",
      id:24
   
   },
   
    {
    items: [
      {
        img: "/images/4diags/kalia_1.jpg",
        alt: "first",
        active: true,
      },
      {
        img: "/images/4diags/kalia_2.jpg",
        alt: "second",
        active: false,
      },
    ],
   
      Question: "25. Guess the movie",
      Answer: "Kalia",
      img: "/images/4diags/kalia_ans.jpg",
      id:25
   },
   
   {
    items: [
      {
        img: "/images/4diags/pursuit_of_happyness_1.jpg",
        alt: "first",
        active: true,
      },
      {
        img: "/images/4diags/pursuit_of_happyness_2.jpg",
        alt: "second",
        active: false,
      },
    ],
   
      Question: "26. Guess the movie",
      Answer: "Pursuit of Happyness",
      img: "/images/4diags/pursuit_of_happyness_ans.png",
      id:26
   
   },
   
   
   
   {
    items: [
      {
        img: "/images/1title_pics/7_1.jpg",
        alt: "first",
        active: true,
      },
      {
        img: "/images/1title_pics/7_2.jpg",
        alt: "second",
        active: false,
      },
      {
        img: "/images/1title_pics/7_3.jpg",
        alt: "third",
        active: false,
      },
      {
        img: "/images/1title_pics/7_4.png",
        alt: "fourth",
        active: false,
      },
      {
        img: "/images/1title_pics/7_5.jpg",
        alt: "fifth",
        active: false,
      },
      {
        img: "/images/1title_pics/7_6.jpg",
        alt: "sixth",
        active: false,
      },
      {
        img: "/images/1title_pics/7_7.jpg",
        alt: "seventh",
        active: false,
      },
   
    ],
   
      Question: "27. Guess the Movie",
      Answer: "Seven",
      img: "/images/1title_pics/7_ans.jpg",
      id:27
   
   },
   
   {
    items: [
      {
        img: "/images/1title_pics/12am_1.jpg",
        alt: "first",
        active: true,
      },
      {
        img: "/images/1title_pics/12am_2.jpg",
        alt: "second",
        active: false,
      },
      {
        img: "/images/1title_pics/12am_3.jpg",
        alt: "third",
        active: false,
      },
   
    ],
   
      Question: "28. Guess the Movie",
      Answer: "12 Angry Men",
      img: "/images/1title_pics/12am_ans.jpg",
      id:28
   },
   
   {
    items: [
      {
        img: "/images/1title_pics/black_1.jpg",
        alt: "first",
        active: true,
      },
      {
        img: "/images/1title_pics/black_2.jpg",
        alt: "second",
        active: false,
      },
   
    ],
   
      Question: "29. Guess the Movie",
      Answer: "Black",
      img: "/images/1title_pics/black_ans.jpg",
      id:29
   },
   
   
    {
    items: [
      {
        img: "/images/1title_pics/fight_club_1.png",
        alt: "first",
        active: true,
      },
      {
        img: "/images/1title_pics/fight_club_2.png",
        alt: "second",
        active: false,
      },
   
    ],
   
      Question: "30. Guess the Movie",
      Answer: "Fight Club",
      img: "/images/1title_pics/fight_club_ans.jpg",
      id:30
   },
   
   
   {
    items: [
      {
        img: "/images/1title_pics/imitation_game_1.png",
        alt: "first",
        active: true,
      },
      {
        img: "/images/1title_pics/imitation_game_2.png",
        alt: "second",
        active: false,
      },
   
    ],
   
      Question: "31. Guess the Movie",
      Answer: "Imitation Game",
      img: "/images/1title_pics/imitation_game_ans.jpg",
      id:31
   },
   
   
   
    {
    items: [
      {
        img: "/images/1title_pics/lagan_1.png",
        alt: "first",
        active: true,
      },
      {
        img: "/images/1title_pics/lagan_2.jpg",
        alt: "second",
        active: false,
      },
      {
        img: "/images/1title_pics/lagan_3.jpg",
        alt: "third",
        active: false,
      },
   
    ],
   
      Question: "32. Guess the Movie",
      Answer: "Lagaan",
      img: "/images/1title_pics/lagan_ans.jpg",
      id:32
   },
   
   
   
   {
    items: [
      {
        img: "/images/1title_pics/lunch_box_1.jpg",
        alt: "first",
        active: true,
      },
   
    ],
   
      Question: "33. Guess the Movie",
      Answer: "Lunch Box",
      img: "/images/1title_pics/lunch_box_ans.jpg",
      id:33
   
   },
   
   {
    items: [
      {
        img: "/images/1title_pics/october_1.jpg",
        alt: "first",
        active: true,
      },
      {
        img: "/images/1title_pics/october_2.png",
        alt: "second",
        active: false,
      },
      {
        img: "/images/1title_pics/october_3.jpg",
        alt: "third",
        active: false,
      },
   
    ],
   
      Question: "34. Guess the Movie",
      Answer: "October",
      img: "/images/1title_pics/october_ans.jpg",
      id:34
   },
   
   {
    items: [
      {
        img: "/images/1title_pics/toy_story_1.png",
        alt: "first",
        active: true,
      },
      {
        img: "/images/1title_pics/toy_story_2.jpg",
        alt: "second",
        active: false,
      },
   
    ],
   
      Question: "35. Guess the Movie",
      Answer: "Toy Story",
      img: "/images/1title_pics/toy_story_ans.jpg",
      id:35
   },
   
   {
    items: [
      {
        img: "/images/1title_pics/ugly_1.jpeg",
        alt: "first",
        active: true,
      },
      {
        img: "/images/1title_pics/ugly_2.jpg",
        alt: "second",
        active: false,
      },
	        {
        img: "/images/1title_pics/ugly_3.png",
        alt: "second",
        active: false,
      },
   
    ],
   
      Question: "36. Guess the Movie",
      Answer: "Ugly",
      img: "/images/1title_pics/ugly_ans.jpg",
      id:36
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
  const [line,setline] = useState(false)


 const setcurqcb = (q) => {
      setCurQ(q)
 }


 const reset = () => {
  console.log("reset called")
  axios.post(BACKEND_API, { players: allplayers });
  // axios.get(BACKEND_API).then(res=>setPlayers(res.data))
  setPlayers([...allplayers]);
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
    let _delitem=_items.filter(_item => _item.id === id)[0]
    let _newitems = _items.filter(_item => _item.id!==id)
    if(_newitems.length ===0 ){
      console.log(`entered loop ${_newitems}`)
      let _players=[...players]
      let _NonZero = _players.filter((a) => {
         if (a.score > 0) return a;});
      let _pSorted = _NonZero.sort((a, b) => b.score - a.score);
      let _first3 = _pSorted.slice(0,3)

      setCurQ("CONGRATULATIONS!!!!!!!!!")
      SetDone(true)
      SetWinners(_first3)
      }

      _delitem.line=true
      let _delitems = [_delitem,..._newitems]
      setline(true)
      setItems(_delitems)
      setTimeout(()=>setItems(_newitems),1000)
      // setItems(_newitems) 
    
  }



  return (
 
    <div className="App">
      
      <Header curq={curQ} reset={reset}/>
      
      { !done ?
      (<div id="main">
    <Players allplayers={players} id="sidebar" type="even"
              callback={onUserClick}  />
     <div id="page-wrap">
         {items.map(item => <Item delete= {Del} item={item} line={item.line} setcurqcb={setcurqcb} />)}
     </div>
      <Players allplayers={players} id="sidebar2" type="odd"
              callback={onUserClick} /> 
    </div>
    ):<div><Winner winners={winners} /></div>}

    </div>
  );
}
