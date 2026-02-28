import React from 'react';
import Silk from '../../components/Silk'; 
import './homepage.css';
import profilePic from '../../assets/profile.jpg';
import Navbar from './navbar';

function HomePage() {
    return(
        <div className='home-container' id="home">
            <div className="silk-background">
                <Silk
                    speed={5}
                    scale={1}
                    color="#112250"
                    noiseIntensity={1.5}
                    rotation={0}
                />
            </div>
            <Navbar />
            <div className="center-circle">
                <img src={profilePic} alt="Profile" />
            </div>

            <div className='about-content'>
                <h1>Hi, my name is Heran Habte</h1>
                <h2>A Business Economics Student</h2>
                <p>
                    I am a Senior student at <strong>South Dakota State University</strong>,
                    majoring in Business Economics with a minor in Management. My academic foundation, 
                    combined with hands-on leadership experience, has shaped me into someone 
                    who thrives where people, strategy, and problem-solving intersect.
                    <br /><br />
                    I am driven, adaptable, and currently exploring opportunities in 
                    <strong> Business Development</strong>, <strong>Operations</strong>, 
                    and <strong>Client Relations</strong>.
                </p>
            <button className='contact-btn'>Let's Connect</button>

            </div>
        </div>
    );
}

export default HomePage;