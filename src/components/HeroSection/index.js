import React, {useState} from 'react'
import { Button } from '../ButtonElemnt'
import Video from '../../video/video.mp4'
import { 
    HeroContainer, 
    HeroBg, 
    VideoBg, 
    HeroContent, 
    HeroH1, 
    HeroP, 
    HeroBtnWrapper, 
    ArrowForward, 
    ArrowRight 
} from './HeroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () =>{
        setHover(!hover)
    };

    // This section has the looping video in the background and the hover section for the button on the home page,
    //making the arrow turn into a diffrent arrow when you put the mouse over it.
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />           
            </HeroBg>
            <HeroContent>
                <HeroH1>Welcome To TyGuy Studios</HeroH1>
                <HeroP>
                     Your one stop shop for Python game development.
                </HeroP>
                <HeroBtnWrapper>
                    <Button 
                        to="signup" 
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover} 
                        primary="true" 
                        dark="true"
                    >
                        Enter {hover ? <ArrowForward/> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
};

export default HeroSection
