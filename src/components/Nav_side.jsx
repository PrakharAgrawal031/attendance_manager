import React from "react";
import { useState } from "react";

export default function Nav_side() {
  const [open, setOpen] = useState(false);
  const Menus = [
    {title: "Dashboard", src: "./src/assets/home.png"},
    {title: "Timetable", src: "./src/assets/calendar.png"},
    {title: "Subjects", src: "./src/assets/book.png"},
    {title: "Help", src: "./src/assets/question.png", gap: true},
  ]
  return (
    <div
      className={` ${open ? "w-64 pt-4" : "w-12 pt-3" } pt-3 p-1  h-[99vh]  rounded-md m-1 duration-200 bg-[#0C1020] relative`}
    >
      <div className="flex gap-x-4 pl-2 items-center">
        <img
          src="./src/assets/logo.png"
          className={`w-6 cursor-pointer duration-500 ${!open && 'rotate-[360deg]'}`}
        />
        <h1 className={`text-gray-200 origin-left font-medium text-lg duration-200 ${!open && "scale-0"}`}>Attendance-Manager</h1>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`w-5 h-5 text-gray-200 absolute cursor-pointer rounded-full -right-3 top-16 border-2 bg-[#0C1020] ${!open && 'rotate-180'}`}
        onClick={() => setOpen(!open)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
      <ul className="pt-6">
        {Menus.map((menu,index)=>(
          <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer ${open ? 'p-3' : 'p-2'} hover:bg-gray-700 rounded-full hover:rounded-md duration-75 ${menu.gap ? "mt-8" : "mt-2"}`}>
            <img src={`${menu.src}`} className = {`w-6`}/>
            <span className={`${!open && 'hidden'} origin-left duration-300 `}>{menu.title}</span>

          </li>
        ))}
      </ul>
    </div>
  );
}
