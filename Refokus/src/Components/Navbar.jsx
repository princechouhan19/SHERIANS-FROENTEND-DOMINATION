import React from "react";
import Button from "../Components/Button";

function Navbar() {
  return (
    <nav className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-6 border border-zinc-700 fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%]  rounded-full shadow-lg backdrop-blur-md">
      <div className="nleft flex items-center">
        <img
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt="Logo"
        />
        <div className="Links ml-24 flex gap-14 items-center">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <span key={index} className="h-7 w-[2px] bg-zinc-700"></span>
            ) : (
              <a
                key={index}
                className="font-regular flex items-center gap-1 text-sm"
                href="#"
              >
                {index === 1 && (
                  <span
                    key={index}
                    style={{ boxShadow: "0 0 0.252em #00FF19" }}
                    className="inline-block h-1 w-1 rounded-full bg-green-400 "
                  ></span>
                )}
                {elem}
              </a>
            ),
          )}
        </div>
      </div>
      <Button />
    </nav>
  );
}

export default Navbar;
