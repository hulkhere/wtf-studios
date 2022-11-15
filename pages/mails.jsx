import axios from "axios";
import React, { useState, useEffect } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function GetMails() {
  const [mails, setMails] = useState([]);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [data, setData] = useState(false);

  const [copied, setCopied] = useState(false);

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (password === "shitgoeswtf") {
      setPasswordError("");
      setData(true);
    } else {
      setPasswordError("Wrong password");
    }
  }

  useEffect(() => {
    axios.get("/api/get").then((res) => {
      setMails(res.data);
    });
  }, []);

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 5000);
    }
  }, [copied]);
  return (
    <>
      <main className="w-full h-screen bg-white flex justify-center items-center">
        {!data && (
          <main className="flex flex-col">
            <input
              required
              placeholder="Enter password"
              type="password"
              onChange={handlePassword}
              className={
                "text-sm lg:text-lg bg-white w-[20rem] h-10 lg:w-[30rem] lg:h-14 main-font pl-4 text-black placeholder:text-black outline-none z-10 border-2 border-[#B7D500]"
              }
            />
            <button
              onClick={handleSubmit}
              className="bg-[#b7d500] text-black text-2xl main-font mt-4 py-2"
            >
              Enter
            </button>
            <div
              className={
                passwordError
                  ? "text-2xl text-white visible mt-1 z-30"
                  : "invisible mt-1 z-30"
              }
            >
              <h1 className="text-[#D50000] text-base main-font">
                {passwordError}
              </h1>
            </div>
          </main>
        )}
        {data && (
          <div className="w-max lg:w-[40rem] px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col">
              <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle">
                  <div className="w-full shadow-sm ring-1 ring-black ring-opacity-5 h-[30rem] overflow-scroll">
                    <table
                      className="min-w-full border-separate"
                      style={{ borderSpacing: 0 }}
                    >
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                          >
                            Email
                          </th>
                          <th
                            scope="col"
                            className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                          >
                            Date
                          </th>
                          <th
                            scope="col"
                            className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
                          >
                            Time
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        {mails.map((item, personIdx) => (
                          <tr key={personIdx}>
                            <td
                              className={classNames(
                                personIdx !== mails.length - 1
                                  ? "border-b border-gray-200"
                                  : "",
                                "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
                              )}
                            >
                              {item.email}
                            </td>
                            <td
                              className={classNames(
                                personIdx !== mails.length - 1
                                  ? "border-b border-gray-200"
                                  : "",
                                "whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden sm:table-cell"
                              )}
                            >
                              {new Date(item.createdAt).toLocaleDateString()}
                            </td>
                            <td
                              className={classNames(
                                personIdx !== mails.length - 1
                                  ? "border-b border-gray-200"
                                  : "",
                                "whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden lg:table-cell"
                              )}
                            >
                              {new Date(item.createdAt).toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-5">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(
                    mails.map((item) => item.email).join(", ")
                  );
                  setCopied(true);
                }}
                className="rounded-lg text-sm lg:text-lg w-[20rem] h-10 flex items-center justify-center lg:w-60 lg:h-14 bg-[#B7D500] text-black main-font z-10"
              >
                {copied ? "Copied!" : "Copy All Emails"}
              </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
