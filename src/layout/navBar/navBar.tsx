import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {Link} from "react-scroll";
import {useTheme} from "../../ThemeProvider";
import {themeobjectType} from "../../styles/ColorSheme";
import {Fade} from "react-awesome-reveal";

const itemsData = [
    {
        title: 'Home',
        href: 'home',
        iconId: 'navBarHome',
        iconIdWidth: 40,
        iconIdHeight: 40
    },
    {
        title: 'Навыки',
        href: 'services',
        iconId: 'navBarService',
        iconIdWidth: 40,
        iconIdHeight:40
    },
    {
        title: 'Образование',
        href: 'education',
        iconId: 'navBarEducation',
        iconIdWidth: 40,
        iconIdHeight: 40
    },
    // {
    //     title: 'Портфолио',
    //     href: 'portfolio',
    //     iconId: 'navBarPortfolio',
    //     iconIdWidth: 40,
    //     iconIdHeight: 40
    // },
    {
        title: 'Портфолио',
        href: 'blog',
        iconId: 'navBarBlog',
        iconIdWidth: 40,
        iconIdHeight: 40,
    },
    {
        title: 'Контакты',
        href: 'contacts',
        iconId: 'navBarContact',
        iconIdWidth: 40,
        iconIdHeight: 40,
    }
]
export const NavBar = () => {
    const {themeobj, toggleTheme} = useTheme();

    return (
        <Nav themeobj={themeobj}>
            <Fade cascade damping={.2}>
                <ul>
                    <li>
                        <ButtonTheme themeobj={themeobj} onClick={() => {
                            toggleTheme(themeobj === 'dark' ? 'light' : 'dark');}}
                        ><Icon iconId={'navBarContrast'} width={30} height={30}
                               fill={themeobj.colors.backgroundWebsite}/>
                        </ButtonTheme>
                    </li>
                    {itemsData.map((item, index) => {
                        return (
                            <li key={index}>
                                <NavMenu
                                    smooth={true}
                                    to={item.href}
                                    activeClass="active"
                                    spy={true}
                                >
                                    <NavLinkItem
                                        themeobj={themeobj}
                                        title={item.title}>

                                        <Icon iconId={item.iconId}
                                              width={item.iconIdWidth}
                                              height={item.iconIdWidth}
                                              fill={themeobj.colors.primary}/>
                                    </NavLinkItem>
                                </NavMenu>
                            </li>
                        );
                    })}
                </ul>
            </Fade>
        </Nav>
    );
};

const NavMenu = styled(Link)``;

const Nav = styled.nav<{ themeobj: themeobjectType }>`
  position: fixed;
  right: 0;
  z-index: 100;
  min-width: 110px;
  background-color: ${({themeobj}) => themeobj.colors.backgroundColorSection};
  padding: 50px 22px 50px 25px;
  overflow-y: scroll;
  height: 100vh;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 45px;

    li > div:hover::before {
      content: none;
    }

    li > div:hover::after {
      content: none;
    }
  }

  @media screen and (max-width: 1091px) {
    position: fixed;
    bottom: 0;
    background-color: ${({themeobj}) => themeobj.colors.backgroundColorSection};
    width: 100%;
    height: auto;
    padding: 18px 0;
    border-top: 1px solid  ${({themeobj}) => themeobj.colors.primary};
 

    ul {
      display: flex;
      gap: 45px;
      align-items: center;
      justify-content: center;
      flex-direction: row;

      li {
        margin-bottom: 0;
      }

      li:first-child {
        margin-bottom: 0;

        a div {
          &:hover::after {
            bottom: 54px;
          }
        }
      }

      a {
        &:first-child {
          margin-bottom: 0;
        }
      }

    }

    @media screen and (max-width: 570px) {
      ul {
        gap: 30px;
      }

      li:first-child {
        display: none;
      }
    }
    @media screen and (max-width: 425px) {
      padding: 10px 0;
      ul {
        gap: 25px;
      }
    }
  }
`;
const NavLinkItem = styled.div<{ themeobj: themeobjectType }>`
  position: relative;
  cursor: pointer;

  svg {
    color: ${({themeobj}) => themeobj.colors.primary};
    transition: all .3s ease;
  }

  &:hover svg {
    color: ${({themeobj}) => themeobj.colors.primary};
    transform: scale(1.3);
    transition: all .3s ease;
  }

  &:hover::after {
    content: attr(title);
    font-size: 15px;
    font-weight: 500;
    position: absolute;
    bottom: 60px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${({themeobj}) => themeobj.colors.primary};
    color: ${({themeobj}) => themeobj.colors.backgroundColorSection};
    padding: 5px 15px;
    border-radius: 3px;
    white-space: nowrap;
    @media screen and (max-width: 1091px) {
      content: none;
    }
  }

  &:hover::before {
    content: '';
    position: absolute;
    bottom: 112%;
    left: 25%;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 13px solid ${({themeobj}) => themeobj.colors.primary};
  }

`;
const ButtonTheme = styled(NavLinkItem)<{ themeobj: themeobjectType }>`
  margin: 50px 0 125px 0;
  text-align: center;

  svg {
    color: ${({themeobj}) => themeobj.colors.primary};
    transition: all .3s ease;
  }

  @media screen and (max-width: 1091px) {
    margin: 0;
  }
`

