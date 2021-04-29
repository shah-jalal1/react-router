import React from 'react';
import './TeamFullDetail.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faAddressBook, faCoffee, faGithub } from '@fortawesome/free-solid-svg-icons'
import { FaFacebookF, FaTwitterSquare, FaYoutubeSquare, FaMapMarkerAlt, FaRegFlag, FaFutbol, FaTransgender } from 'react-icons/fa';


const TeamFullDetail = (props) => {
    const {idTeam, strTeam, strCountry, strSport, intFormedYear, strGender, strDescriptionEN, strTeamFanart3, strTeamBadge, strStadiumThumb, strFacebook, strTwitter } = props.team;

    let gender;

     gender = strGender === "Male" ? <img className="imageStyle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg-EgcN6ZkNZYNVvzIGbbPuzrTU85A7_3NoA&usqp=CAU" alt="" /> : gender = <img className="imageStyle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFARj2dMtQnfCOF1QxDA-B3n5g3XJXo6yhaw&usqp=CAU" alt="" />;

    return (
        <div className="teamDetailFull">
            <div className="banner-section" style={{backgroundImage:`url(${strStadiumThumb})`}}>
                <img className="banner-image" src={strTeamBadge} alt=""/>
            </div>
            <div className="teamDetails">
                <div className="row">
                    <div className="col-7">
                        <h2>{strTeam}</h2>
                        <h4><FaMapMarkerAlt/> Founded: {intFormedYear}</h4>
                        <h4> <FaRegFlag/> Country: {strCountry}</h4>
                        <h4><FaFutbol/> Sport: {strSport}</h4>
                        <h4><FaTransgender/> Gender: {strGender}</h4>
                    </div>
                    <div className="col">
                        { gender}
                    </div>
                </div>
                <div>
                </div>
            </div>
            <p className="description">{strDescriptionEN}</p>
            <div className="team-details-fontawesome">
            <a href="http://twitter.com/" target="blank"><FaTwitterSquare size={40}/></a>
            <a href="https://www.facebook.com/" target="blank">< FaFacebookF size={40}/> </a> 
             <a href="https://www.youtube.com/" target="blank">< FaYoutubeSquare size={40}/> </a>
            
            </div>
        </div>
    );
};

export default TeamFullDetail;