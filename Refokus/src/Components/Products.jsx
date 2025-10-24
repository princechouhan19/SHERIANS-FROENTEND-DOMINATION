import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

function Products() {

  const products = [
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
      video: "https://cdn.refokus.com/website/Arqitel/Arqitel%20project%20video%204_3.webm",
      hover: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/650c621a3aa0ee3ae147d692_arqitel-bg-p-2000.webp",
    },
    {
      title: "Cula",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      case: true,
      video: "https://cdn.refokus.com/website/Cula_promo_new_4_3.mp4",
      hover: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b41319bda140bccae204ae_bg%202.png",
    },
    {
      title: "Layout Land",
      description:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      live: true,
      case: false,
      video: "https://cdn.refokus.com/refokus-promo/webflow-education-promo.mp4",
      hover: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/65f11502e2fa59425089e2e6_Work%20Background-p-2000.png",
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: true,
      video: "https://cdn.refokus.com/website/TTR/TTR%20project%20video%204_3_H.264.webm",
      hover: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/64b754980b23ab2f2f2ff9e2_Work%20Background%20(1)-p-2000.jpg",
    },
    {
      title: "Maniv",
      description:
        "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
      live: true,
      case: false,
      video: "https://cdn.refokus.com/website/Maniv-Compressed.mp4",
      hover: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b2ccf5af18668cfbd3a8d6_bg%201-p-1600.png",
    },
    {
      title: "YIR 2022",
      description:
        "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      live: true,
      case: false,
      video: "https://cdn.refokus.com/website/YIR%20website%202022%204_3_VP9.webm",
      hover: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/6450586e80fac7eb1655014f_yir2022%E2%80%93bg-p-2000.png",
    },
    {
      title: "Yahoo!",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      live: true,
      case: true,
      video: "https://cdn.refokus.com/website/2022/videos/yahoo.webm",
      hover: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/6450586e80fac7eb1655014f_yir2022%E2%80%93bg-p-2000.png",
    },
  ];

  const [pos, setPos] = useState(0);

  const mover = (val) => {
    setPos(val * 22);
  };

  return (
    <div className="mt-28 relative">
      {products.map((elem, index) => (
        <Product mover={mover} count={index} val={elem} key={index} />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + "rem" }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="absolute w-[32rem] h-[22rem] left-[44%] overflow-hidden rounded-md"
        >
          {/* Single container that maps over products once */}
          <motion.div
            animate={{ y: -pos + "rem" }}
            className="w-full h-full rounded-sm"
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          >
            {products.map((elem, idx) => (
              <video key={idx} src={elem.video} autoPlay loop muted className="w-full h-full object-cover rounded-sm" />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;