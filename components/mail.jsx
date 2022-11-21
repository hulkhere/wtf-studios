import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Mail() {
  const [mail, setMail] = useState("");
  const [button, setButton] = useState(false);
  const [message, setMessage] = useState("");

  console.log(mail);

  function handleSubmit() {
    const regEx =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (regEx.test(mail)) {
      axios
        .post("/api/waitlist", {
          email: mail,
        })
        .then(() => {
          console.log("success");
        })
        .catch((err) => {
          console.log(err);
        });
      setButton(true);
      setMessage("");
    } else {
      setButton(false);
      setMessage(
        "uh-oh, that doesn’t look like a valid email, try again maybe?"
      );
    }
  }

  return (
    <>
      {button ? (
        <div className="lg:hidden uppercase main-font text-[#E3EBD2] py-6 text-2xl lg:text-5xl text-center tracking-wide px-2">
          Something cool coming up in your inbox real soon!
        </div>
      ) : (
        <div className="lg:hidden uppercase main-font text-[#E3EBD2] py-6 text-xl lg:text-5xl text-center tracking-wide px-2">
          giving your company <br /> the digital presence <br /> it needs
        </div>
      )}
      {button ? (
        <div className="max-w-6xl hidden lg:block uppercase main-font text-[#E3EBD2] py-6 text-[14px] lg:text-5xl text-center tracking-wide">
          Something cool coming up in your inbox real soon!
        </div>
      ) : (
        <div>
          <div className="max-w-6xl hidden lg:block uppercase main-font text-[#E3EBD2] py-6 text-[14px] lg:text-5xl text-center tracking-wide">
            giving your company the digital presence it needs
          </div>
        </div>
      )}
      <main className="">
        {button ? (
          <div className="text-[#B7D500] text-4xl main-font mt-4">
            Woohoooo!!
          </div>
        ) : (
          <div className="flex flex-col">
            <div className="flex flex-col justify-center gap-x-4 lg:flex-row gap-y-4 lg:mt-0">
              <div className="z-20">
                <input
                  required
                  placeholder="Enter your email"
                  type="email"
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                  className={
                    !message
                      ? "text-sm lg:text-lg bg-black w-[20rem] h-10 lg:w-[30rem] lg:h-14 main-font pl-4 text-white placeholder:text-white outline-none z-10 border-2 border-[#B7D500]"
                      : "text-sm lg:text-lg bg-black w-[20rem] h-10 lg:w-[30rem] lg:h-14 main-font pl-4 text-white placeholder:text-white outline-none z-10 border-2 border-[#D50000]"
                  }
                />
              </div>
              <button
                onClick={() => {
                  handleSubmit();
                }}
                className="notify-button-shadow text-sm lg:text-lg w-[20rem] h-10 flex items-center justify-center lg:w-40 lg:h-14 bg-[#B7D500] text-black main-font z-10"
              >
                Notify Me
              </button>
            </div>
            <div
              className={
                message
                  ? "text-2xl text-white h-10 mt-1"
                  : "invisible mt-1 z-30 h-10"
              }
            >
              <h1 className="text-[#D50000] tracking-wide max-w-xs text-xs lg:text-sm main-font lg:max-w-none">
                {message}
              </h1>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
