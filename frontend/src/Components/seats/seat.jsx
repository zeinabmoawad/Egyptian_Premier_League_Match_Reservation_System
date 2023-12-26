import React, { useState } from "react";
import { FaChair } from "react-icons/fa";
import "./seat.css";
import { useNavigate } from "react-router-dom";

export default function Seat(props) {
  console.log(props.userType);
  const [reserved, setReserved] = useState(false);
  function toggleSelection() {
    if (props.userType == "guest") {
      navigate("/Signup");
      // navigate('/Signup');
    } else if (props.userType == "user") {
      if (!reserved) {
        // setSelected(!selected);
        props.onSeatClick(props.id);
      }
    }
  }
  const navigate = useNavigate();

  const handleRedirect = () => {
    if (props.userType == "guest") {
      // Change the route programmatically
      navigate("/Signup");
    } else if (!props.reserved) {
      // setSelected(!selected);
      props.onSeatClick(props.id);
    }
  };
  return (
    <div onClick={handleRedirect}>
      <FaChair
        size={50}
        className={
          props.reserved
            ? "reserved icon"
            : props.selected
            ? "selected icon"
            : "not-selected icon"
        }
      />
    </div>
  );
}
