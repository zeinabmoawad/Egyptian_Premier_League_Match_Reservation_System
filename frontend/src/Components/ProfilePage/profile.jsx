import React from "react";
import UserProfileCard from "../UserProfileCard/UserProfileCard";
import ProfilePage from "./ProfilePage";
import { Container, Row, Col } from "react-bootstrap";

export default function Profile() {
  return (
    <div>
      <Container>
        <Row className="profile">
          <Col md={3}>
            <UserProfileCard></UserProfileCard>
          </Col>
          <Col md={9}>
            <ProfilePage></ProfilePage>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
