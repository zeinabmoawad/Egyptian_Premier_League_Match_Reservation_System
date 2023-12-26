import React, { useState } from "react";
import "./deleteTicketPopUp.css";

export default function DeleteTicketPopUp(props) {
  const [creditCard, setCreditCard] = useState("");
  const [pin, setPin] = useState("");
  const [creditCardError, setCreditCardError] = useState("");
  const [pinError, setPinError] = useState("");

  const handleCreditCardChange = (event) => {
    setCreditCard(event.target.value);
    setCreditCardError("");
  };

  const handlePinChange = (event) => {
    setPin(event.target.value);
    setPinError("");
  };

  const handlePurchase = () => {
    let isValid = true;

    if (creditCard.trim() === "") {
      setCreditCardError("Please enter a credit card number");
      isValid = false;
    } else if (creditCard.length != 16) {
      setCreditCardError("Please enter a valid credit card number");
      isValid = false;
    }

    if (pin.trim() === "") {
      setPinError("Please enter a PIN");
      isValid = false;
    } else if (pin.length != 3) {
      setPinError("Please enter a valid PIN number");
      isValid = false;
    }

    if (isValid) {
      // Perform additional validation if needed

      // Call the purchase API or perform any other action here

      // Close the popup window
      props.purchase_request();
      props.closeWindow(false);
      window.location.reload();
    }
  };

  return (
    <div className="popup">
      <h1>Tickets Purchasing:</h1>
      <div className="popup-inputs">
        <h6>Credit Card</h6>
        <input
          type="text"
          value={creditCard}
          onChange={handleCreditCardChange}
        />
        {creditCardError && <p className="error-message">{creditCardError}</p>}
        <h6>PIN</h6>
        <input type="password" value={pin} onChange={handlePinChange} />
        {pinError && <p className="error-message">{pinError}</p>}
        <h4>Total Price: {props.price} EGP</h4>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => props.closeWindow(false)}
        >
          Cancel
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handlePurchase}
        >
          Purchase
        </button>
      </div>
    </div>
  );
}
