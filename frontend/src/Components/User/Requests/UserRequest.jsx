import React, { useState } from "react";
// import "./UserRequest.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaLocationDot } from "react-icons/fa6";
import { FaUser, FaTransgender, FaBirthdayCake } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import User from "../User";
import Slider from "react-slick";
import ApproveUser from "./ApproveOrDisApprove/ApproveUser";
import DisApproveUser from "./ApproveOrDisApprove/DisApproveUser";
import "./UserRequest.css";

export default function UserRequest() {
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
    {
      name: "Menatalh Hossamalden",
      username: "@mena1234",
      location: "Street 9 - Block 10 A Upper Egypt, Cairo",
      email: "menatalh@gmail.com",
      gender: "Female",
      birthdate: "Jan 18,2003",
    },
    {
      name: "Menatalh Hossamalden",
      username: "@mena1234",
      location: "Street 9 - Block 10 A Upper Egypt, Cairo",
      email: "menatalh@gmail.com",
      gender: "Female",
      birthdate: "Jan 18,2003",
    },
  ]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Container className="matches-container">
        <Row className="matches-header">
          <Col className="matches-header-column">
            <h1>Requests</h1>
          </Col>
        </Row>
        <Row className="matches justify-content-start">
          {users.map((item, i) => (
            <Col md={3} className="request-user">
              <div className="request-user-icon-approve">
                <ApproveUser />
              </div>
              <div className="request-user-icon-disapprove">
                <DisApproveUser />
              </div>
              <User user={item} key={i}></User>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
