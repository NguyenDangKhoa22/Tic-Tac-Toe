import { useState } from "react";
import { Ceil } from "./ceil";

export const TicTactoe = () => {
  const [isXNext, setIsXnext] = useState(true);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [history, setHistory] = useState([board]);

  const handleClick = (index: number) => {
    const newBoard = [...board];

    const newHistory = [...history];
    if (newBoard[index] !== null) {
      return;
    }
    newHistory.push(newBoard);
    setHistory(newHistory);

    newBoard[index] = isXNext ? "X" : "O";
    setIsXnext(!isXNext);
    setBoard(newBoard);
  };
  const handleClickHistory = (index: number) => {
    setBoard(history[index]);
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div>
        <div className="flex">
          <Ceil value={board[0]} hanleClick={() => handleClick(0)} />
          <Ceil value={board[1]} hanleClick={() => handleClick(1)} />
          <Ceil value={board[2]} hanleClick={() => handleClick(2)} />
        </div>
        <div className="flex">
          <Ceil value={board[3]} hanleClick={() => handleClick(3)} />
          <Ceil value={board[4]} hanleClick={() => handleClick(4)} />
          <Ceil value={board[5]} hanleClick={() => handleClick(5)} />
        </div>
        <div className="flex">
          <Ceil value={board[6]} hanleClick={() => handleClick(6)} />
          <Ceil value={board[7]} hanleClick={() => handleClick(7)} />
          <Ceil value={board[8]} hanleClick={() => handleClick(8)} />
        </div>
      </div>
      <div>
        {history.map((value, index) => (
          <div
            className="cursor-pointer"
            key={index}
            onClick={() => handleClickHistory(index)}
          >
            {index}
          </div>
        ))}
      </div>
    </div>
  );
};
