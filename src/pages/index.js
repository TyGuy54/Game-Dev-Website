import React, {useState} from 'react'
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
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
            <InfoSection />
        </>
    )
};

export default Home
