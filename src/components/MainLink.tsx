import React from 'react';
import styled from "styled-components";
import {Icon} from "./icon/Icon";
import {Link} from "react-scroll";
import 'animate.css';
import {useTheme} from '../ThemeProvider';
import {themeobjectType} from "../styles/ColorSheme";

type StraightButtonPropsType = {
    textBtn: string;
};

export const MainLink = (props: StraightButtonPropsType) => {
    const {themeobj} = useTheme();
    return (
        <MaineLinkStyled themeobj={themeobj}>
            <Links
                to={'contacts'}
                spy={true}
                smooth={true}
                themeobj={themeobj}
            >
                {props.textBtn}
                <Icon iconId={"arrow"} color={'currentColor'} width={11} height={10} viewBox={"0 0 11 11"}/>
            </Links>
        </MaineLinkStyled>

    );
};

const MaineLinkStyled = styled.div<{ themeobj: themeobjectType }>`
  display: flex;
  cursor: pointer;
  max-width: fit-content;
  @media screen and (max-width: 1156px) {
    justify-content: center;
  }
`
const Links = styled(Link)<{ themeobj: themeobjectType }>`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 9px;
  background-color: ${({themeobj}) => themeobj.colors.primary};
  padding: 16px 32px;
  color: ${({themeobj}) => themeobj.colors.backgroundWebsite};
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: 500;
  border: 2px solid transparent;
  margin-bottom: 10px;
  transition: .3s;
  align-self: flex-start;
  white-space: nowrap;

  &:hover {
    border: 2px solid ${({themeobj}) => themeobj.colors.primary};
    background-color: ${({themeobj}) => themeobj.colors.backgroundColorSection};
    color: ${({themeobj}) => themeobj.colors.primary};
    transition: ${({themeobj}) => themeobj.animation.transitionBackground};
  }

  @media screen and (max-width: 1156px) {
    align-self: center;
  }
`;
