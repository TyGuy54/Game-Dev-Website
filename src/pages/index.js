import React, {useState} from 'react'
import AboutSection from '../components/AboutSection';
import { AboutbjOne } from '../components/AboutSection/Data';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { GameObjOne } from '../components/InfoSection/Data';
import Navbar from '../components/Navebar';
import SideBar from '../components/sidebar';

const Home = () => {
    //useing usestate to open and close the navbar
    const [isOpen, setIsOpen] = useState(false)
    //toggling the open and closed states
    const toggle = () => {
        setIsOpen(!isOpen)
    };


    return (
        <>
            <Navbar toggle={toggle}/>
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <HeroSection />
            <InfoSection {...GameObjOne}/>
            <AboutSection {...AboutbjOne}/>
        </>
    )
};

export default Home
