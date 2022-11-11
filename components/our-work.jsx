import React from "react";
import DownArrow from "./svgs/down-arrow";
import Works from "../components/works";

export default function OurWork() {
  return (
    <>
      <div className="p-12 flex flex-col gap-y-20">
        <DownArrow />
        <div>
          <h1 className="text-6xl text-[#E3EBD2] main-font">Our Work</h1>
          <div className="bg-[#E3EBD2] h-[1px] w-full mt-5"></div>
        </div>
      </div>
    </>
  );
}
