import React from 'react'

import Icon1 from '../../images/OIP.jfif'
import Icon2 from '../../images/nasa-mars-rover.jpg'
import Icon3 from '../../images/83823c19431419.560404e891d8d.jpg'
import Video from '../../video/video.mp4'

import {ServicesContainer,ServicesH1,ServicesWrapper,ServicesCard,ServicesIcon,ServicesH2,ServicesP,ServicesCardLink} from './ServiceElements'
import {HeroBg,VideoBg,} from '../HeroSection/HeroElements'
function signin() {
    alert('Sign in first');
  }

const Services = ({isSignedIn}) => {
    return (

        <ServicesContainer id="services"> 
        
            <ServicesH1>EVENTS</ServicesH1>
            {isSignedIn ? (
            <ServicesWrapper>
                <ServicesCard>
                <ServicesCardLink to="/Star">
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Constellations and Nebulas</ServicesH2>
                    <ServicesP>Information about stars in the constellations and nebulas</ServicesP>
                    </ServicesCardLink>
                </ServicesCard>
                <ServicesCard>
                <ServicesCardLink to="/Planet">
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Images Captured From Mars Rovers</ServicesH2>
                    <ServicesP>Images captured by Curosity, Opportunity and spirit on mars</ServicesP>
                 </ServicesCardLink>
                </ServicesCard> 

                <ServicesCard >
                    
                    <ServicesCardLink to="/Calender">
                    <ServicesIcon src={Icon3} />
                    <center>  <ServicesH2>Calendar </ServicesH2></center>
                    <ServicesP>Get the sunrise, sunset,moonrise and moonset.Phases and distance from earth</ServicesP>
                    </ServicesCardLink>
                    
                </ServicesCard>
               
            </ServicesWrapper>
             ):(
                <ServicesWrapper>
                <ServicesCard>
                <ServicesCardLink to="/" onClick={signin}>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Constellations and Nebulas</ServicesH2>
                    <ServicesP>Information about stars in the constellations and nebulas</ServicesP>
                    </ServicesCardLink>
                </ServicesCard>
                <ServicesCard>
                <ServicesCardLink to="/" onClick={signin}>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Galaxies</ServicesH2>
                    <ServicesP>We help reduce your fess and increase your overall revenue</ServicesP>
                 </ServicesCardLink>
                </ServicesCard>

                <ServicesCard >
                    
                    <ServicesCardLink to="/" onClick={signin}>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Events Calendar</ServicesH2>
                    <ServicesP>We help reduce your fess and increase your overall revenue</ServicesP>
                    </ServicesCardLink>
                    
                </ServicesCard>
               
            </ServicesWrapper>
             )
}
        </ServicesContainer>
    )
}

export default Services
