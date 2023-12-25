import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Seat from "./seat";
import "./seats.css";

export default function Seats(props) {
  const numbers = Array.from(Array(props.columns + 1).keys());
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const renderSeats = () => {
    const seats = [];

    for (let i = 0; i < props.rows; i++) {
      const rowSeats = [];
      for (let j = 0; j <= props.columns; j++) {
        if (j == 0)
          rowSeats.push(
            <Col className="seats-col" key={`${j}-${i}`}>
              {alphabet[i]}
            </Col>
          );
        else
          rowSeats.push(
            <Col key={i} className="seats-col">
              <Seat
                userType={props.userType}
                key={`${i}-${j}`}
                id={`${i+1}${j}`}
                onSeatClick={props.onSeatClick}
                selected={props.selectedSeats.includes(`${i+1}${j}`)}
                reserved={props.reserved[i][j-1]}
              />
            </Col>
          );
      }

      seats.push(<Row key={i}>{rowSeats}</Row>);
    }

    return seats;
  };

  return (
    <div>
      <Container className="seats-container">
        <Row className="seats-number-row">
          {numbers.map((number, i) => (
            <Col key={100 + i}>{number}</Col>
          ))}
        </Row>
        {renderSeats()}
      </Container>
    </div>
  );
}
