import React from "react";
import "./deleteTicketPopUp.css";

export default function DeleteTicketPopUp(props) {
  return (
    <div className="popup">
      <h1>Tickets Purchasing:</h1>
      <h6>Credit Card</h6>
      <input type="text" />
      <h6>PIN</h6>
      <input type="password" />
      <h4>Total Price:{props.price} EGP</h4>
    </div>
  );
}
