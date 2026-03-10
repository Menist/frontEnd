import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Menu} from "./Menu";
import {MobileMenu} from "../mobileMenu/MobileMenu";
import {useTheme} from "../../ThemeProvider";
import {themeobjectType} from "../../styles/ColorSheme";

export const Header = () => {
    const { themeobj } = useTheme();
    return (
        <HeaderMenu id={'home'} themeobj={themeobj}>
            <MobileMenu />
            <FlexWrapper justify={"flex-start"}
                         align={"center"}
                         padding={"20px 0 10px 60px"}>
                <Logo/>
                <Menu></Menu>
            </FlexWrapper>
        </HeaderMenu>
    );
};
const HeaderMenu = styled.header<{themeobj: themeobjectType}>`
  position: relative;
  
  ${FlexWrapper} {
    background-color: ${({themeobj}) =>themeobj.colors.backgroundColorSection};
    border-bottom: 2px solid ${({themeobj}) =>themeobj.colors.backgroundWebsite};
  }

  &::after {
    content: "";
    display: block;
    background-color: ${({themeobj}) =>themeobj.colors.backgroundColorSection};
    height: 1px;
  }

  @media screen and (max-width: 1091px) {
    ${FlexWrapper} {
      justify-content: space-evenly;
      padding: 10px;
    }
  }
  
  @media screen and (max-width: 768px) {
    &::after {
      content: none;
    }
  }
  
  @media screen and (max-width: 768px) {
    ${FlexWrapper} {
      display: none;
    }
  }
`


