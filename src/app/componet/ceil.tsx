import { FC } from "react";
interface ICeil {
  value: string | null;
  handleClick: () => void;
}
export const Ceil: FC<ICeil> = ({ value, handleClick }) => {
  return (
    <div
      className={`w-10 h-10 p-1 border-2 border-black bg-white text-center cursor-pointer text-3xl font-bold ${
        value == "X" ? "text-orange-500" : "text-lime-800"
      }`}
      onClick={handleClick}
    >
      {value}
    </div>
  );
};
