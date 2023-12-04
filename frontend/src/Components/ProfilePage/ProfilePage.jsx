import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProfilePage.css";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

const ProfilePage = () => {
  const [fname, setFName] = useState("Menatalh");
  const [lname, setLName] = useState("Hossamalden");
  const [email, setEmail] = useState("mena@gmail.com");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div>
      <Container className="profileContainer">
        <h1>EDIT PROFILE</h1>
        <Row>
          <Col md={6}>
            <Form>
              <Form.Label>Username</Form.Label>
              <Form.Control
                className="form-control"
                type="text"
                placeholder="Enter Name"
                value={fname}
                onChange={(e) => setFName(e.target.value)}
              ></Form.Control>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                className="form-control"
                type="text"
                placeholder="Enter Name"
                value={fname}
                onChange={(e) => setFName(e.target.value)}
              ></Form.Control>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Button type="submit" varient="primary">
                Update
              </Button>
            </Form>
          </Col>
          <Col md={6}>
            <Form>
              <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={lname}
                onChange={(e) => setLName(e.target.value)}
              ></Form.Control>
              <Form.Group controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProfilePage;
