import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../assets/NavBar";

export default function SquareTest() {
  return (
    <>
      <NavBar />
      <body className="">
        <div className="container p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3 ">
          <h1 className="--bs-danger-text-emphasis">
            The Square Test Calculator
          </h1>
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
      </body>
    </>
  );
}
