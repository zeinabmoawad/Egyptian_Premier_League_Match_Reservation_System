import React, { useState, useEffect } from "react";
import "./ViewTickets.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaLocationDot } from "react-icons/fa6";
import { FcCancel } from "react-icons/fc";
import axios from "axios";
export default function ViewTickets() {
 const apiUrl = `http://localhost:8000/api/v1/reservation/get_all_reservations`;
 const [matches, setMatches] = useState([]);
  useEffect(() => {
    console.log("HERE");
    const fetchData = async () => {
      try {
        const storedToken = localStorage.getItem('token');
        const response = await axios.get("http://localhost:8000/api/v1/reservation/user_reservations",{
        headers: {
          'Authorization': `Bearer ${storedToken}`,
          'Content-Type': 'application/json' // Adjust content type as needed
        }
      });
        setMatches(response.data.reservations);
        console.log("response", response.data.reservations);
      } catch (error) {
        console.error('Error fetching user reservations:', error);
      }
    };
    fetchData();
  }, [apiUrl]);
  function cancelReservation(indexToDelete, id) {
    setMatches((matches) => {
      const updatedMatches = [...matches];
      updatedMatches.splice(indexToDelete, 1);
      return updatedMatches;
    });
    handleBackendCancellation(id);
  }

  const handleBackendCancellation = async (id) => {
    try {
      // Make the API request to the delete endpoint using Axios
      const storedToken = localStorage.getItem('token');
      console.log("cancel")
      const response = await axios.delete(`http://localhost:8000/api/v1/reservation/delete_reservation/${id}`,{
        headers: {
          'Authorization': `Bearer ${storedToken}`,
          'Content-Type': 'application/json' // Adjust content type as needed
        }
      });
      // Check if the request was successful
      if (response.status === 200) {
        console.log('Login successfully!');
      } else {
        console.error('Error canceling item:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  function isDateWithinThreeDays(dateString) {
    const today = new Date();
    const givenDate = new Date(dateString);
    const timeDifference = givenDate.getTime() - today.getTime();
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    if (daysDifference < 3) {
      return false;
    } else {
      return true;
    }
  };
  return (
    <div>
      <Container className="matches-container">
        <Row className="matches-header">
          <Col className="matches-header-column">
            <p>Tickets</p>
          </Col>
        </Row>
        <Row className="matches justify-content-start">
          {matches.map((item, i) => (
            <Col md={3} key={i}>
              <div className="match">
                {isDateWithinThreeDays(item.day) ? (
                  <FcCancel
                    className="ticket-cancel"
                    onClick={() => cancelReservation(i, item._id)}
                  />
                ) : null}

                <div className="match-teams">
                  <div className="match-team match-team-left">
                    <img src={item.matchId.homeTeam.url} alt="" />
                    <p>{item.matchId.homeTeam.name}</p>
                  </div>
                  <div className="match-day-time">
                      <p className="match-time">{new Date(item.matchId.time).getHours() < 10 ? '0' : ''}{new Date(item.matchId.time).getHours()}:{new Date(item.matchId.time).getMinutes() < 10 ? '0' : ''}{new Date(item.matchId.time).getMinutes()}</p>
                      <p className="match-day">
                        {new Date(item.matchId.time).getMonth() + 1 < 10 ? '0' : ''}{new Date(item.matchId.time).getMonth() + 1}/{new Date(item.matchId.time).getMonth() < 10 ? '0' : ''}{new Date(item.matchId.time).getDate()}/{new Date(item.matchId.time).getFullYear()}
                      </p>
                  </div>
                  <div className="match-team match-team-right">
                    <img src={item.matchId.awayTeam.url} alt="" />
                    <p>{item.matchId.awayTeam.name}</p>
                  </div>
                </div>
                <div className="match-location">
                  <p>{item.mainReferee}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
