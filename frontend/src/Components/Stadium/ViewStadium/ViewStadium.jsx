import React, { useState, useEffect } from "react";
import "./ViewStadium.css";
import { Container, Row, Col } from "react-bootstrap";
import CreateStadium from "../CreateStadium/CreateStadium";
import axios from "axios";

// var stadiumes = [
//   {
//     Name: "Cairo",
//     row:5,
//     column:6
//   },
//   {
//     Name: "Cairo",
//     row:5,
//     column:6
//   },
//   {
//     Name: "Cairo",
//     row:5,
//     column:6
//   },
//   {
//     Name: "Cairo",
//     row:5,
//     column:6
//   },
//   {
//     Name: "Cairo",
//     row:5,
//     column:6
//   },

// ];

function ViewStadium(props) {
  const [stadiumes, setStadiumData] = useState([]);
  const apiUrl = "http://localhost:8000/api/v1/stadium/get_all_stadium"; // Replace with your actual API endpoint

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedToken = localStorage.getItem("token");
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${storedToken}`,
            "Content-Type": "application/json", // Adjust content type as needed
          },
        });
        setStadiumData(response.data.data);
      } catch (error) {
        console.error("Error fetching match details:", error);
        alert(error.response.data.errorMessage);
      }
    };

    fetchData();
  }, [apiUrl]);

  function changeStadiums(updatedStadium) {
    console.log("inchange");
    console.log(updatedStadium);
    setStadiumData((prevStadiums) => [...prevStadiums, updatedStadium.data]);

    // setStadiumData((prevMatches) => {

    //   return prevMatches.map((match) => {
    //     if (match.name === updatedStadium.data.name) {
    //       console.log("incodition================")
    //       return { ...match, ...updatedStadium.data };
    //     } else {
    //       return match;
    //     }
    //   });
    // });
  }
  return (
    <div>
      <Container className="stadiumes-container">
        <Row className="stadiumes-header">
          <Col className="stadiumes-header-column">
            <h1>Stadium</h1>
            {props.userType == "manager" && (
              <CreateStadium change={changeStadiums}></CreateStadium>
            )}
          </Col>
        </Row>
        <Row className="stadiumes">
          {stadiumes.map((item, i) => (
            <Col md={3} key={i}>
              <div className="stadium">
                <h1>{item.name}</h1>
                <div className="stadium-seats">
                  <p>{item.rows * item.numberOfSeatsPerRow} seates</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default ViewStadium;
