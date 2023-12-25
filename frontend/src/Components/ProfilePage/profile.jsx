import React from "react";
import UserProfileCard from "../UserProfileCard/UserProfileCard";
import ProfilePage from "./ProfilePage";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Profile() {
  const [userData, setUserData] = useState({});
  const apiUrl = `http://localhost:8000/api/v1/users/user`;
  const storedToken = localStorage.getItem('token');

    useEffect(() => {
    console.log("HERE");
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl, {
          headers: {
            'Authorization': `Bearer ${storedToken}`,
            'Content-Type': 'application/json' // Adjust content type as needed
          }
        });
        setUserData(response.data.user);
        console.log("response", response.data);
      } catch (error) {
        console.error('Error fetching match details:', error);
      }
    };

    fetchData();
  }, [apiUrl]);
  return (
    <div>
      <Container>
        <Row className="profile">
          <Col md={3}>
            <UserProfileCard data={userData}></UserProfileCard>
          </Col>
          <Col md={9}>
            <ProfilePage data={userData}></ProfilePage>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
