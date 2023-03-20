import React, { useState } from "react";
import Card from "./Card";

export default function Cards_array() {
  const [list, setlist] = useState([
    { subject: "DBMS", attended: 9, total: 10, bunks: 1, need: "-", i: 1 },
    { subject: "OOP", attended: 5, total: 10, bunks: 1, need: "-", i: 2 },
    { subject: "MI", attended: 8, total: 10, bunks: 1, need: "-", i: 3 },
    { subject: "TOC", attended: 4, total: 10, bunks: 1, need: "-", i: 4 },
    { subject: "OS", attended: 6, total: 10, bunks: 1, need: "-", i: 5 },
    { subject: "CC", attended: 9, total: 10, bunks: 1, need: "-", i: 6 },
  ]);
  return (
    <div className="md:grid md:grid-cols-4 md:gap-4">
      <Card list={list}/>
    </div>
  );
}
