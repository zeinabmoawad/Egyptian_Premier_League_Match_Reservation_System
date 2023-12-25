import React, { useState, useEffect } from "react";
import "./ViewMatches.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaLocationDot } from "react-icons/fa6";
import CreateMatches from "../CreateMatches/CreateMatches.jsx";
import EditMatches from "../EditMatches/EditMatches.jsx";
import DeletePopUp from "../../User/DeleteUser/DeletePopup/DeletePopUp.jsx";
import ApproveUser from "../../User/Requests/ApproveOrDisApprove/ApproveUser.jsx";
import DisApproveUser from "../../User/Requests/ApproveOrDisApprove/DisApproveUser.jsx";
import axios from "axios";
import { PiPersonSimpleRunBold } from "react-icons/pi";

export default function ViewMatches(props) {
  const [matches, setMatchData] = useState([]);
  const apiUrl = "http://localhost:8000/api/v1/match/get_matches"; // Replace with your actual API endpoint

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

        setMatchData(response.data.data);
      } catch (error) {
        console.error("Error fetching match details:", error);
      }
    };

    fetchData();
  }, [apiUrl]);

  function changeMatches(updatedmatch) {
    setMatchData((prevMatches) => {
      return prevMatches.map((match) => {
        if (match._id === updatedmatch.data._id) {
          return { ...match, ...updatedmatch.data };
        } else {
          return match;
        }
      });
    });
  }
  function changeMatcheCreate(updatedMatch) {
    setMatchData((prevMatches) => [...prevMatches, updatedMatch.data]);
  }
  const handleChildClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div>
      <Container className="matches-container">
        <Row className="matches-header">
          <Col className="matches-header-column">
            <p>Matches</p>
            {props.userType == "manager" && (
              <CreateMatches change={changeMatcheCreate}></CreateMatches>
            )}
          </Col>
        </Row>
        <Row className="matches justify-content-start">
          {matches.map((item, i) => (
            <Col md={3} key={i}>
              <div className="match">
                {/* <div><DeletePopUp></DeletePopUp></div> */}
                <div className="view-match-edit" onClick={handleChildClick}>
                  {props.userType == "manager" && (
                    <EditMatches
                      matchId={item._id}
                      change={changeMatches}
                    ></EditMatches>
                  )}
                </div>
                <a href={/MatchDetails/ + item._id}>
                  <div className="match-teams">
                    <div className="match-team match-team-left">
                      <img src={item.homeTeam.url} alt="" />
                      <p>{item.homeTeam.name}</p>
                    </div>
                    <div className="match-day-time">
                      <p className="match-time">
                        {new Date(item.time).getHours() < 10 ? "0" : ""}
                        {new Date(item.time).getHours()}:
                        {new Date(item.time).getMinutes() < 10 ? "0" : ""}
                        {new Date(item.time).getMinutes()}
                      </p>
                      <p className="match-day">
                        {new Date(item.time).getMonth() + 1 < 10 ? "0" : ""}
                        {new Date(item.time).getMonth() + 1}/
                        {new Date(item.time).getMonth() < 10 ? "0" : ""}
                        {new Date(item.time).getDate()}/
                        {new Date(item.time).getFullYear()}
                      </p>
                    </div>
                    <div className="match-team match-team-right">
                      <img src={item.awayTeam.url} alt="" />
                      <p>{item.awayTeam.name}</p>
                    </div>
                  </div>
                  <div className="match-location">
                    <p>
                      <FaLocationDot></FaLocationDot>
                      {item.matchVenue.name}
                    </p>
                    <p>{item.mainReferee}</p>
                    <div className="view-matches-linesmans">
                      <p>
                        <PiPersonSimpleRunBold /> {item.linesman1}
                      </p>
                      <p>
                        <PiPersonSimpleRunBold /> {item.linesman2}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
