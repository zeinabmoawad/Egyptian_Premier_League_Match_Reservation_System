import React, { useState } from "react";
import { FaChair } from "react-icons/fa6";
import "./seat.css";
export default function Seat() {
  const [selected, setSelected] = useState("");
  function toggleSelection() {
    setSelected(!selected);
  }
  return (
    <div onClick={toggleSelection}>
      <FaChair className={selected ? "selected" : "not-selected"} />
    </div>
  );
}
