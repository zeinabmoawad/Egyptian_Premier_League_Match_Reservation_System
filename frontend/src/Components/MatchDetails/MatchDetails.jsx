import React, { useState } from "react";
import "./MatchDetails.css";
import Seats from "../seats/seats";
import Ticket from "./Ticket";
import { Container, Row, Col } from "react-bootstrap";
import field from "../Assets/field.png";
import AlAhly from "../Assets/teams logos 240x240/01.png";
import WadiDegla from "../Assets/teams logos 240x240/15.png";
export default function MatchDetails() {
  const [columns, setColumns] = useState(5);
  const [rows, setRows] = useState(5);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const handleSeatClick = (seatId) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats((prevSelectedSeats) =>
        prevSelectedSeats.filter((id) => id !== seatId)
      );
    } else {
      setSelectedSeats((prevSelectedSeats) => [...prevSelectedSeats, seatId]);
    }
  };
  return (
    <div>
      <Container className="container-fluid match-details-container">
        <Row className="match-details-row">
          <Col className="match-details-teams">
            <div>
              <img src={AlAhly} alt="" />
              <p>Al-Ahly</p>
            </div>
            <div className="match-details-day-time">
              <p className="match-details-time">12:00</p>
              <p className="match-details-day">Mar 23,2023</p>
            </div>
            <div>
              <img src={WadiDegla} alt="" />
              <p>Wadi Degla</p>
            </div>
          </Col>
        </Row>
        <Row className="match-details-row">
          <Col>
            <Seats
              columns={columns}
              rows={rows}
              onSeatClick={handleSeatClick}
            ></Seats>
            <img src={field} alt="" />
          </Col>
          <Col>
            {selectedSeats.length == 0 ? null : (
              <div className="match-details-tickets-header">
                <h1>Tickets:</h1>
                <button type="button" class="btn btn-primary">
                  Purchase
                </button>
              </div>
            )}
            <div className="match-details-tickets">
              {selectedSeats.map((item, i) => (
                <Ticket label={item} price="200"></Ticket>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
