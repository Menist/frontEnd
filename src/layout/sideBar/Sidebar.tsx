import styled, {css} from "styled-components";
import {Main} from "./section/main/Main";
import {SidebarAbout} from "./section/about/SidebarAbout";
import {Languages} from "./section/languages/Languages";
import {SidebarSkills} from "./section/skills/SidebarSkills";
import {SidebarExtraSkills} from "./section/extraSkills/SidebarExtraSkills";
import {SidebarBtn} from "./section/button/SidebarBtn";
import {useTheme} from '../../ThemeProvider';
import {themeobjectType} from "../../styles/ColorSheme";

type Props = {
  menuIsOpen: boolean
  setMenuIsOpen: (menuIsOpen: boolean) => void
}
export const Sidebar = (props: Props) => {
  const {themeobj} = useTheme();
  const onMobileSideBarClick = () => {
    props.setMenuIsOpen(!props.menuIsOpen);
  };
  return (
    <>
      <BurgerBtn themeobj={themeobj} isOpen={props.menuIsOpen} onClick={onMobileSideBarClick}>
        <span></span>
      </BurgerBtn>

      <SidebarStyled themeobj={themeobj} isOpen={props.menuIsOpen}>
        <Container themeobj={themeobj}>
          <Main/>
          <SidebarAbout/>
          <SidebarSkills/>
          <Languages/>
          <SidebarExtraSkills/>
          <SidebarBtn/>
        </Container>
        <OverLay
          onClick={() => {
            props.setMenuIsOpen(true);
          }}
        ></OverLay>
      </SidebarStyled>
    </>
  );
};

const OverLay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  right: 0;
`
const SidebarStyled = styled.aside<{ isOpen: boolean, themeobj: themeobjectType }>`
  position: relative;
  left: ${props => !props.isOpen ? '-310px' : '0'};
  transition: ${({themeobj}) => themeobj.animation.transitionAll};
  z-index: 100;

  @media screen and (max-width: 800px) {
    left: ${props => !props.isOpen ? '0' : '-310px'};
    position: fixed;
    height: 100%;
    ${props => !props.isOpen && css<{ isOpen: boolean, themeobj: themeobjectType }>`
      background-color: rgba(37, 37, 37, 0.79);
      top: 0;
      right: 0;
      bottom: 0;
      backdrop-filter: blur(4px);
      transition: ${({themeobj}) => themeobj.animation.transitionAll};
      z-index: 103;
    `}
  }
`
export const Container = styled.div<{ themeobj: themeobjectType }>`
  position: fixed;
  min-width: 310px;
  height: 100vh;
  background-color: ${({themeobj}) => themeobj.colors.backgroundColorSection};
  padding: 50px 30px 25px 28px;
  overflow-y: scroll;

  @media screen and (max-width: 800px) {
    padding: 25px 30px 25px 28px;
  }
`
const BurgerBtn = styled.button<{ isOpen: boolean, themeobj: themeobjectType }>`
  position: fixed;
  z-index: 103;
  top: 5px;
  left: ${(props) => props.isOpen ? '27px' : '9px'};
  height: 50px;
  cursor: pointer;
  transform: ${(props) => props.isOpen ? 'translateX(290px)' : 'translateX(0px)'};
  width: 14px;
  background-color: ${({themeobj}) => themeobj.colors.primary};
  transition: all .9s ease;
  border: 2px solid ${({themeobj}) => themeobj.colors.backgroundWebsite};
  border-radius: 3px;

  @media screen and (max-width: 800px) {
    left: ${(props) => !props.isOpen ? '27px' : '9px'};
    transform: ${(props) => !props.isOpen ? 'translateX(290px)' : 'translateX(0px)'};
    z-index: 104;
  }

  span {
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 5px;
    position: absolute;
    left: 2px;
    bottom: 31px;
    background-color: ${({themeobj}) => themeobj.colors.backgroundWebsite};
    cursor: pointer;

    &::before {
      content: "";
      position: absolute;
      display: block;
      width: 6px;
      height: 6px;
      border-radius: 5px;
      background-color: ${({themeobj}) => themeobj.colors.backgroundWebsite};
      top: 10px;
    }

    &::after {
      content: "";
      position: absolute;
      display: block;
      width: 6px;
      height: 6px;
      border-radius: 5px;
      background-color: ${({themeobj}) => themeobj.colors.backgroundWebsite};
      bottom: -20px;
    }
  }

  &:hover {
    border: 2px solid ${({themeobj}) => themeobj.colors.primary};
    background-color: ${({themeobj}) => themeobj.colors.primary};
    border-radius: 3px;
  }
`
