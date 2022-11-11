import React, { useEffect, useState } from "react";

export default function Mail() {
  // const [zOpen, setZOpen] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setZOpen(!zOpen);
  //   }, 5000);
  // }, []);

  return (
    <main className="flex flex-col items-center justify-center gap-x-4 lg:flex-row gap-y-4 lg:mt-0">
      <div className="z-20">
        <input
          placeholder="Enter your email"
          type="email"
          className="text-sm lg:text-lg bg-[#E3EBD2] w-[20rem] h-10 lg:w-[30rem] lg:h-14 main-font pl-10 text-black placeholder:text-black outline-none z-10"
        />
      </div>
      <button className="text-sm lg:text-lg w-[20rem] h-10 flex items-center justify-center lg:w-40 lg:h-14 bg-[#E85433] text-black main-font z-10">
        Notify Me
      </button>
    </main>
  );
}
