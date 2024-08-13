import { React } from "react";

export default function App() {
  return (
    <>
      <div className="flex justify-center p-10">
        <h1 className="text-2xl">Welcome to Saber Wizard</h1>
      </div>
      <div className=" h-96 w-full rounded-xl flex justify-center">
        Clique em
        <a
          href={"./tcptest"}
          className="hover:text-gray-500 transition-colors duration-500 cursor-pointer px-2"
        >
          TCPTest/SquareTest
        </a>
        para começar
      </div>
    </>
  );
}
