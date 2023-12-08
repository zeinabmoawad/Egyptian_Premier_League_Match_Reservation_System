import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Seat from "./seat";
import "./seats.css";

export default function Seats(props) {
  const rows = 3;
  const columns = 4;

  const renderSeats = () => {
    const seats = [];

    for (let i = 0; i < rows; i++) {
      const rowSeats = [];

      for (let j = 0; j < columns; j++) {
        rowSeats.push(
          <Col key={i} className="seats-col">
            <Seat key={`${i}-${j}`} />
          </Col>
        );
      }

      seats.push(<Row key={i}>{rowSeats}</Row>);
    }

    return seats;
  };

  return (
    <div>
      <Container className="seats-container">{renderSeats()}</Container>
    </div>
  );
}
