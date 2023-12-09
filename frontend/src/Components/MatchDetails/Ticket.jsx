import React from "react";
import "./Ticket.css";
import { MdDelete } from "react-icons/md";
import { FaTicketAlt } from "react-icons/fa";
import { MdEventSeat } from "react-icons/md";
import { TbReportMoney } from "react-icons/tb";
export default function Ticket(props) {
  function deleteTicket() {
    props.deleteTicket(props.label);
  }
  return (
    <div className="ticket">
      <div className="ticket-delete" onClick={deleteTicket}>
        <MdDelete />
      </div>
      <div className="ticker-ticket">
        <FaTicketAlt />
      </div>
      <div className="ticket-details">
        <div className="ticket-details-label">
          <MdEventSeat />
          {props.label}
        </div>
        <div className="ticket-details-price">
          <TbReportMoney />
          {props.price}
        </div>
      </div>
    </div>
  );
}
