import React from "react";
import "./ViewMatches.css";
import AlAhly from "../Assets/teams logos 30x30/01.png";
import CCleopatra from "../Assets/teams logos 30x30/02.png";
import Smouha from "../Assets/teams logos 30x30/09.png";
import Enppi from "../Assets/teams logos 30x30/10.png";
import ElMakassa from "../Assets/teams logos 30x30/14.png";
import WadiDegla from "../Assets/teams logos 30x30/15.png";
import ElEttahad from "../Assets/teams logos 30x30/16.png";
import { Container, Row, Col } from "react-bootstrap";
import { FaLocationDot } from "react-icons/fa6";

export default function ViewMatches() {
  const teamsLogos = {
    "Al-Ahly": AlAhly,
    "C. Cleopatra": CCleopatra,
    "Wadi Degla": WadiDegla,
    "El-Ettahad": ElEttahad,
    "El-Makassa": ElMakassa,
    Enppi: Enppi,
    Smouha: Smouha,
  };
  var matches = [
    {
      team1: "Wadi Degla",
      team2: "El-Ettahad",
      time: "12:00",
      day: "May 10,2025",
      location: "Alex Stadium 6, Alex",
      referee: "refereeO",
    },
    {
      team1: "Al-Ahly",
      team2: "C. Cleopatra",
      time: "09:00",
      day: "Aug 27, 2024",
      location: "Aswan Stadium 8, Aswan",
      referee: "refereeS",
    },
    {
      team1: "El-Makassa",
      team2: "Wadi Degla",
      time: "07:00",
      day: "Mar 10, 2024",
      location: "Ismailia Stadium 18, Ismailia",
      referee: "refereeN",
    },
    {
      team1: "Smouha",
      team2: "Enppi",
      time: "11:00",
      day: "Feb 8, 2024",
      location: "Cairo Stadium 3, Cairo",
      referee: "refereeI",
    },
  ];
  return (
    <div>
      <Container className="matches-container">
        <Row className="matches-header">
          <Col>
            <h1>Matches</h1>
          </Col>
        </Row>
        <Row className="matches">
          {matches.map((item, i) => (
            <Col md={3} key={i}>
              <div className="match">
                <div className="match-teams">
                  <div className="match-team match-team-left">
                    <img src={teamsLogos[item.team1]} alt="" />
                    <p>{item.team1}</p>
                  </div>
                  <div className="match-day-time">
                    <p className="match-time">{item.time}</p>
                    <p className="match-day">{item.day}</p>
                  </div>
                  <div className="match-team match-team-right">
                    <img src={teamsLogos[item.team2]} alt="" />
                    <p>{item.team2}</p>
                  </div>
                </div>
                <div className="match-location">
                  <p>
                    <FaLocationDot />
                    {item.location}
                  </p>
                  <p>{item.referee}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
