"use client";
import Image from "next/image";
import { TicTactoe } from "./componet/tictactoe";
export default function Home() {
  return (
    <div>
      <TicTactoe size={5} consecutiveCount={3} />
    </div>
  );
}
