import React, { useState } from "react";
import Button from "./Button";

function Product({ val, mover, count }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative h-[22rem] w-full py-20 transition-all duration-300"
      onMouseEnter={() => {
        mover(count);
        setIsHovered(true);
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && val.hover && (
        <div
          className="absolute inset-0 h-full object-contain bg-center opacity-30"
          style={{ backgroundImage: `url(${val.hover})` , height: "80%" , marginTop: "2%"}}
        />
      )}

      <div className="relative z-10 mx-auto flex max-w-screen-xl items-center justify-between">
        <h1 className="text-4xl font-medium capitalize">{val.title}</h1>
        <div className="dets w-1/3">
          <p className="leading-1 mb-10 text-lg">{val.description}</p>
          <div className="flex items-center gap-6">
            {val.live && <Button />}
            {val.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
