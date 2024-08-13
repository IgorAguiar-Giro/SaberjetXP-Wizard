import React from "react";
import { useState } from "react";

export default function SquareTest() {
  const [Xa, setXa] = useState("");
  const [Xb, setXb] = useState("");
  const [Ya, setYa] = useState("");
  const [Yb, setYb] = useState("");

  let X = (Xb - Xa) / 2;
  let Y = (Yb - Ya) / 2;

  X = X.toPrecision(2);
  Y = Y.toPrecision(2);

  return (
    <>
      <div className="flex justify-center p-10">
        <h1 className="text-4xl">TCP TEST WIZARD</h1>
      </div>
      <div className="flex justify-center items-center h-[466px] md:h-[612.66px]">
        <div className="relative w-full h-full  lg:w-[633px] md:w-2/3   bg-blue-500 flex flex-col items-center justify-center shadow-lg shadow-gray-500">
          <div className="w-1/2 h-1/2 bg-white mb-4 flex items-center flex-col justify-center">
            <div className="relative lg:-left-56 -left-36 -bottom-5">
              <input
                type="number"
                value={Xa}
                onChange={(e) => setXa(e.target.value)}
                className="w-32   border-2 rounded-md border-black "
              ></input>
            </div>
            <div className="relative lg:-top-48 -top-36">
              <input
                type="number"
                value={Yb}
                onChange={(e) => setYb(e.target.value)}
                className="w-32 md:w-full border-2 rounded-md border-black "
              ></input>
            </div>
            <div className="relative lg:-right-56 -right-36 -top-5">
              <input
                type="number"
                value={Xb}
                onChange={(e) => setXb(e.target.value)}
                className="w-32  border-2 rounded-md border-black "
              ></input>
            </div>
            <div className="relative lg:-bottom-36 -bottom-28">
              <input
                type="number"
                value={Ya}
                onChange={(e) => setYa(e.target.value)}
                className="w-32 md:w-full  border-2 rounded-md border-black "
              ></input>
            </div>
          </div>
          <div className="absolute w-1/3 h-1/3  border-2 border-black rounded-xl bg-white flex flex-col justify-center items-center">
            <p>{`Valor de X = ${X}`}</p>
            <p>{`Valor de Y = ${Y}`}</p>
          </div>

          <div className="absolute w-2/3 h-2 bottom-10 lg:bottom-20 rounded-full bg-white"></div>
        </div>
      </div>
      <div className="m-8 flex items-center justify-center">
        <p>
          Adicione os valores medidos no paquimêtros, no espaços correspondentes
          acima
        </p>
      </div>
    </>
  );
}
