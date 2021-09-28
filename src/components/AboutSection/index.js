import React from "react";
import { Button } from "../ButtonElemnt";
import { 
    AboutContainer, 
    AboutWrapper,
    AboutRow,
    AboutColumn1,
    TextWrapper,
    AboutTopLine,
    AboutHeading,
    AboutInfo,
    AboutColumn2,
    AboutImgWrap,
    AboutImg, 
    AboutBtn
 } from "./aboutElements";

const AboutSection = ({
    topLine, 
    headLine, 
    description, 
    img, 
    alt, 
    buttonLabal,
    primary, 
    dark,
    dark2,
    lightBg,
    id
}) => {
    return (
        <>
            <AboutContainer lightBg ={lightBg} id={id}>
                <AboutWrapper>
                    <AboutRow>
                        <AboutColumn1>
                            <TextWrapper>
                                <AboutTopLine>{topLine}</AboutTopLine>
                                <AboutHeading>{headLine}</AboutHeading>
                                <AboutInfo>{description}</AboutInfo>
                                <AboutBtn to="/about">Enter</AboutBtn>
                            </TextWrapper>
                        </AboutColumn1>
                        <AboutColumn2>
                            <AboutImgWrap>
                                <AboutImg src={img} alt={alt}/>
                            </AboutImgWrap>
                        </AboutColumn2>
                    </AboutRow>
                </AboutWrapper>
            </AboutContainer>
        </>
    )
}

export default AboutSection
