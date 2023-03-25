import React from "react";

//md:grid md:grid-cols-5 md:gap-x-[17rem]

const Card = (props) => {
  const list = props.list;

  console.log(props, list);
  return (
    <div className="md:flex md:flex-wrap">
      {list.map((lists) => (
        <div
          className="bg-[#d4d4d4] w-80 m-1.5 ml-[3.9rem] md:ml-28 mb-3 p-2 rounded-lg shadow-lg md:w-60 md:h-60 "
          key={lists.i}
        >
          <div className="flex justify-between md:flex-none">
            <h1>{lists.subject}</h1>
            <h1>{lists.attended} / {lists.total}</h1>
            <h1>{(lists.attended / lists.total) * 100}%</h1>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col justify-between">
              <h1>Bunks: {lists.bunks}</h1> 
              <h1>Need to attend: {lists.need}</h1>
            </div>
            <div className="mt-5">
              <button className="bg-green-400 m-1 rounded-full p-1 text-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                  onClick={() => setlist(list.attended=list.attended+1, list.total = list.total+1)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </button>
              <button className="bg-red-400 m-1 rounded-full p-1 text-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
