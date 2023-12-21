import React, { useState } from "react";
import "./DeleteUser.css";
import { Container, Row, Col } from "react-bootstrap";
import User from "../User";
import DeletePopUp from '../DeleteUser/DeletePopup/DeletePopUp';

export default function DeleteUser() {
  // const [matches, setMatches] = useState([]);
  // useEffect(() => {
  //   // Fetch match data
  //   axios.get("your_endpoint_url")
  //     .then(response => {
  //       setMatches(response.data.matches);
  //     })
  //     .catch(error => {
  //       console.error("Error fetching match data:", error);
  //     });

  //   // Fetch teams logos data
  //   axios.get("your_teams_logos_endpoint_url")
  //     .then(response => {
  //       setTeamsLogos(response.data.teamsLogos);
  //     })
  //     .catch(error => {
  //       console.error("Error fetching teams logos data:", error);
  //     });
  // }, []);

  const [users, setUsers] = useState([
    {
      name: "Menatalh Hossamalden",
      username: "@mena1234",
      location: "Street 9 - Block 10 A Upper Egypt, Cairo",
      email: "menatalh@gmail.com",
      gender: "Female",
      birthdate: "Jan 18,2003",
    },
  ]);
  return (
    <div>
      <Container className="matches-container">
        <Row className="matches-header">
          <Col className="matches-header-column">
            <h1>Users</h1>
          </Col>
        </Row>
        <Row className="matches justify-content-start">
          {users.map((item, i) => (
            <Col md={3} key={i} className="delete-popup">
              <div className='delete-popup-icon'>
                <DeletePopUp/>
              </div>
              <User user={item}  />
            </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
}
