import React, { useState, useEffect } from "react";
import BlackStar from "./svgs/black-star";
import Marquee from "react-easy-marquee";
import MarqueeTwo from "./marquee-two";
import {motion, useTransform} from "framer-motion";

export default function MarqueeOne() {


  return (
    <>
      {/* <div className="w-screen h-screen mt-64 absolute">
        <motion.div 
        animate={{ marginTop: "-16rem" , marginRight:"5rem" }}
        transition={{ duration: 5 }}
        >
        <Marquee
          className="marquee"
          duration={10000}
          background="#B7D500"
          width="100%"
          height="80px"
        >
          <main className="w-full h-20 bg-[#B7D500] flex items-center justify-center gap-x-5">
            <h1 className="text-black text-5xl main-font">COMING SOON</h1>
            <BlackStar />
            <h1 className="text-black text-5xl main-font">COMING SOON</h1>
            <BlackStar />{" "}
            <h1 className="text-black text-5xl main-font">COMING SOON</h1>
              <BlackStar />
          </main>
        </Marquee>
        </motion.div>
        {/* <MarqueeTwo /> 
      </div>
      <div className="w-screen mt-96 ml-28 absolute">
        <motion.div 
        animate={{ marginTop: "22rem" , marginLeft:"15rem" , rotate:"rotate(-15deg)" }}
        transition={{ duration: 5 }}
        >
        <Marquee
          className="marquee-two"
          duration={10000}
          background="#B7D500"
          width="100%"
          height="80px"
        >
          <main className="w-full h-20 bg-[#B7D500] flex items-center justify-center gap-x-5">
            <h1 className="text-black text-5xl main-font">COMING SOON</h1>
            <BlackStar />
            <h1 className="text-black text-5xl main-font">COMING SOON</h1>
            <BlackStar />{" "}
            <h1 className="text-black text-5xl main-font">COMING SOON</h1>
              <BlackStar />
          </main>
        </Marquee>
        </motion.div>
        {/* <MarqueeTwo /> */}
      {/* </div> */}
    </>
  );
}
