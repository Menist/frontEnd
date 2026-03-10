import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/header/Header";
import {AboutMe} from "./layout/section/main/Main";
import {Services} from "./layout/section/services/Services";
import {Price} from "./layout/section/price/Price";
import {Education} from "./layout/section/education/Education";
import React, {useState} from "react";
import {Blog} from "./layout/section/blog/Blog";
import {FormMainFile} from "./layout/section/form/FormMinFile";
import {Map} from "./layout/section/map/Map";
import {Sidebar} from "./layout/sideBar/Sidebar";
import {NavBar} from "./layout/navBar/navBar";
import {Footer} from "./layout/footer/Footer";
import {ThemeProvider} from "./ThemeProvider";

function App() {
    const [menuIsOpen, setMenuIsOpen] = useState(true);
    return (
        <ThemeProvider>
            <div className="App">
                <Sidebar menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen}/>
                <Main isOpen={menuIsOpen}>
                    <Container>
                        <Header/>
                        <AboutMe/>
                        <Services/>
                        <Price/>
                        <Education/>
                        <Blog/>
                        <FormMainFile/>
                        <Map/>
                        <Footer/>
                    </Container>
                </Main>
                <NavBar/>
            </div>
        </ThemeProvider>

    );
}

const Container = styled.div`
  margin: 0 auto;
  max-width: 1600px;
`
const Main = styled.main<{ isOpen: boolean }>`
  padding-left: ${props => props.isOpen ? '310px' : 'inherit'};
  padding-right: 110px;
  transition: all .9s ease;
  flex: 1;

  @media screen and (max-width: 800px) {
    padding-left: 0;
  }

  @media screen and (max-width: 1091px) {
    padding-right: 0;
  }
`

export default App;
