import React from 'react';
import styled, {CSSProperties} from "styled-components";
import {useTheme} from "../../../../ThemeProvider";
import {themeobjectType} from "../../../../styles/ColorSheme";


type SidebarAboutTextPropsType = {
    text: string;
    bgColor?: CSSProperties['color']
    color?: CSSProperties['color']
}

export const SidebarAboutFragment = (props: SidebarAboutTextPropsType ) => {
    const { themeobj } = useTheme();
    return (
        <SidebarAboutText
            themeobj={themeobj}{...props}
            color={props.color}
            bgColor={props.bgColor}>{props.text}
        </SidebarAboutText>
    );
};

const SidebarAboutText = styled.span<{ bgColor: CSSProperties['color'], themeobj: themeobjectType }>`
  padding: 5px;
  background-color: ${(props) => props.bgColor || "inherit"};
  color: ${props => props.color || props.themeobj.colors.backgroundWebsite};
  max-width: fit-content;
`;
