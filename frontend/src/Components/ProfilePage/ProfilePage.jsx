import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "./ProfilePage.css";
import DatePicker from "react-datepicker";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import axios from "axios";

const ProfilePage = (props) => {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [gender, setGender] = useState(props.data.gender);
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const storedToken = localStorage.getItem('token');
    const body={
      firstName:fname,
      lastName: lname,
      gender: gender,
      address: address,
      city: city,
      birthDate: selectedDate,
    }
    console.log(body)
    try {
        const response = await axios.post("http://localhost:8000/api/v1/users/update_user", body, {
          headers: {
            'Authorization': `Bearer ${storedToken}`,
            'Content-Type': 'application/json' // Adjust content type as needed
          }
        });
        if (response.status === 200) {
          console.log('Updated successfully!');
          window.location.reload();
        }
    } catch (error) {
        console.error('Error submitting form:', error);
    }
};

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
                value={props.data.userName}
                disabled
              ></Form.Control>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                className="form-control"
                type="text"
                placeholder="Enter Name"
                value={fname}
                required
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
              <Form.Group
                controlId="dateControl"
                className="date-picker-control"
              >
                <Form.Group controlId="cityControl">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                  />
                  <Form.Group controlId="addressControl">
                    <Form.Label>Address (Optional)</Form.Label>
                    <Form.Control
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </Form.Group>
                </Form.Group>
                <Form.Label>Birthdate</Form.Label>
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="MM/dd/yyyy"
                  isClearable
                  showYearDropdown
                  scrollableYearDropdown
                />
              </Form.Group>
            </Form>
          </Col>
          <Col md={6}>
            <Form>
              <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  value={props.data.email}
                  disabled
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
              <Form.Group controlId="genderControl">
                <Form.Label>Gender</Form.Label>
                <Form.Control
                  as="select"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="roleControl">
                <Form.Label>Role</Form.Label>
                <Form.Control
                  as="select"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                >
                  <option value="">Select Role</option>
                  <option value="manager">Manager</option>
                  <option value="fan">Fan</option>
                </Form.Control>
              </Form.Group>
              <Button type="submit" varient="primary" onClick={handleSubmit}>
                Update
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProfilePage;
