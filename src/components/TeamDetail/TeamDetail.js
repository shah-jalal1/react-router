import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import TeamFullDetail from '../TeamFullDetail/TeamFullDetail';

const TeamDetail = () => {
    const {teamId} = useParams();
    const [team, setTeam] = useState([]);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setTeam(data.teams))
    }, [teamId]);
    // team.map(tm => console.log(tm.strCountry));
    return (
        <div>
            {
                team.map(tm => <TeamFullDetail team={tm}></TeamFullDetail>)
            }
            
        </div>
    );
};

export default TeamDetail;