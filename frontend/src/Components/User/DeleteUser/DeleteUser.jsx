import React, { useEffect,useState } from "react";
import "./DeleteUser.css";
import { Container, Row, Col } from "react-bootstrap";
import User from "../User";
import DeletePopUp from '../DeleteUser/DeletePopup/DeletePopUp';
import axios from "axios";

export default function DeleteUser() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // Fetch match data
    axios.get("your_endpoint_url")
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error("Error fetching match data:", error);
      });
    });
  //   // Fetch teams logos data
  //   axios.get("your_teams_logos_endpoint_url")
  //     .then(response => {
  //       setTeamsLogos(response.data.teamsLogos);
  //     })
  //     .catch(error => {
  //       console.error("Error fetching teams logos data:", error);
  //     });
  // }, []);
  return (
    <div>
      <Container className="matches-container">
        <Row className="matches-header">
          <Col className="matches-header-column">
            <p>Users</p>
          </Col>
        </Row>
        <Row className="matches justify-content-start">
          {users.map((item, i) => (
            <Col md={3} key={i} className="delete-popup">
              <div className='delete-popup-icon'>
                <DeletePopUp userId={item.userId}/>
              </div>
              <User user={item}  />
            </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
}
