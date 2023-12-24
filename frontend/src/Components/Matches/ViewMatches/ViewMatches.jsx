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

export default function ViewMatches(props) {
  // const teamsLogos = {
  //   "Al-Ahly": AlAhly,
  //   "C. Cleopatra": CCleopatra,
  //   "Wadi Degla": WadiDegla,
  //   "El-Ettahad": ElEttahad,
  //   "El-Makassa": ElMakassa,
  //   Enppi: Enppi,
  //   Smouha: Smouha,
  //   Zamalek: ZamalekSC,
  //   Ismaily: Ismaily,
  //   "El-Mokawloon SC": ElMokawloonSC,
  //   "Ghazl El Mahalla": GhazlElMahalla,
  //   "Tala'ea El Gaish SC": TalaeaElGaishSC,
  //   "El-Entag El-Harby": ElEntagElHarby,
  //   "El Gouna": ElGouna,
  //   Pyramids: Pyramids,
  //   Aswan: Aswan,
  //   "El-Masry": ElMasry,
  //   "National Bank Of Egypt": NationalBankOfEgypt,
  // };
  const [matches, setMatchData] = useState([]);
  const apiUrl = 'http://localhost:8000/api/v1/match/get_matches'; // Replace with your actual API endpoint

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setMatchData(response.data.data);
      } catch (error) {
        console.error('Error fetching match details:', error);
      }
    };

    fetchData();
  }, [apiUrl]);

  function changeMatches(updatedmatch){
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

  // var matches = [
  //   {
  //     id: 1,
  //     team1: "Wadi Degla",
  //     team2: "El-Ettahad",
  //     time: "12:00",
  //     day: "May 10,2025",
  //     location: "Alex Stadium 6, Alex",
  //     referee: "refereeO",
  //   },
  //   {
  //     team1: "Al-Ahly",
  //     team2: "C. Cleopatra",
  //     time: "09:00",
  //     day: "Aug 27, 2024",
  //     location: "Aswan Stadium 8, Aswan",
  //     referee: "refereeS",
  //   },
  //   {
  //     team1: "El-Makassa",
  //     team2: "Wadi Degla",
  //     time: "07:00",
  //     day: "Mar 10, 2024",
  //     location: "Ismailia Stadium 18, Ismailia",
  //     referee: "refereeN",
  //   },
  //   {
  //     team1: "Smouha",
  //     team2: "Enppi",
  //     time: "11:00",
  //     day: "Feb 8, 2024",
  //     location: "Cairo Stadium 3, Cairo",
  //     referee: "refereeI",
  //   },
  //   {
  //     team1: "Al-Ahly",
  //     team2: "C. Cleopatra",
  //     time: "09:00",
  //     day: "Aug 27, 2024",
  //     location: "Aswan Stadium 8, Aswan",
  //     referee: "refereeS",
  //   },
  //   {
  //     team1: "El-Makassa",
  //     team2: "Wadi Degla",
  //     time: "07:00",
  //     day: "Mar 10, 2024",
  //     location: "Ismailia Stadium 18, Ismailia",
  //     referee: "refereeN",
  //   },
  //   {
  //     team1: "Smouha",
  //     team2: "Enppi",
  //     time: "11:00",
  //     day: "Feb 8, 2024",
  //     location: "Cairo Stadium 3, Cairo",
  //     referee: "refereeI",
  //   },
  // ];
  const handleChildClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div>
      <Container className="matches-container">
        <Row className="matches-header">
          <Col className="matches-header-column">
            <p>Matches</p>
            {props.userType == "manager" && <CreateMatches></CreateMatches>}
          </Col>
        </Row>
        <Row className="matches justify-content-start">
          {matches.map((item, i) => (
            <Col md={3} key={i}>
              <div className="match">
                {/* <div><DeletePopUp></DeletePopUp></div> */}
                <div className="view-match-edit" onClick={handleChildClick}>
                  {props.userType == "manager" && <EditMatches matchId={item._id} change={changeMatches}></EditMatches>}
                </div>
                <a href={/MatchDetails/ + item._id}>
                  <div className="match-teams">
                    <div className="match-team match-team-left">
                      <img src={item.homeTeam.url} alt="" />
                      <p>{item.homeTeam.name}</p>
                    </div>
                    <div className="match-day-time">
                      <p className="match-time">{new Date(item.time).getHours() < 10 ? '0' : ''}{new Date(item.time).getHours()}:{new Date(item.time).getMinutes() < 10 ? '0' : ''}{new Date(item.time).getMinutes()}</p>
                      <p className="match-day">
                        {new Date(item.time).getMonth() + 1 < 10 ? '0' : ''}{new Date(item.time).getMonth() + 1}/{new Date(item.time).getMonth() < 10 ? '0' : ''}{new Date(item.time).getDate()}/{new Date(item.time).getFullYear()}

                      </p>
                    </div>
                    <div className="match-team match-team-right">
                      <img src={item.awayTeam.url} alt="" />
                      <p>{item.awayTeam.name}</p>
                    </div>
                  </div>
                  <div className="match-location">
                    <p><FaLocationDot></FaLocationDot>{item.matchVenue.name}</p>
                    <p>{item.mainReferee}</p>
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
