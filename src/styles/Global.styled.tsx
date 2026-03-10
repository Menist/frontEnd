import {ThemeProvider} from "../ThemeProvider";
import {createGlobalStyle} from "styled-components";
import {themeobjectType} from "./ColorSheme";

export const GlobalStyle = ({children}: any) => {
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    );
};

export const GlobalStyled = createGlobalStyle<{ themeobj: themeobjectType }>`
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  &::-webkit-scrollbar {
    width: 5px;
    border: ${({ themeobj }) => themeobj.colors.accent} solid;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 30px;
    background-color: ${({ themeobj }) => themeobj.colors.primary};
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${({ themeobj }) => themeobj.colors.accent};
  }
  
  body {
    margin: 0;
    color: ${({ themeobj }) => themeobj.colors.mainText};
    background-color: ${({ themeobj }) => themeobj.colors.backgroundWebsite};

    font-family: "Inter", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: ${({ themeobj }) => themeobj.text.textSize};

    p {
      line-height: ${({ themeobj }) => themeobj.text.lineHeight};
    }
  }
  
  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    background-color: unset;
    border: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
    color: ${({ themeobj }) => themeobj.colors.headerText};
  }

  h1 {
    font-size: calc((100vw - 375px) / (3000 - 375) * (75 - 30) + 30px);
  }

  h2 {
    font-size: calc((100vw - 375px) / (3000 - 375) * (40 - 27) + 27px);
  }

  h3 {
    font-size: calc((100vw - 375px) / (3000 - 375) * (30 - 24) + 24px);
  }

  h4 {
    font-size: calc((100vw - 375px) / (3000 - 375) * (19 - 18) + 18px);
  }
   
    @media screen and (max-width: 1091px) {
      &::-webkit-scrollbar {
        width: 0;
        border: ${({ themeobj }) => themeobj.colors.accent} solid;
      }
    }

  Header, Footer, section {
    padding: 0 30px;
    @media screen and (max-width: 392px) {
      padding: 0 10px;
    }
  }
  
`;
