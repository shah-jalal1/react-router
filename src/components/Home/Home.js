import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';
import './Home.css'

const Home = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League';
        fetch(url)
        .then(res => res.json())
        .then(data => setTeams(data.teams))
    }, []);
    // const {strTeam} = teams;
    // teams.map(tm => console.log(tm.strTeam));
    return (
        <div className="home-section">
            <div className="banner-section-home">
                <h1>Team-Finder</h1>
                <div className="color-overlay"></div>
            </div>
            {
                teams.map(tm => <Team team={tm}></Team>)
            }
            
        </div>
    );
};

export default Home;