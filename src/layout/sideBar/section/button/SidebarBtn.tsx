import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";
import {useTheme} from "../../../../ThemeProvider";
import {themeobjectType} from "../../../../styles/ColorSheme";
import {Fade} from "react-awesome-reveal";

export const SidebarBtn = () => {
  const {themeobj} = useTheme();

  return (
    <Fade cascade damping={.9}>
      <SidebarButton
        as="a"
        href="/cv/cv.pdf"
        download="CV.pdf"
        themeobj={themeobj}
      >
        Скачать cv
        <Icon iconId={"SidebarDownload"} color={'currentColor'} width={14} height={16}/>
      </SidebarButton>
    </Fade>
  );
};

const SidebarButton = styled.button<{ themeobj: themeobjectType }>`
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 10px 40px 10px 40px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  background-color: ${({themeobj}) => themeobj.colors.primary};
  color: ${({themeobj}) => themeobj.colors.backgroundWebsite};
  cursor: pointer;
  border: 2px solid transparent;
  text-decoration: none; /* Убираем подчеркивание для ссылки */

  &:hover {
    border: 2px solid ${({themeobj}) => themeobj.colors.primary};
    background-color: ${({themeobj}) => themeobj.colors.backgroundColorSection};
    color: ${({themeobj}) => themeobj.colors.primary};
    transition: ${({themeobj}) => themeobj.animation.transitionAll};
  }

  @media screen and (max-width: 1091px) {
    margin-bottom: 70px;
  }

  @media screen and (max-width: 800px) {
    margin-bottom: 0;
  }
`;