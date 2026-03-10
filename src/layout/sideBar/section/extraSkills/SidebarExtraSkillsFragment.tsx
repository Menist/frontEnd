import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {useTheme} from "../../../../ThemeProvider";
type ExtraSkillsFragmentPropsType = {
    text: string
}
export const SidebarExtraSkillsFragment = (props: ExtraSkillsFragmentPropsType) => {
    const {themeobj} = useTheme();
    return (
        <SidebarExtraSkills>
            <FlexWrapper align={"center"} gap={"15px"}>
                <Icon iconId={"squareSidebar"} color={themeobj.colors.primary} fill={themeobj.colors.backgroundColorSection} height={15} width={15}/>
                <SidebarExtraSkillsText>{props.text}</SidebarExtraSkillsText>
            </FlexWrapper>
        </SidebarExtraSkills>
    );
};

const SidebarExtraSkills = styled.div`
  padding-top: 15px;
`
const SidebarExtraSkillsText = styled.div`
`