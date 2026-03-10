import React from 'react';
import styled from "styled-components";
import img1 from '../../../assets/img/section/main/mainImg.webp';
import img1x from "../../../assets/img/section@2x/main/mainImg_@2x.webp";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {MainLink} from "../../../components/MainLink";
import Typewriter from 'typewriter-effect';
import {Fade} from "react-awesome-reveal";
import {useTheme} from "../../../ThemeProvider";
import img2 from '../../../assets/img/section/main/decoration/1.svg';
import img3 from '../../../assets/img/section/main/decoration/2.svg';
import img4 from '../../../assets/img/section/main/decoration/3.svg';
import img5 from '../../../assets/img/section/main/decoration/4.svg';
import img6 from '../../../assets/img/section/main/decoration/5.svg';
import img7 from '../../../assets/img/section/main/decoration/6.svg';
import img8 from '../../../assets/img/section/main/decoration/8.svg';
import {themeobjectType} from "../../../styles/ColorSheme";

export const AboutMe = () => {

    const {themeobj} = useTheme();

    return (
        <Fade cascade damping={.9}>
            <MainSection themeobj={themeobj}>
                <FlexWrapper
                             align={'center'}
                             justify={"space-around"}
                             padding={"30px 50px 0 50px"}
                >
                    <FlexWrapper
                        flex={'3'}
                        gap={'20px 0'}
                        direction={'column'}>
                        <Fade direction={"down"}>
                            <MaineTextTitle theme={themeobj}>Привет!<br/>
                              Меня зовут Сергей - я
                                <p>I’m Rayan Adlrdard <span>Front-end</span> Developer</p>
                                <Typewriter options={{
                                        strings: ['<span>Front-end</span> Developer'],
                                        autoStart: true,
                                        loop: true,
                                        delay: 150,
                                    }}
                                />
                            </MaineTextTitle>
                        </Fade>
                        <Fade cascade damping={.2}>
                            <MaineTextSubTitle>Разработчик с опытом 1+ года создания SPA
                              с использованием TypeScript, React, Redux (RTK Query).
                              В настоящее время начал изучать Next.js,
                              чтобы расширить свои знания и навыки.</MaineTextSubTitle>
                        </Fade>
                        <Fade direction={"up"}>
                            <MainLink textBtn={"Свяжитесь со мной"}></MainLink>
                        </Fade>
                    </FlexWrapper>
                    <FlexWrapper
                        flex={"1.5"}
                        justify={"end"}>
                        <MaineImg src={img1}
                                  srcSet={`${img1x} 2x`}/>
                    </FlexWrapper>
                </FlexWrapper>
            </MainSection>
        </Fade>
    );
};

const MainSection = styled.section<{ themeobj: themeobjectType }>`

  ${FlexWrapper}:first-child {
    background: url("${img2}") top 5% left 3% no-repeat,
    url("${img3}") top 10% left 55% no-repeat,
    url("${img4}") top 23% right 2% no-repeat,
    url("${img5}") bottom 5% left 8% no-repeat,
    url("${img6}") bottom 22% left 40% no-repeat,
    url("${img7}") bottom 10% left 58% no-repeat,
    url("${img8}") bottom 7% right 2% no-repeat;
    background-color: ${({themeobj}) => themeobj.colors.backgroundColorSection};
  }

  @media screen and (max-width: 1280px) {
    ${FlexWrapper}:last-child {
      align-items: flex-end;
    }
  }

  @media screen and (max-width: 1271px) {
    ${FlexWrapper} {
      align-items: flex-start;
    }
  }

  @media screen and (max-width: 1156px) {
    ${FlexWrapper} {
      flex: 0 0 100%;
      justify-content: center;
      align-items: center;
      padding: 5px 5px 0 5px;
    }
  }
`
const MaineTextTitle = styled.h1`
  p {
    display: none;
  }

  span {
    color: ${({theme}) => theme.colors.primary};
  }
`
const MaineTextSubTitle = styled.p`
  font-size: 16px;
`

const MaineImg = styled.img`
  height: auto;
  object-fit: cover;
  width: 100%;
  max-width: 325px;
  align-self: flex-end;
`
