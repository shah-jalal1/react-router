import React from 'react';
import { Card, CardGroup, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router';
import './Team.css'

const Team = (props) => {
    const { strTeam, strTeamBadge, idTeam, strSport} = props.team;
    // console.log(strTeam);

    const history = useHistory();
    const handleClick = (teamId) => {
        const url = `/team/${teamId}`;
        history.push(url)
    }

    const cardStyle = {
        float: 'left',
        width: '18rem',
        margin:'10px',
        backgroundColor: '#EEE2DC' 

    }
    // { width: '18rem' }
    return (
        <div>
            
            <div>
            <Card style={cardStyle}>
                <Card.Img className="card-image" variant="top" src={strTeamBadge} />
                <Card.Body>
                    <Card.Title className="card-body">{strTeam}</Card.Title>
                    <Card.Text>
                        Sport Type: {strSport}
                     </Card.Text>
                    <Button variant="danger" onClick={() => handleClick(idTeam)}>Explore</Button>
                </Card.Body>
            </Card>
            </div>
            
        </div>
    );
};

export default Team;