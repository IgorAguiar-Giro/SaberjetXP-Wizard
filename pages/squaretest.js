import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../assets/NavBar";

export default function SquareTest() {
  const [Xa, setXa] = useState("");
  const [Xb, setXb] = useState("");
  const [Ya, setYa] = useState("");
  const [Yb, setYb] = useState("");

  let X = (Xb - Xa) / 2;
  let Y = (Yb - Ya) / 2;

  return (
    <>
      <NavBar />
      <body>
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
          }}
        >
          The Square Test Calculator
        </h1>

        <div className="container p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3 ">
          <p>
            If you don't know how to setup your machine for the square test,
            follow this link{" "}
            <a
              target="_blank"
              href="https://www.parkindustries.com/stone/service/blade-offset-cut/"
            >
              https://www.parkindustries.com/stone/service/blade-offset-cut/
            </a>
          </p>
          <p>
            If you don't know english and can't understand the video above I
            will explaing shortly how to do it step by step in this page
          </p>
        </div>
        <div
          style={{
            padding: "50px",
          }}
        >
          <label>
            Value of Xa:{" "}
            <input
              value={Xa}
              onChange={(e) => setXa(e.target.value)}
              type="number"
            ></input>
          </label>
          <hr />
          <label>
            Value of Xb:{" "}
            <input
              value={Xb}
              onChange={(e) => setXb(e.target.value)}
              type="number"
            ></input>
          </label>
          <hr />
          <label>
            Value of Ya:{" "}
            <input
              value={Ya}
              onChange={(e) => setYa(e.target.value)}
              type="number"
            ></input>
          </label>
          <hr />
          <label>
            Value of Yb:{" "}
            <input
              value={Yb}
              onChange={(e) => setYb(e.target.value)}
              type="number"
            ></input>
            <hr />
          </label>
          <p>
            Your value of X is: <p style={{ color: "red" }}>{X}</p>
          </p>
          <p>
            Your value of Y is: <p style={{ color: "red" }}>{Y}</p>
          </p>
        </div>
      </body>
    </>
  );
}
