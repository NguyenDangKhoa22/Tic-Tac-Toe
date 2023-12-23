"use client";
import Image from "next/image";
import { TicTactoe } from "./componet/tictactoe";
export default function Home() {
  return (
    <div>
      <TicTactoe size={10} winLength={5} />
    </div>
  );
}
