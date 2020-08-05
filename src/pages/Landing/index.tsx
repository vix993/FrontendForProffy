import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import logoImg from "../../assets/images/logo.svg"
import landingImg from "../../assets/images/landing.svg"

import studyIcon from "../../assets/images/icons/study.svg"
import teachClassesIcon from "../../assets/images/icons/give-classes.svg"
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg"

import api from '../../services/api';

import './styles.css';

function Landing() {
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get('connections').then(response => {
            const { total } = response.data;

            setTotalConnections(total);
        });
    }, []);

    return(
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy" />
                    <h2>Your platform for online learning</h2>
                </div>
                <img
                 src={landingImg}
                 alt="Learning platform"
                 className="hero-image"
                />
                <div className="buttons-container">
                    <Link to="/learn" className="study">
                        <img src={studyIcon} alt="study"/>
                        Study
                    </Link>
                    <Link to="/teach" className="teach-classes">
                        <img src={teachClassesIcon} alt="study"/>
                        Teach
                    </Link>
                </div>
                <span className="total-connections">
                    A total of { totalConnections } connections. <img src={purpleHeartIcon} alt="Purple heart"/>
                </span>
            </div>
        </div>
    )
}

export default Landing;