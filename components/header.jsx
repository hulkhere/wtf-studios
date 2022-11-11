import React from "react";
import Logo from "./svgs/logo";

const nav = [
  {
    name: "About",
    link: "",
  },
  {
    name: "Work",
    link: "",
  },
  {
    name: "Contact us",
    link: "",
  },
];

export default function Header() {
  return (
    <div className="w-full h-max flex items-center justify-between text-[#E3EBD2] bg-black p-12">
      <Logo />
      <div className="flex text-xl items-center gap-x-11 main-font">
        {nav.map((item, index) => (
          <a className="" key={index}>
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}
