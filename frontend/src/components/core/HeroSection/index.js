import React from 'react';
import { BackgroundDiv, HeaderContent, HeaderContentWrapper, HeaderHelpText, HeaderImg, HeaderImgWrapper, HeaderText, HeroSectionWrapper } from './HeroElements';

const HeroSection = () => {
    return (
        <HeroSectionWrapper>
            <BackgroundDiv />
            <HeaderContent>
                <HeaderContentWrapper>
                    <HeaderText>Are you ready to <span>Lead</span> the way? </HeaderText>
                    <HeaderHelpText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    Lorem ipsum dolor sit amet aliqua.</HeaderHelpText>
                </HeaderContentWrapper>
            </HeaderContent>
            <HeaderImgWrapper>
                <HeaderImg src="https://firebasestorage.googleapis.com/v0/b/shoppy-902dd.appspot.com/o/upload_dc4223ef28884e59001143492659a214.png?alt=media&token=13af9a97-ce08-40f6-a313-6cf99751524b" />
            </HeaderImgWrapper>
        </HeroSectionWrapper>
    )
}

export default HeroSection
