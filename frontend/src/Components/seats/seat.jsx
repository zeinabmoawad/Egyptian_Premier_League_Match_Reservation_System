import React, { useState } from "react";
import { FaChair } from "react-icons/fa6";
import "./seat.css";
export default function Seat(props) {
  const [selected, setSelected] = useState("");
  function toggleSelection() {
    setSelected(!selected);
    props.onSeatClick(props.id);
  }
  return (
    <div onClick={toggleSelection}>
      <FaChair className={selected ? "selected" : "not-selected"} />
    </div>
  );
}
