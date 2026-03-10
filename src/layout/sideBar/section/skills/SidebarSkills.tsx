import React from 'react';
import styled from "styled-components";
import {SidebarSectionTitle} from "../../SidebarSectionTitle";
import {themeobjectType} from "../../../../styles/ColorSheme";
import {useTheme} from "../../../../ThemeProvider";
import {Fade} from "react-awesome-reveal";
import {ProgressBarFragment} from "../../ProgressBar";

export const SidebarSkills = () => {
    const {themeobj} = useTheme();

    const skillsData = [
        { title: "React", progress: "80%" },
      { title: "Redux (RTK Query)", progress: "80%" },
      { title: "Js", progress: "70%" },
      { title: "TypeScript", progress: "60%" },
      { title: "Next js", progress: "40%" },
      { title: "Css", progress: "80%" }
    ];

    return (
        <Fade cascade damping={.9}>
            <SidebarSkillsStyled themeobj={themeobj}>
                <SidebarSectionTitle text={"Навыки"}></SidebarSectionTitle>
                {skillsData.map((skill, index) => (
                    <ProgressBarFragment
                        key={index}
                        textTitle={skill.title}
                        textProgress={skill.progress}
                        progress={skill.progress}
                    />
                ))}
            </SidebarSkillsStyled>
        </Fade>
    );
};

const SidebarSkillsStyled = styled.div<{ themeobj: themeobjectType }>`
  border-bottom: 1px solid ${({themeobj}) => themeobj.colors.backgroundWebsite};
  margin: 25px 0;
  padding-bottom: 25px;
`;
