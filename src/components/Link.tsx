import React from 'react';
import {Icon} from "./icon/Icon";
import styled from "styled-components";
import {useTheme} from "../ThemeProvider";
import {themeobjectType} from "../styles/ColorSheme";

type CardLinkPropsType = {
  link: string
  href?: string
};

export const CardLink = (props: CardLinkPropsType) => {
  const {themeobj} = useTheme();
  return (
    <Link href={props.href || "#"} themeobj={themeobj}>
      {props.link}
      <Icon iconId={"angleBracket"} width={5} height={8} color={"#fffff"} viewBox={"0 0 5 8"}/>
    </Link>
  );
};

const Link = styled.a<{ themeobj: themeobjectType }>`
  color: ${({themeobj}) => themeobj.colors.primary};

  padding-top: 20px;
  display: flex;
  text-transform: capitalize;
  align-items: baseline;

  svg {
    margin-left: 8px;

    &:hover {
      color: ${({themeobj}) => themeobj.colors.headerText};
      transition: color 0.3s ease-out;
    }
  }

  &:hover {
    color: ${({themeobj}) => themeobj.colors.headerText};
    transition: ${({themeobj}) => themeobj.animation.transitionColor};
  }
`;
