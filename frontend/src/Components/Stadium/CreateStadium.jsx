import React from 'react'

function CreateStadium() {
  return (
    <div>
      <Container className="matches-container">
        <Row className="matches-header">
          <Col className="matches-header-column">
            <h1>Matches</h1>
            {props.userType=="FEA"&&(<CreateMatches></CreateMatches>)}
          </Col>
          
        </Row>
        <Row className="matches">
          {matches.map((item, i) => (
            <Col md={3} key={i}>
              <div className="match">
                <div className="match-teams">
                  <div className="match-team match-team-left">
                    <img src={teamsLogos[item.team1]} alt="" />
                    <p>{item.team1}</p>
                  </div>
                  <div className="match-day-time">
                    <p className="match-time">{item.time}</p>
                    <p className="match-day">{item.day}</p>
                  </div>
                  <div className="match-team match-team-right">
                    <img src={teamsLogos[item.team2]} alt="" />
                    <p>{item.team2}</p>
                  </div>
                </div>
                <div className="match-location">
                  <p>
                    <FaLocationDot />
                    {item.location}
                  </p>
                  <p>{item.referee}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default CreateStadium