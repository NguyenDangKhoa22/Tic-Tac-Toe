import { FC, useState } from "react";
import { Ceil } from "./ceil";
import { CheckWinner } from "./checkWin";
type TCeilValue = string | null;
type TBoard = TCeilValue[];
interface ITicTacToe {
  size: number;
  consecutiveCount: number;
}
export const TicTactoe: FC<ITicTacToe> = ({ size, consecutiveCount }) => {
  const [isXNext, setIsXnext] = useState(true);
  const [board, setBoard] = useState<TBoard>(Array(size * size).fill(null));
  const [history, setHistory] = useState([board]);
  const [currentMove, setCurrentMove] = useState(0);

  const handleClick = (index: number) => {
    const newBoard = [...board];

    const newHistory = [...history.slice(0, currentMove + 1)];

    newHistory.push(newBoard);
    setHistory(newHistory);
    setCurrentMove(newHistory.length - 1);

    newBoard[index] = isXNext ? "X" : "O";
    setIsXnext(!isXNext);
    setBoard(newBoard);
    const winner = CheckWinner(
      newBoard,
      size,
      consecutiveCount,
      isXNext ? "X" : "O"
    );
    if (winner) {
      console.log(`Người chơi ${isXNext ? "X" : "O"} đã chiến thắng!`);
      // Xử lý khi có người chiến thắng, có thể hiển thị thông báo hoặc thực hiện hành động khác
    }
  };
  const handleClickHistory = (index: number) => {
    setBoard(history[index]);
    setCurrentMove(index);
  };
  return (
    <div className="h-screen w-screen flex items-center justify-center">
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
                    hanleClick={() => handleClick(col * size + row)}
                  />
                );
              })}
            </div>
          );
        })}
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
