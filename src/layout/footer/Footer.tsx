import React from 'react';
import styled from "styled-components";
import {Fade} from "react-awesome-reveal";
import {useTheme} from "../../ThemeProvider";
import {themeobjectType} from "../../styles/ColorSheme";

export const Footer = () => {
    const { themeobj } = useTheme();

    return (
        <Fade cascade damping={.3} >
            <FooterSection themeobj={themeobj}>
                <p><span>&#169;</span>2026 Front-end Developer</p>
            </FooterSection>
        </Fade>
    );
};
const FooterSection = styled.footer<{themeobj: themeobjectType}>`
  p {
    color:  ${({themeobj}) =>themeobj.colors.headerText};
    background-color: ${({themeobj}) =>themeobj.colors.backgroundColorSection};
    padding-top: 18px;
    padding-bottom: 18px;
    text-align: center;
  }

  span {
    color:  ${({themeobj}) =>themeobj.colors.primary};
    padding-right: 17px;
    font-size: 20px;
    vertical-align: bottom;
  }

  @media screen and (max-width: 1091px) {
    margin-bottom: 80px;
  }

  @media screen and (max-width: 425px) {
    margin-bottom: 65px;
  }
`
