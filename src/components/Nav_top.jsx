import React from "react";

export default function Nav_top(){
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const d = new Date();
const month = months[d.getMonth()];
    return(
        <div className=" mt-3 flex  justify-center mb-6 ml-[3.9rem]">
            <p>{month} {d.getDate()}, {d.getFullYear()}</p>
        </div>
    )
}