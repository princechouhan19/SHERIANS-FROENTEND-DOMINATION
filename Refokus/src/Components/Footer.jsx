import React from "react";

function Footer() {
  return (
    <div className="w-full">
      <div className="mx-auto flex max-w-screen-xl gap-32 py-10">
        <div className="basis-1/2">
          <h1 className="text-[11.5rem] font-semibold leading-none tracking-tight">
            refokus.
          </h1>
          <div className="font-sm ml-2 mt-12 flex gap-10 text-sm text-zinc-400">
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
            <p>Impressum</p>
            <p>Terms</p>
          </div>
        </div>
        <div className="basis-1/2 flex gap-20">
          <div className="flex flex-col" >
            <h4 className="text-zinc-400 mb-4">Socials</h4>
            {["Instagram" , "Twitter" , "LinkedIn"].map((item , index)=> <a key={index} className="text-zinc-600 mt-3 text-sm" href="https://www.linkedin.com/in/prince-chouhan-040552276">{item}</a>)}
          </div>
          <div className="flex flex-col">
            <h4 className="text-zinc-400 mb-4">Sitemap</h4>
            {["Home" , "Work" , "Careers" , "Contact"].map((item , index)=> <a key={index} className="text-zinc-200 mt-3 text-sm" href="https://www.instagram.com/prince.dzns">{item}</a>)}
          </div>
          <div className="flex flex-col mt-10">
            <h2 className="font-semibold text-right">Refokus is a pioneering digital agency driven by design and empowered by technology.</h2>
            <button className="mt-8 ml-auto w-[9rem] h-[2.2rem] bg-blue-600 flex items-center justify-center"><img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="Prince" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
