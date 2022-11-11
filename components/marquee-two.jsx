import React, { useEffect, useState } from "react";
import BlackStar from "./svgs/black-star";
import Marquee from "react-easy-marquee";

export default function MarqueeTwo() {
  return (
    <div className="-mt-28 -ml-40">
      <div className="hidden lg:block">
        <Marquee
          className="marquee-two"
          duration={10000}
          background="#B7D500"
          width="100%"
          height="80px"
        >
          <main className="w-full h-20 lg:h-20 bg-[#B7D500] flex items-center justify-center gap-x-5">
            <h1 className="text-black text-5xl main-font">COMING SOON</h1>
            <BlackStar />
            <h1 className="text-black text-5xl main-font">COMING SOON</h1>
            <BlackStar />
            <h1 className="text-black text-5xl main-font">COMING SOON</h1>
            <BlackStar />
          </main>
        </Marquee>
      </div>
      <div className="block lg:hidden">
        <Marquee
          className="marquee-two"
          duration={10000}
          background="#B7D500"
          width="100%"
          height="60px"
        >
          <main className="w-full h-20 lg:h-20 bg-[#B7D500] flex items-center justify-center gap-x-5">
            <h1 className="text-black text-5xl main-font">COMING SOON</h1>
            <BlackStar />
            <h1 className="text-black text-5xl main-font">COMING SOON</h1>
            <BlackStar />{" "}
            <h1 className="text-black text-5xl main-font">COMING SOON</h1>
            <BlackStar />
          </main>
        </Marquee>
      </div>
    </div>
  );
}
