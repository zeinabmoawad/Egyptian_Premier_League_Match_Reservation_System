import React, { useState } from "react";
import { FaChair } from "react-icons/fa6";
import "./seat.css";
export default function Seat(props) {
  const [reserved, setReserved] = useState(false);
  function toggleSelection() {
    if (!reserved) {
      // setSelected(!selected);
      props.onSeatClick(props.id);
    }
  }
  return (
    <div onClick={toggleSelection}>
      <FaChair
        className={
          reserved ? "reserved" : props.selected ? "selected" : "not-selected"
        }
      />
    </div>
  );
}
