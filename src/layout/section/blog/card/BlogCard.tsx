import React from 'react';
import styled from "styled-components";
import {CardLink} from "../../../../components/Link";
import {useTheme} from "../../../../ThemeProvider";
import {themeobjectType} from "../../../../styles/ColorSheme";
import {AnimatePresence, motion} from "framer-motion"

type BlogCardPropsType = {
  title: string
  text: string
  textLink: string
  src: string
  srcSet: string
  linkUrl?: string
}
export const BlogCard = (props: BlogCardPropsType) => {
  const {themeobj} = useTheme();

  return (
    <BlogCardStyled>
      <AnimatePresence>
        <motion.div
          layout
          initial={{opacity: 0, scale: .2}}
          whileInView={{opacity: 1, scale: 1}}
          transition={{ease: "linear", duration: 1,}}
        >
          <BlogCardImg themeobj={themeobj} image={props.src} srcSet={props.srcSet}/>
          <BlogCardWrapper themeobj={themeobj}>
            <BlogCardTitle>{props.title}</BlogCardTitle>
            <BlogCardText>{props.text}</BlogCardText>
            <CardLink link={props.textLink} href={props.linkUrl} />
          </BlogCardWrapper>
        </motion.div>
      </AnimatePresence>
    </BlogCardStyled>

  );
};

const BlogCardStyled = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex: 0 0 31.5%;

  a {
    padding-top: 0;
    font-size: 18px;
  }

  @media screen and (max-width: 1420px) {
    flex: 0 0 48%;
  }

  @media screen and (max-width: 1170px) {
    flex: 0 0 90%;
    align-items: center;
  }
`
const BlogCardWrapper = styled.div<{ themeobj: themeobjectType }>`
  padding: 25px;
  background-color: ${({themeobj}) => themeobj.colors.backgroundColorSection};

  a {
    display: inline-block;
  }
`
const BlogCardTitle = styled.h4`
  font-weight: 500;
  text-transform: none;
  white-space: nowrap
`
const BlogCardText = styled.p`
  font-weight: 400;
  padding: 10px 0;
`
const BlogCardImg = styled.div<{ image: string, srcSet: string, themeobj: themeobjectType }>`
  background-image: url(${(props) => props.image});
  border: 1px solid ${({themeobj}) => themeobj.colors.accent};;
  background-size: cover;
  background-position: center center;
  height: 300px;
  width: 100%;

  @media (min-resolution: 2dppx) {
    background-image: ${(props) => `url(${props.srcSet})`};
  }
`


