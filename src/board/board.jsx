import './board.css';
import { useState } from 'react';

function Boardfunc({isNextX , stuffX ,onPlay}){


// console.log( typeof stuffX);
    function changes (i){
        if (stuffX[i] || calculateWinner(stuffX)){
            return;
        }

        let realSquares = stuffX.slice();
        if(isNextX){
            realSquares[i] ='x';
        }else{
            realSquares[i] = 'o';
        }
       
        onPlay(realSquares)
        
    }

    let winner = calculateWinner(stuffX);
    let status;
    if(winner){
      status = 'winner :'+ winner;
    }else {
        status = 'next move is for player : '+ (isNextX? 'X':'O');
    }
    // console.log(stuffX)
    
    return(
        <>
        <div className='status'>{status}</div>
        <div>
        <Square left={isNextX}    value={stuffX[0]}    onClinklink={()=>{changes(0)}} />
        <Square left={isNextX}     value={stuffX[1]}    onClinklink={()=>{changes(1)}}/>
        <Square left={isNextX}    value={stuffX[2]}   onClinklink={()=>{changes(2)}} />
        </div>
        <div>
        <Square left={isNextX}    value={stuffX[3]}   onClinklink={()=>{changes(3)}}/>
        <Square left={isNextX}     value={stuffX[4]}    onClinklink={()=>{changes(4)}}/>
        <Square left={isNextX}    value={stuffX[5]}   onClinklink={()=>{changes(5)}} />
        </div>
        <div>
          <Square left={isNextX}  value={stuffX[6]}   onClinklink={()=>{changes(6)}}/>
          <Square left={isNextX}   value={stuffX[7]}   onClinklink={()=>{changes(7)}} />
          <Square left={isNextX}   value={stuffX[8]}   onClinklink={()=>{changes(8)}}/>
        </div>
        </>
    )
}




export default function Data (){
  const [ nextX , setNextX ] = useState(true);
    const [currentMove, setCurrentMove] = useState(0);
  const [history , setHistory] =  useState ([Array(9).fill(null)]);
  const currentSquares = history[currentMove]

console.log('history:',history);
console.log('currentMove:', currentMove);


  console.log(nextX);
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move : ' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  function handlePlay(realSquares){
    const nextHistory = [...history.slice(0, currentMove + 1), realSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setNextX(!nextX );
   console.log( 'nextHistory:', nextHistory);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    setNextX(!nextX);
  }

 
    return(
      <>
      <div className="game">
        <h2> Tic-tac-toe gaming project</h2>
      <div className="game-board">
        <Boardfunc isNextX={nextX} stuffX={currentSquares} onPlay={handlePlay} />
        </div>
        <div className="game-info">
        <ul>{moves}</ul>
      </div>
        </div>
      </>
    )
}



 function Square ({value , onClinklink, left}){

  // if({left}){
  //   {value}.style.color='red';
  // }else{
  //   {value}.style.color='blue';
  // }
    


    return(
        <button className=" button" onClick={onClinklink} >

         {value}
        </button>

    )
}

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      console.log('a:', a ,'b:', b,'c:', c);
      console.log(squares[a], squares[b], squares[c])
      if (squares[a]    && squares[a] === squares[b] &&      squares[a] === squares[c]) {
        
        return squares[a];
      }

    }
    // return null;
  }

  let man =['eaer','nose','breast','shoulder','knee'];
  let boy = ['leg', 'teeth', 'hand', 'back',' toe', 'foot']
  // const nextHistory = [...history.slice(0, currentMove + 1), realSquares];
  const woman =[...man.slice(0, 4), boy];
  // console.log(man);
  console.log(woman);

  