import { motion } from "framer-motion";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

var card = [
  {title: "Up Next News" , description: "Insights and behind the senses" },
  {title: "Get In Touch" , description: "Let's get to it, together" },
]

function Card({ width, start, para, hover="false" }) {
  return (
    <motion.div whileHover={{backgroundColor: hover==="true" && "#7443ff" , padding: "24px"}} className={`rounded-xl bg-zinc-800 p-5 ${width} min-h-[30rem] flex flex-col justify-between`}>
      <div className="w-full">
        <div className="flex w-full items-center justify-between">
          <h3 className="text-sm font-semibold">{card[start ? 1 : 0].title}</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="mt-5 text-2xl font-medium w-56">{card[start ? 1 : 0].description}</h1>
      </div>
      <div className="down  w-full">
        {start == true && (
          <>
            <h1 className="text-6xl font-semibold leading-none tracking-tight">
              Start a project
            </h1>
            <button className="mt-5 rounded-full border-[1px] border-zinc-50 px-5 py-2">
              Contact us
            </button>
          </>
        )}
        {para == true && (
          <>
            <p className="text-sm font-medium text-zinc-500">
              Explore what drives our team.
            </p>
          </>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
