import React from 'react'

import "./ViewStadium.css";
import { Container, Row, Col } from "react-bootstrap";
import CreateStadium from '../CreateStadium/CreateStadium'
var stadiumes = [
  {
    Name: "Cairo",
    row:5,
    column:6
  },
  {
    Name: "Cairo",
    row:5,
    column:6
  },
  {
    Name: "Cairo",
    row:5,
    column:6
  },
  {
    Name: "Cairo",
    row:5,
    column:6
  },
  {
    Name: "Cairo",
    row:5,
    column:6
  },

];
function ViewStadium(props) {
  return (
    <div>
      <Container className="stadiumes-container">
        <Row className="stadiumes-header">
          <Col className="stadiumes-header-column">
            <h1>Stadium</h1>
            {props.userType=="manager"&&(<CreateStadium></CreateStadium>)}
          </Col>
        </Row>
        <Row className="stadiumes">
          {stadiumes.map((item, i) => (
            <Col md={3} key={i}>
              <div className="stadium">
                    <h1>{item.Name}</h1>
                    <div className="stadium-seats"><p>{item.row*item.column} seates</p></div>
             
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ViewStadium