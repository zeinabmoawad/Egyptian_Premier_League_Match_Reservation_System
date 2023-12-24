import React, { useEffect, useState } from "react";
import "./MatchDetails.css";
import Seats from "../seats/seats";
import Ticket from "./Ticket";
import { Container, Row, Col } from "react-bootstrap";
import field from "../Assets/field.png";
import AlAhly from "../Assets/teams logos 240x240/01.png";
import WadiDegla from "../Assets/teams logos 240x240/15.png";
import DeleteTicketPopUp from "./deleteTicketPopUp";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function MatchDetails(props) {
  console.log("usertype in match details" + props.userType);
  const [columns, setColumns] = useState(5);
  const [rows, setRows] = useState(5);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [purchase, setPurchase] = useState(false);
  const handleSeatClick = (seatId) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats((prevSelectedSeats) =>
        prevSelectedSeats.filter((id) => id !== seatId)
      );
    } else {
      setSelectedSeats((prevSelectedSeats) => [...prevSelectedSeats, seatId]);
    }
  };
  function deleteTicket(label) {
    setSelectedSeats((prevSelectedSeats) =>
      prevSelectedSeats.filter((id) => id !== label)
    );
  }
  
  const purchase_request = async (e) => {
    for(var i=0;i< selectedSeats.length; i++){
      const body = {matchId: matchid, seatRow: selectedSeats[i][0], seatColumn:selectedSeats[i][1]}
      console.log(body)
      try {
        const id = props.matchId;
        const storedToken = localStorage.getItem('token');
        console.log(storedToken)
        const response = await axios.post(`http://localhost:8000/api/v1/reservation/create_reservation`, body,{
          headers: {
            'Authorization': `Bearer ${storedToken}`,
            'Content-Type': 'application/json' // Adjust content type as needed
          }
        });
        // console.log('Server response:', response.errorMessage);
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
  }

  // const matchid = match.params.matchid;
  // useEffect(() => {
  //   const socket = new WebSocket("http://localhost:3000"+matchid);
  //   socket.onmessage = (event) => {
  //     const receivedMessage = event.data;
  //     setSelectedSeats(receivedMessage);
  //   };
  //   return () => {
  //     // Clean up the WebSocket connection when the component unmounts
  //     socket.close();
  //   };
  // }, []);
  
  const [match, setMatch] = useState({});
  const { matchid } = useParams();
  const apiUrl = `http://localhost:8000/api/v1/match/get_match/${matchid}`;
  
  useEffect(() => {
    console.log("HERE");
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setMatch(response.data.data);
        console.log("response", response.data);
        console.log("url = ",response.data.data.homeTeam)
      } catch (error) {
        console.error('Error fetching match details:', error);
      }
    };

    fetchData();
  }, [apiUrl]);
  return (
    <div className="match-details">
      {purchase ? (
        <div className="overlay">
          <DeleteTicketPopUp
            price={selectedSeats.length * 200}
            closeWindow={setPurchase}
            />
        </div>
      ) : null}
      {Object.keys(match).length != 0?
      <Container className="container-fluid match-details-container">
        <Row className="match-details-row">
          <Col className="match-details-teams">
            <div>
              <img src={match.homeTeam.url} alt="" />
              <p>{match.homeTeam.name}</p>
            </div>
            <div className="match-details-day-time">
              <p className="match-details-time">12:00</p>
              <p className="match-details-day">Mar 23,2023</p>
            </div>
            <div>
              <img src={match.awayTeam.url} alt="" />
              <p>{match.awayTeam.name}</p>
            </div>
          </Col>
        </Row>
        <Row className="match-details-row">
          <Col>
            <Seats
              userType={props.userType}
              columns={match.matchVenue.numberOfSeatsPerRow}
              rows={match.matchVenue.rows}
              onSeatClick={handleSeatClick}
              selectedSeats={selectedSeats}
            ></Seats>
            <img src={field} alt="" />
          </Col>
          <Col>
            {selectedSeats.length == 0 ? null : (
              <div className="match-details-tickets-header">
                <h1>Tickets:</h1>
                <button
                  type="button"
                  class="btn btn-primary"
                  // onClick={() => setPurchase(true)}
                  onClick={purchase_request}
                >
                  Purchase
                </button>
              </div>
            )}
            <div className="match-details-tickets">
              {selectedSeats.map((item, i) => (
                <Ticket
                  key={i}
                  label={item}
                  price="200"
                  deleteTicket={deleteTicket}
                ></Ticket>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
        :null}
    </div>
  );
}
