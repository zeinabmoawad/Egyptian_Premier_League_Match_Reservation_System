import React, { useState, useEffect } from "react";
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
import axios from "axios";

export default function UserRequest() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedToken = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:8000/api/v1/users/get_all_users",
          {
            headers: {
              Authorization: `Bearer ${storedToken}`,
              "Content-Type": "application/json", // Adjust content type as needed
            },
          }
        );
        const filteredUsers = response.data.users.filter(
          (item) => item.role != "manager"
        );
        setUsers(filteredUsers);
        console.log("response", response.data.users);
      } catch (error) {
        console.error("Error fetching user reservations:", error);
        alert(error.response.data.errorMessage);
      }
    };
    fetchData();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  function handleDelete(index) {
    setUsers((users) => {
      const updatedUsers = [...users];
      updatedUsers.splice(index, 1);
      return updatedUsers;
    });
  }
  return (
    <div>
      <Container className="matches-container">
        <Row className="matches-header">
          <Col className="matches-header-column">
            <p>Requests</p>
          </Col>
        </Row>
        <Row className="matches justify-content-start">
          {users.map((item, i) => (
            <Col md={3} className="request-user">
              <div className="request-user-icon-approve">
                <ApproveUser id={item._id} onApprove={() => handleDelete(i)} />
              </div>
              <div className="request-user-icon-disapprove">
                <DisApproveUser
                  id={item._id}
                  onDisapprove={() => handleDelete(i)}
                />
              </div>
              <User user={item} key={i}></User>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
