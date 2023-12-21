import React, { useState } from "react";
import { FaChair } from "react-icons/fa";
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
      size={50}
        className={
          reserved
            ? "reserved icon"
            : props.selected
            ? "selected icon"
            : "not-selected icon"
        }
      />
    </div>
  );
}
