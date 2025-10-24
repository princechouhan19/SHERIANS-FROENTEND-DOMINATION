import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

function Work() {

  const [images, setImages] = useState([
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "43%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "65%",
      left: "55%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change" , (data) => {

    function imageShow(arr) {
          setImages(images.map((elem, index) => ({
            ...elem,
            isActive: arr.includes(index),
          })));
        }

    switch (Math.floor(data * 100)) {
      case 0:
        imageShow([]);
        break;
      case 1:
        imageShow([0]);
        break;
      case 2:
        imageShow([0,1]);
        break;
      case 3:
        imageShow([0,1,2]);
        break;
      case 4:
        imageShow([0,1,2,3]);
        break;
      case 5:
        imageShow([0,1,2,3,4]);
        break;
      case 6:
        imageShow([0,1,2,3,4,5]);
        break;
      default:
        break;
    }
  })

  return (
    <div className="mt-6 w-full">
      <div className="relative mx-auto max-w-screen-xl text-center">
        <h1 className="select-none text-[34vw] font-medium leading-none tracking-tight">
          work
        </h1>
        <div className="absolute top-0 h-full w-full">
          {images.map(
            (elem, index) =>
              elem.isActive && (
                <img
                  key={index}
                  src={elem.url}
                  className="absolute w-60 -translate-x-[50%] -translate-y-[50%] rounded-lg"
                  style={{ top: elem.top, left: elem.left }}
                  alt={elem.url}
                />
              ),
          )}
        </div>
      </div>
    </div>
  );
}

export default Work;
