import React from 'react';
import styled from "styled-components";
import {Fade} from "react-awesome-reveal";
import {useTheme} from "../../../../ThemeProvider";
import {themeobjectType} from "../../../../styles/ColorSheme";

type PortfolioCardPropsType = {
    src: string
    srcSet: string
    overLay: string
    type: string
}

export const PortfolioCard = (props: PortfolioCardPropsType) => {
    const {themeobj} = useTheme()
    return (
        <Fade cascade damping={.9}>
            <PortfolioCardLink href={'#'} >
                <PortfolioCardImg src={props.src} srcSet={`${props.srcSet} 2x`}></PortfolioCardImg>
                <PortfolioHoverOverlay themeobj={themeobj}>
                    <PortfolioOverlayImage src={props.overLay}></PortfolioOverlayImage>
                    <PortfolioOverlayImage></PortfolioOverlayImage>
                </PortfolioHoverOverlay>
            </PortfolioCardLink>
        </Fade>
    );
};


const PortfolioCardImg = styled.img`
  width: 100%;
`;

const PortfolioCardLink = styled.a`
  width: 100%;
  background-size: cover;
  display: inline-block;
  position: relative;
  overflow: hidden;
  max-width: 350px;
`;

const PortfolioHoverOverlay = styled.div<{themeobj: themeobjectType}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({themeobj}) =>themeobj.colors.accent};
  opacity: 0;
  transition: opacity .3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 1;
  }
`;

const PortfolioOverlayImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: rotate(90deg) scale(1.3);
  }
`;