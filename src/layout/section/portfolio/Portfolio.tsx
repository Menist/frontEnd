import React, {useState} from 'react';
import styled from "styled-components";
import {BlockTitle} from "../../../components/SectionTitle/BlockTitle";
import {PortfolioCard} from "./cardPortfolio/PortfolioCard";
import img0 from "../../../assets/img/section/portfolio/OverlayPortfolio.webp";
import img1 from "../../../assets/img/section/portfolio/01.webp";
import img1x from "../../../assets/img/section@2x/portfolio/portfolio1_@2x.webp";
import img2 from "../../../assets/img/section/portfolio/02.webp";
import img2x from "../../../assets/img/section@2x/portfolio/portfolio2_@2x.webp";
import img3 from "../../../assets/img/section/portfolio/03.webp";
import img3x from "../../../assets/img/section@2x/portfolio/portfolio3_@2x.webp";
import img4 from "../../../assets/img/section/portfolio/04.webp";
import img4x from "../../../assets/img/section@2x/portfolio/portfolio4_@2x.webp";
import img5 from "../../../assets/img/section/portfolio/05.webp";
import img5x from "../../../assets/img/section@2x/portfolio/portfolio5_@2x.webp";
import img6 from "../../../assets/img/section/portfolio/06.webp";
import img6x from "../../../assets/img/section@2x/portfolio/portfolio6_@2x.webp";
import {Fade} from "react-awesome-reveal";
import {MenuTab} from "./navigationPortfolio/TabPortfolioData";
import {AnimatePresence, motion} from "framer-motion"

const projects = [
    {src: img1, type: 'spa', srcSet: img1x},
    {src: img2, type: 'react', srcSet: img2x},
    {src: img3, type: 'spa', srcSet: img3x},
    {src: img4, type: 'react', srcSet: img4x},
    {src: img5, type: 'landing page', srcSet: img5x},
    {src: img6, type: 'react', srcSet: img6x},
];
export const Portfolio = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState('all');

    let filteredProjects = projects;

    if (currentFilterStatus !== 'all') {
        filteredProjects = projects.filter(project => project.type === currentFilterStatus);
    }
    return (
        <Fade cascade damping={.9}>
            <PortfolioSection id={'portfolio'}>
                <BlockTitle title={'Portfolio'}
                            subTitle={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'}></BlockTitle>

                <MenuTab changeFilter={setCurrentFilterStatus}/>

                <GridWrap>
                    <AnimatePresence>
                        {filteredProjects.map((project, index) => {
                            return (
                                <motion.div
                                    layout
                                    initial={{opacity: 0, scale: .2 }}
                                    animate={{opacity: 1, scale: 1}}
                                    transition={{ ease: "linear", duration: 1 }}
                                    key={index}
                                >
                                    <PortfolioCard type={project.type}
                                                   src={project.src}
                                                   srcSet={project.srcSet}
                                                   overLay={img0}
                                                   key={index}
                                    />
                                  </motion.div>
                            )
                        })
                        }
                    </AnimatePresence>
                </GridWrap>
            </PortfolioSection>
        </Fade>
    );
};

const PortfolioSection = styled.section`

`
const GridWrap = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(230px, .3fr));
  column-gap: 20px;
  row-gap: 20px;
  margin-top: 30px;
  justify-content: center;

  @media screen and (max-width: 1207px) {
    grid-template-columns: repeat(auto-fit, minmax(230px, .5fr));
    justify-items: center;
  }
  
  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  }
`