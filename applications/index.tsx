// import { useState } from "react";
import "./App.css";
import { Button } from "@startupsquare/ds";

function Applications() {
  // const [count, setCount] = useState(0);

  return (
    <div className="m-10 flex">
      <div className="flex flex-1 flex-col space-y-2">
        <div className="flex">
          <div className="group flex transform cursor-pointer items-center space-x-3 rounded-md px-2 py-1.5 duration-300">
            <div className="h-8 w-8 flex-shrink-0 overflow-hidden rounded-md bg-blue-gray-50 shadow">
              <img
                className="h-full w-full object-cover"
                alt="program logo image"
                src="https://bit.ly/3yKwzcN"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <span className="text-base font-medium text-blue-gray-600">
                  Innov Idea
                </span>
                <span className="text-blue-gray-600">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="17"
                    width="17"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                  </svg>
                </span>
              </div>
              <span className="text-xs text-blue-gray-500 line-clamp-1">
                {" "}
                200 000 Dhs - Grant{" "}
              </span>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col">
          <div className="flex hidden flex-wrap items-center justify-between border-b bg-blue-gray-50 px-6 py-2">
            <div className="flex items-center space-x-1">
              <div className="relative">
                <div
                  className="flex flex-shrink-0 cursor-pointer items-center space-x-2 rounded border bg-white px-2 py-1.5 hover:bg-blue-gray-50"
                  id="headlessui-popover-button-13"
                  aria-expanded="false"
                >
                  <span className="flex items-center text-xs text-blue-gray-500">
                    Filter by:
                    <span className="ml-1 flex text-xs capitalize text-blue-600 first-letter:capitalize">
                      All Companies
                    </span>
                  </span>
                </div>
              </div>
              <div className="relative z-20">
                <div
                  className="flex flex-shrink-0 cursor-pointer items-center space-x-2 rounded border bg-white px-2 py-1.5 hover:bg-blue-gray-50"
                  id="headlessui-menu-button-15"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="flex items-center text-xs text-blue-gray-500">
                    Status:
                    <span className="ml-1 flex text-xs capitalize text-blue-600 first-letter:capitalize">
                      Accepted
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-1">
              <div className="flex">
                <div className="flex items-center overflow-hidden rounded-md border border-blue-gray-100 bg-blue-gray-50 !bg-white focus-within:border-blue-400 focus-within:ring-0">
                  <span className="flex items-center justify-center py-2 pl-2 text-blue-gray-400">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      height="14"
                      width="14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </span>
                  <input
                    type="text"
                    className="relative w-full rounded-none !border-0 border border-blue-gray-200 bg-blue-gray-50 !bg-white px-2 py-2 text-xs text-blue-gray-600 placeholder-blue-gray-400 !shadow-none shadow-sm focus:border-blue-600 focus:ring-0"
                    placeholder="Search ..."
                    value=""
                  />
                  <span className="flex hidden cursor-pointer items-center justify-center px-2 text-blue-gray-400">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 352 512"
                      height="12"
                      width="12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
                    </svg>
                  </span>
                </div>
              </div>
              <div className="relative z-20">
                <div
                  className="flex flex-shrink-0 cursor-pointer items-center space-x-2 rounded border bg-white px-2 py-1.5 hover:bg-blue-gray-50"
                  id="headlessui-menu-button-16"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="flex flex-shrink-0 items-center text-xs text-blue-gray-500">
                    Sort by:
                    <span className="ml-1 flex text-xs capitalize text-blue-600 first-letter:capitalize">
                      Newest First
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex border-t py-2 text-[10px] font-medium uppercase tracking-widest text-blue-gray-400">
            <div className="flex w-1/2 items-center px-3 text-left">
              Companies
            </div>
            <div className="flex w-1/6 items-center">Status</div>
            <div className="flex w-1/6 items-center px-6">Slice</div>
            <div className="elative relative flex w-1/6 items-center px-6">
              Comments
            </div>
          </div>
          <div className="flex flex-col">
            <div className="group flex items-center overflow-hidden border-t bg-white px-2 py-1">
              <div className="flex w-1/2 items-center">
                <div className="relative inline-flex h-10 w-10 flex-shrink-0 items-center justify-center overflow-hidden rounded-md border border-transparent bg-blue-gray-100 text-3xl uppercase text-blue-gray-600">
                  <img
                    className="h-full w-full"
                    alt=""
                    src="https://bit.ly/3AuHZCR"
                  />
                </div>
                <div className="flex w-full flex-1 flex-col p-2 pt-1">
                  <div className="flex flex-wrap items-center space-x-1">
                    <span className="text-sm font-medium capitalize line-clamp-1">
                      Felicity{" "}
                    </span>
                  </div>
                  <span className="flex-shrink-0 text-xs text-blue-gray-500">
                    {" "}
                    do it with chocolate!
                  </span>
                </div>
              </div>
              <div className="flex w-1/6 text-sm">
                <span className="relative flex items-center justify-center space-x-1 overflow-hidden rounded-sm border border-transparent bg-green-50 px-2 py-1 text-2xs font-medium text-green-600">
                  Accepted
                </span>
              </div>
              <div className="flex w-1/6 px-6 text-sm text-blue-gray-500">
                <div className="relative">
                  <div className="relative">
                    <div
                      className="flex flex-shrink-0 cursor-pointer items-center border-blue-gray-200 px-2 py-1.5 hover:bg-blue-gray-50"
                      id="headlessui-popover-button-85"
                      aria-expanded="false"
                    >
                      <span> 2</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-1/6 flex-shrink-0 px-6 text-center text-xs text-blue-gray-500">
                <span className="text-xs text-blue-gray-500">3 comments</span>
              </div>
            </div>
            <div className="group flex items-center overflow-hidden border-t bg-white px-2 py-1">
              <div className="flex w-1/2 items-center">
                <div className="relative inline-flex h-10 w-10 flex-shrink-0 items-center justify-center overflow-hidden rounded-md border border-transparent bg-blue-gray-100 text-3xl uppercase text-blue-gray-600">
                  <img
                    className="h-full w-full"
                    alt=""
                    src="https://bit.ly/3uuSXo1"
                  />
                </div>
                <div className="flex w-full flex-1 flex-col p-2 pt-1">
                  <div className="flex flex-wrap items-center space-x-1">
                    <span className="text-sm font-medium capitalize line-clamp-1">
                      Bii By Sustainable Food Solutions{" "}
                    </span>
                  </div>
                  <span className="flex-shrink-0 text-xs text-blue-gray-500">
                    {" "}
                    Bii - together against food waste{" "}
                  </span>
                </div>
              </div>
              <div className="flex w-1/6 text-sm">
                <span className="relative flex items-center justify-center space-x-1 overflow-hidden rounded-sm border border-transparent bg-yellow-50 px-2 py-1 text-2xs font-medium text-yellow-600">
                  In progress
                </span>
              </div>
              <div className="flex w-1/6 px-6 text-sm text-blue-gray-500">
                <div className="relative">
                  <div className="relative">
                    <div
                      className="flex flex-shrink-0 cursor-pointer items-center border-blue-gray-200 px-2 py-1.5 hover:bg-blue-gray-50"
                      id="headlessui-popover-button-85"
                      aria-expanded="false"
                    >
                      <span> 2</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-1/6 flex-shrink-0 px-6 text-center text-xs text-blue-gray-500">
                <span className="text-xs text-blue-gray-500">5 comments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Applications;
