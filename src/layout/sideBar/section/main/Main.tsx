import React from 'react';
import styled from "styled-components";
import img1 from '../../../../assets/img/section/sidebar/SidebarMain.webp'
import img1x from '../../../../assets/img/section@2x/sidebar/sidebarMain_@2x.webp'
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {MainIcon} from "./MainIcon";
import {themeobjectType} from "../../../../styles/ColorSheme";
import {useTheme} from "../../../../ThemeProvider";
import {Fade} from "react-awesome-reveal";


export const Main = () => {
    const {themeobj} = useTheme();
    return (
        <Fade cascade damping={.9}>
            <SidebarMain themeobj={themeobj}>
                <FlexWrapper direction={"column"} align={"center"}>
                    <SidebarMainImg></SidebarMainImg>
                    <SidebarMainTitle>Сергей Новогран</SidebarMainTitle>
                    <SidebarMainSubtitle>Font-end Developer</SidebarMainSubtitle>
                    <MainIcon></MainIcon>
                </FlexWrapper>
            </SidebarMain>
        </Fade>
    );
};
const SidebarMain = styled.div<{ themeobj: themeobjectType }>`
  border-bottom: 1px solid ${({themeobj}) => themeobj.colors.backgroundWebsite};
  margin: 25px 0;
  padding-bottom: 25px;
`
const SidebarMainImg = styled.div`
  border-radius: 50%;
  min-width: 150px;
  min-height: 150px;
  object-fit: cover;
  position: relative;
  background-image: url(${img1});
  background-position: center;
  background-size: cover;

  @media (min-resolution: 2dppx) {
    background-image: ${`url(${img1x})`};
  }

  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #7EB942;
    bottom: 20px;
    right: 10px;
  }
`
const SidebarMainTitle = styled.h4`

`
const SidebarMainSubtitle = styled.p`

`
