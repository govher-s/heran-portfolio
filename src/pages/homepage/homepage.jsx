import React from 'react';
import Silk from '../../components/Silk'; 
import './homepage.css';

function HomePage() {
    return(
        <div className='home-container'>
            <div className="silk-background">
                <Silk
                    speed={5}
                    scale={1}
                    color="#112250"
                    noiseIntensity={1.5}
                    rotation={0}
                />
            </div>

            <div className="center-circle">
                {/* Ensure profile.jpg is inside the 'public' folder in your root */}
                <img src="/profile.jpg" alt="Profile" />
            </div>
        </div>
    );
}

export default HomePage;