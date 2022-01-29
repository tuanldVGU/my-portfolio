import React, { Ref, useRef } from 'react';
import './App.css';
import styled, {keyframes} from 'styled-components';

import { HomeIcon, IdentificationIcon, AnnotationIcon, BriefcaseIcon } from '@heroicons/react/outline'

function App() {

  const HomeSection = useRef<HTMLElement>(null)
  const ProfileSection = useRef<HTMLElement>(null)
  const ProjectSection = useRef<HTMLElement>(null)
  // const ContactSection = useRef<HTMLElement>(null)

  const scrollToView = (view: number) => {
    switch (view) {
      case 0:
        smoothScroll(HomeSection)
        break
      case 1:
        smoothScroll(ProfileSection)
        break
      case 2:
        smoothScroll(ProjectSection)
        break
      // case 3:
        // smoothScroll(ContactSection)
        // break
    }
  }

  const smoothScroll = (section: React.MutableRefObject<HTMLElement | null>) => {
    section.current?.scrollIntoView({ behavior: 'smooth'})
  }

  return (
    <div className="App">
      <Section ref={HomeSection} className="items-center" isColomn>
        <Container className="uppercase justify-center" style={{display: 'flex'}}>
          <CenterDiv className="hero-wrap" style={{backgroundImage: `url('/img/Layer_3.png')`}}>
            <span className="text-primary"> Hey! I'm </span> 
            <HeroTitle> DINH TUAN LU</HeroTitle>
            <Row>
              <span>An Juniors</span> &nbsp;
              <TypeingChar className="text-primary underline" char="15">Web developer.</TypeingChar>
            </Row>
            
          </CenterDiv>
        </Container>
      </Section>
      <Section ref={ProfileSection} className="items-center">
        <Container className="uppercase justify-center">
          <h1>Profiles</h1>
        </Container>
      </Section>
      <Section ref={ProjectSection} className="items-center">
        <Container className="uppercase justify-center">
          <h1>Projects</h1>
        </Container>
      </Section>
      <MenuNav spacing='20px'>
        <ul>
          <li className="item" onClick={() => {scrollToView(0)}}>
            <MenuItem>
              <HomeIcon className="h-5 w-5"/>
              <span>Home</span>
            </MenuItem>
          </li>
          <li className="item" onClick={() => {scrollToView(1)}}>
            <MenuItem>
              <IdentificationIcon className="h-5 w-5"/>
              <span>Profiles</span>
            </MenuItem>
          </li>
          <li  className="item"  onClick={() => {scrollToView(2)}}>
            <MenuItem>
              <BriefcaseIcon className="h-5 w-5"/>
              <span>Projects</span>
            </MenuItem>
          </li>
          <li className="item"  onClick={() => {scrollToView(3)}}>
            <MenuItem>
              <AnnotationIcon className="h-5 w-5"/>
              <span>Contact</span>
            </MenuItem>
          </li>
        </ul>
      </MenuNav>
    </div>
  );
}

const Section = styled.section<{isColomn?: boolean}>`
  width: 100vw;
  height: 100vh;
  flex-direction: ${props => props.isColomn ? 'column': 'row'};
`

const HeroTitle = styled.h1`
  font-size: 60px;
`;

const Container =  styled.div`
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
  font-weight: 800;
  
`

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-size: cover;
  background-repeat: no-repeat;
  max-width: 500px;
  background-size: 100% auto;
  background-position: 50% 50%;
`

const Typing = keyframes`
  from {
    width: 0;
  }
`

const Blinking = keyframes`
  from, to {
    color: transparent;
  }

  50% {
    color: #000;
  }
`;

// const BlinkingCursor = styled.span`
//   animation: ${Blinking} 1s step-end infinite;
// `;

const TypeingChar = styled.div<{char: string}>`
  width: ${props => props.char || "0"}ch;
  overflow: hidden;
  white-space: nowrap;
  animation: ${Typing} 2s steps(${props => props.char || "0"});
  // , ${Blinking} .5s step-end infinite alternate;
  border-right: 3px solid;
`;

const Row = styled.h2`
  font-size: 20px;
  display: flex;
  flex-direction: row;
`

const MenuNav = styled.nav<{spacing: string}>`
  position: fixed;
  width: 100vw;
  bottom: 20px;
  padding: 0 50px;
  ul {
    text-align: center;
  }
  .item {
    display: inline-block;
    margin-left: ${props => props.spacing || '10px'};
    opacity: 0.6;
  }
  .item::last-child {
    margin-right: ${props => props.spacing || '10px'};
  }
  .item:hover {
    opacity: 1;
  }
`

const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default App;
