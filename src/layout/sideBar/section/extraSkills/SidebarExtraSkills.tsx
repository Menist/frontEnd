import React from 'react';
import styled from "styled-components";
import {SidebarSectionTitle} from "../../SidebarSectionTitle";
import {SidebarExtraSkillsFragment} from "./SidebarExtraSkillsFragment";
import {useTheme} from "../../../../ThemeProvider";
import {themeobjectType} from "../../../../styles/ColorSheme";
import {Fade} from "react-awesome-reveal";

export const SidebarExtraSkills = () => {
    const {themeobj} = useTheme();
    return (
        <Fade cascade damping={.9}>
            <SidebarExtraSkillsContainer themeobj={themeobj}>
                <SidebarSectionTitle text={"Дополнительные навыки"}></SidebarSectionTitle>
                <SidebarExtraSkillsFragment text={"Semantic HTML"}></SidebarExtraSkillsFragment>
                <SidebarExtraSkillsFragment text={"Stylus, Sass, Less"}></SidebarExtraSkillsFragment>
                <SidebarExtraSkillsFragment text={"ARIA attributes"}></SidebarExtraSkillsFragment>
                <SidebarExtraSkillsFragment text={"Prerendering"}></SidebarExtraSkillsFragment>
            </SidebarExtraSkillsContainer>
        </Fade>
    );
};
const SidebarExtraSkillsContainer = styled.div <{ themeobj: themeobjectType }>`
  border-bottom: 1px solid ${({themeobj}) => themeobj.colors.backgroundWebsite};
  margin: 25px 0;
  padding-bottom: 25px;
`