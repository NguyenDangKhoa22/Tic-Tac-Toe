import { FC } from "react";
interface ICeil {
  value: string | null;
  hanleClick: () => void;
}
export const Ceil: FC<ICeil> = ({ value, hanleClick }) => {
  return (
    <div
      className="w-16 h-16 p-5 border-2 border-black bg-white text-center cursor-pointer"
      onClick={hanleClick}
    >
      {value}
    </div>
  );
};
