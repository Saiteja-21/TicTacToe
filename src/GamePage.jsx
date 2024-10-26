import React, { useState } from "react";
import "./GamePage.css";


//const playersData=[];
const GamePage = () => {
  const [count, setcount] = useState(0);
  const [done,setdone]=useState(false);
  const [playersData, setplayersData] = useState(Array(9).fill(null));

  const evaluate=()=>{
    if(playersData[0] && playersData[0]===playersData[1] && playersData[1]===playersData[2]){
        setdone(true);
        alert(`${playersData[0]} wins game`);

    }
    if(playersData[3] && playersData[3]===playersData[4] && playersData[4]===playersData[5]){
        setdone(true);
        alert(`${playersData[0]} wins game`);

    }
    if(playersData[6] && playersData[6]===playersData[7] && playersData[7]===playersData[8]){
        setdone(true);
        alert(`${playersData[0]} wins game`);
        

    }
    if(playersData[0] && playersData[0]===playersData[3] && playersData[3]===playersData[6]){
        setdone(true);
        alert(`${playersData[0]} wins game`);


    }
    if(playersData[1] && playersData[1]===playersData[4] && playersData[4]===playersData[7]){
        setdone(true);
        alert(`${playersData[0]} wins game`);


    }
    if(playersData[2] && playersData[2]===playersData[5] && playersData[5]===playersData[8]){
        setdone(true);
        alert(`${playersData[0]} wins game`);


    }
    if(playersData[0] && playersData[0]===playersData[4] && playersData[4]===playersData[8]){
        setdone(true);
        alert(`${playersData[0]} wins game`);


    }
    if(playersData[2] && playersData[2]===playersData[4] && playersData[4]===playersData[6]){
        setdone(true);
        alert(`${playersData[0]} wins game`);


    }




  }

  const insert = (e,ind) => {
    if(!done){
        if (count % 2 === 0) {
            e.target.innerHTML = `<img src='/circle.png'/>`;
            playersData[ind]="O";
          } else {
            e.target.innerHTML = `<img src='/close.png'/>`;
            playersData[ind]="X";
          }
          setcount((prevCount) => prevCount + 1);
          setTimeout(() => evaluate(), 20);

    }
    else{
        alert('Game finished! Restart to play again.');
    }
   
  };
  const resetGame = () => {
    setcount(0);
    setdone(false);
    setplayersData(Array(9).fill(null)); 
    const columns = document.querySelectorAll('.coloumn');
    columns.forEach(column => {
      column.innerHTML = '';
    });
  };

  return (
    
      <div className="main">
        <h1>
          {" "}
          <img src="/tic-tac-toe.png" alt="no" /> Welcome to Tic-Tac-Toe{" "}
        </h1>
        <div className="gameContainer">
          <div className="row">
            <div className="coloumn" onClick={(e) => insert(e,0)}></div>
            <div className="coloumn" onClick={(e) => insert(e,1)}></div>
            <div className="coloumn" onClick={(e) => insert(e,2)}></div>
          </div>
          <div className="row">
            <div className="coloumn" onClick={(e) => insert(e,3)}></div>
            <div className="coloumn" onClick={(e) => insert(e,4)}></div>
            <div className="coloumn" onClick={(e) => insert(e,5)}></div>
          </div>
          <div className="row">
            <div className="coloumn" onClick={(e) => insert(e,6)}></div>
            <div className="coloumn" onClick={(e) => insert(e,7)}></div>
            <div className="coloumn" onClick={(e) => insert(e,8)}></div>
          </div>
        </div>
        <button onClick={resetGame}>Restart</button>
      </div>
    
  );
};

export default GamePage;
