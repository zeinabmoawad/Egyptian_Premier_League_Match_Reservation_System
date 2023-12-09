import React from "react";
import "./MatchDetails.css";
import Seats from "../seats/seats";
import Ticket from "./Ticket";
import { Container, Row, Col } from "react-bootstrap";
import field from "../Assets/field.png";
import AlAhly from "../Assets/teams logos 240x240/01.png";
import WadiDegla from "../Assets/teams logos 240x240/15.png";
export default function MatchDetails() {
  return (
    <div>
      <Container className="container-fluid match-details-container">
        <Row className="match-details-row">
          <Col className="match-details-teams">
            <div className="team">
              <img src={AlAhly} alt="" />
              <p>Al-Ahly</p>
            </div>
            <div>
              <p>12:00</p>
              <p>Mar 23,2023</p>
            </div>
            <div>
              <img src={WadiDegla} alt="" />
              <p>Wadi Degla</p>
            </div>
          </Col>
        </Row>
        <Row className="match-details-row">
          <Col>
            <Seats></Seats>
            <img src={field} alt="" />
          </Col>
          <Col>
            <Ticket label="B1" price="200"></Ticket>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
