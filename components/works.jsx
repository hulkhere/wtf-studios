import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const works = [
  {
    name: "Deefy",
    propertyOne: "Web3 Design",
    propertyTwo: "NFT Marketplace",
    backgroundColor: "#8A02FD",
  },
  {
    name: "ARTO GLOBAL",
    propertyOne: "Website",
    propertyTwo: "Mobile App",
    backgroundColor: "#D80672",
  },
  {
    name: "Inc 42",
    propertyOne: "Website",
    propertyTwo: "UI/UX",
    backgroundColor: "#E6371B",
  },
  {
    name: "Shamanz",
    propertyOne: "Website Development",
    propertyTwo: "React JS",
    backgroundColor: "#FDF150",
  },
];

export default function Works(props) {
  return (
    <>
      <div className="flex flex-col gap-y-20">
        {works.map((item, index) => (
          <div key={index} className="flex gap-x-12">
            <div
              style={{
                backgroundColor: item.backgroundColor,
              }}
              className="w-[55rem] h-[41rem]"
            ></div>
            <div className="flex flex-col">
              <div
                onMouseEnter={props.textEnter}
                onMouseLeave={props.textLeave}
                className="text-7xl text-[#e3e8d2] main-font max-w-[10rem]"
              >
                {item.name}
              </div>
              <div
                onMouseEnter={props.textEnter}
                onMouseLeave={props.textLeave}
                className="text-[#E3EBD2] flex text-2xl font-sans"
              >
                <div>{item.propertyOne} ✦ </div>
                <div className="pl-2">{item.propertyTwo}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
