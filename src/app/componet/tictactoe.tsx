import { FC, useState } from "react";
import { Ceil } from "./ceil";
import { CheckWin } from "./checkWin";
type TCeilValue = string | null;
type TBoard = TCeilValue[];
interface ITicTacToe {
  size: number;
  winLength: number;
}
export const TicTactoe: FC<ITicTacToe> = ({ size, winLength }) => {
  const [isXNext, setIsXnext] = useState(true);
  const [board, setBoard] = useState<TBoard>(Array(size * size).fill(null));
  const [history, setHistory] = useState([board]);
  const [currentMove, setCurrentMove] = useState(0);

  const newBoard = [...board];
  const newHistory = [...history.slice(0, currentMove + 1)];
  const winner = CheckWin(newBoard, size, winLength);

  const handleClick = (index: number) => {
    if (winner) {
      window.alert(`Player ${winner} wins!`);
    }
    if (winner || newBoard[index] !== null) {
      return;
    }
    if (newBoard[index] === null) {
      newHistory.push(newBoard);
    }
    setHistory(newHistory);
    setCurrentMove(newHistory.length - 1);
    setIsXnext(!isXNext);
    setBoard(newBoard);

    newBoard[index] = isXNext ? "X" : "O";
  };
  const handleClickHistory = (index: number) => {
    setBoard(history[index]);
    setCurrentMove(index);
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col">
      <div>
        {winner
          ? `Người chiến thắng: ${winner}`
          : `Lượt tiếp theo: ${isXNext ? "X" : "O"}`}
      </div>
      <div className=""></div>
      <div>
        {new Array(size).fill(null).map((value, row) => {
          return (
            <div className="flex" key={row}>
              {new Array(size).fill(null).map((index, col) => {
                return (
                  <Ceil
                    key={col}
                    value={board[col * size + row]}
                    handleClick={() => handleClick(col * size + row)}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="max-w-sm overflow-x-auto flex items-center mt-5">
        {history.map((value, index) => (
          <div
            className="cursor-pointer h-8 w-10 px-4 text-center bg-orange-300 mr-1 hover:bg-orange-500 rounded-lg py-1"
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
