import React from 'react'
import { Button } from '../ButtonElemnt'
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


const InfoSection = ({lightBg, img, imgStart, topLine, lightText, description, darkText, buttonLabal, headLine, alt, id}) => {
    return (
        <>
            <InfoContainer lightBg ={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headLine}</Heading>
                            <SubTitle darkText={darkText}>{description}</SubTitle>
                            <BtnWrap>
                                <Button to="home">{buttonLabal}</Button>
                            </BtnWrap>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
