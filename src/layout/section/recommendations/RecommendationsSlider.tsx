import React from 'react';
import styled from "styled-components";
import {BlockTitle} from "../../../components/SectionTitle/BlockTitle";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {RecommendationsCard} from "./card/RecommendationsCard";
import {Fade} from "react-awesome-reveal";
import {useTheme} from "../../../ThemeProvider";
import {themeobjectType} from "../../../styles/ColorSheme";

const items = [
  <RecommendationsCard
    iconType={"star"}
    cardTitle={"Amazing work!"}
    cardDescription={
      <ul>
        <li>UI/UX Design</li>
        <li>Figma / Adobe XD</li>
        <li>Prototyping</li>
        <li>User Research</li>
      </ul>}
    // personName={"Tiana Philips"}
    // profession={"Photographer"}
    // imageSrc={img2}
    // imageSrcSet={img2x}
  />,
  <RecommendationsCard
    iconType={"star"}
    cardTitle={"Great Quality!"}
    cardDescription={
      <ul>
        <li>UI/UX Design</li>
        <li>Figma / Adobe XD</li>
        <li>Prototyping</li>
        <li>User Research</li>
      </ul>}
  />,
  <RecommendationsCard
    iconType={"star"}
    cardTitle={"Great Quality!"}
    cardDescription={
      <ul>
        <li>UI/UX Design</li>
        <li>Figma / Adobe XD</li>
        <li>Prototyping</li>
        <li>User Research</li>
      </ul>}

  />,
  <RecommendationsCard
    iconType={"star"}
    cardTitle={"Amazing work!"}
    cardDescription={
      <ul>
        <li>UI/UX Design</li>
        <li>Figma / Adobe XD</li>
        <li>Prototyping</li>
        <li>User Research</li>
      </ul>}
  />,
  <RecommendationsCard
    iconType={"star"}
    cardTitle={"Great Quality!"}
    cardDescription={
      <ul>
        <li>UI/UX Design</li>
        <li>Figma / Adobe XD</li>
        <li>Prototyping</li>
        <li>User Research</li>
      </ul>}

  />
];
const responsive = {
  900: {items: 2},
  1200: {items: 2},
  1440: {items: 3},
  3000: {items: 5},
};

export const RecommendationsSlider = () => {
  const {themeobj} = useTheme();
  return (
    <Fade cascade damping={.3}>
      <RecommendationsStyled themeobj={themeobj}>
        <BlockTitle
          title={"Дополнительные навыки"}
          subTitle={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"}></BlockTitle>
        <AliceCarousel
          responsive={responsive}
          autoPlay
          autoPlayStrategy="none"
          autoPlayInterval={1500}
          animationDuration={1500}
          infinite
          touchTracking={false}
          disableButtonsControls
          items={items}
        />
      </RecommendationsStyled>
    </Fade>
  );
};

const RecommendationsStyled = styled.section<{ themeobj: themeobjectType }>`
  .alice-carousel {
    max-width: calc(99vw - 480px);
  }

  @media screen and (max-width: 1091px) {
    .alice-carousel {
      max-width: calc(100vw - 370px);
    }
  }

  @media screen and (max-width: 800px) {
    .alice-carousel {
      max-width: calc(100vw - 60px);
    }
  }

  .alice-carousel__wrapper {
    width: 100%;
  }

  .alice-carousel__dots-item:not(.__custom):hover, .alice-carousel__dots-item:not(.__custom).__active {
    background-color: ${({themeobj}) => themeobj.colors.primary};
  }
`
