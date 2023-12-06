import React from 'react';
import './ViewMatches.css';
import { Container, Row, Col } from 'react-bootstrap';

export default function ViewMatches() {
  return (
    <div>
        <Container className='matches-container'>
            <Row className='matches-header'>
                <Col>
                    <h1>Matches</h1>
                </Col>
            </Row>
            <Row className='matches'>
                <Col md={3}>
                    <div className='match'>
                        <div className='match-teams'>
                            <div className='match-team-left'>
                                <img src="" alt="" />
                                <p></p>
                            </div>
                            <div></div>
                            <div></div>
                        </div>
                        <div></div>
                        <div></div>
                    </div>
                </Col>
                <Col md={3}>
                    <div className='match'>

                    </div>
                </Col>
                <Col md={3}>
                    <div className='match'>

                    </div>
                </Col>
                <Col md={3}>
                    <div className='match'>

                    </div>
                </Col>               
            </Row>
        </Container>
    </div>
  )
}
