import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Star from "./svgs/star";
import GreenArrow from "./svgs/green-arrow";
import Cursor from "./cursor";

export default function Hero(props) {
  return (
    <>
      <main
        className="w-full flex bg-black text-[#E3EBD2] p-12 mt-48 relative xl:gap-x-24 2xl:gap-x-40 main-font"
        onMouseEnter={props.textEnter}
        onMouseLeave={props.textLeave}
      >
        <div className="tracking-wide">
          <div
            onMouseEnter={props.textEnter}
            onMouseLeave={props.textLeave}
            className="text-5xl font-bold"
          >
            WE DO
          </div>
          <div className="flex">
            <div
              onMouseEnter={props.textEnter}
              onMouseLeave={props.textLeave}
              className="text-8xl leading-none font-bold tracking-wide"
            >
              FULL STACK
            </div>
            <div className="-mt-20">
              <GreenArrow />
            </div>
          </div>
          <div
            onMouseEnter={props.textEnter}
            onMouseLeave={props.textLeave}
            className="text-8xl leading-none font-bold"
          >
            DESIGN AND DEV
          </div>
        </div>
        <Star />
      </main>
    </>
  );
}
