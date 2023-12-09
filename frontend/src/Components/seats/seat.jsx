import React, { useState } from "react";
import { FaChair } from "react-icons/fa6";
import "./seat.css";
export default function Seat(props) {
  const [selected, setSelected] = useState(false);
  const [reserved, setReserved] = useState(false);
  function toggleSelection() {
    if (!reserved) {
      setSelected(!selected);
      props.onSeatClick(props.id);
    }
  }
  return (
    <div onClick={toggleSelection}>
      <FaChair
        className={
          reserved ? "reserved" : selected ? "selected" : "not-selected"
        }
      />
    </div>
  );
}
