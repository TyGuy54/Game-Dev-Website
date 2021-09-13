import React from 'react'
import { Button } from 'react-scroll'
import { 
    Img, 
    ImgWrap, 
    InfoContainer, 
    InfoWrapper, 
    InfoRow,  
    Column1, 
    Column2, 
    TextWrapper, 
    TopLine, 
    SubTitle, 
    BtnWrap,
    Heading 
} from './InfoElements'


const InfoSection = () => {
    return (
        <>
            <InfoContainer>
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                        <TextWrapper>
                            <TopLine>TopLine</TopLine>
                            <Heading>Heading</Heading>
                            <SubTitle>Subtitle</SubTitle>
                            <BtnWrap>
                                <Button to="home" />
                            </BtnWrap>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
