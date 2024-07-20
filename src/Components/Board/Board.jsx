import React, { useState } from "react";
import Square from '../Square/Square';

function Board() {
  const [state, setstate] = useState(Array(9).fill(null));
  const [xturn, setxturn] = useState(true);

  const checkwinner = () => {
    const winnerlogin = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerlogin) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return null;
  };

  const winner = checkwinner();

  const handlefunction = (index) => {
    if (state[index] !== null || winner) {
      return;
    }
    const newstate = [...state];
    newstate[index] = xturn ? "X" : "O";
    setstate(newstate);
    setxturn(!xturn);
  };

  const handleReset = () => {
    setstate(Array(9).fill(null));
    setxturn(true);
  };

  return (
    <div className=" w-full flex border-2 bg-red-200 p-6">

      {winner ? (
        <div>
          <div>{winner} wins the game!</div>
          <button onClick={handleReset}>Play Again</button>
        </div>
      ) : (
        <>
          <div className="border-1 border-black">
          
            <Square onClick={() => handlefunction(0)} value={state[0]} />
            <Square onClick={() => handlefunction(1)} value={state[1]} />
            <Square onClick={() => handlefunction(2)} value={state[2]} />
          </div>
          <div className="border-1 border-black">
            <Square onClick={() => handlefunction(3)} value={state[3]} />
            <Square onClick={() => handlefunction(4)} value={state[4]} />
            <Square onClick={() => handlefunction(5)} value={state[5]} />
          </div>
          <div className="">
            <Square  onClick={() => handlefunction(6)} value={state[6]} />
            <Square onClick={() => handlefunction(7)} value={state[7]} />
            <Square onClick={() => handlefunction(8)} value={state[8]} />
          </div>
        </>
      )}
    </div>
  );
}

export default Board;
