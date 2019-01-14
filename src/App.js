import React, { Component } from 'react';
import './App.css';
import colors from './colors';
import t, {addTranslation,Translator} from './translation';
//Parts
import Projects from './Parts/Projects';
import {BoxesParallax,FilmParallax,CableParallax} from './Parts/Parallaxes';
import Qualifications from './Parts/Qualifications';
import Skills from './Parts/Skills';
import Presentation from './Parts/Presentation';
import Footer from './Parts/Footer';
import Header from './Parts/Header';

//Media
import logo from './assets/img/logo.png';

//translations
const translations=[
  ["Skills",{en:"Skills",fr:"Compétences"}],
  ["Qualifications",{en:"Qualifications",fr:"Expérience"}],
  ["Projects",{en:"Projects",fr:"Projets"}],
];
for(const [id,translation] of translations) addTranslation(id,translation);

class App extends Component {
  render() {
    return (
      <Translator onTranslate={()=>this.forceUpdate()}>
        <div className="App">
          <Header anchor="Header"/>
          <Presentation anchor="Presentation"/>
          <BoxesParallax text={t("Skills")} anchor="Pre-Skills"/>
          <Skills anchor="Skills"/>
          <CableParallax text={t("Qualifications")} anchor="Pre-Qualifications"/>
          <Qualifications anchor="Qualifications"/>
          <FilmParallax text={t("Projects")} anchor="Pre-Projects"/>
          <Projects anchor="Projects"/>
          <Footer anchor="Footer"/>
        </div>
      </Translator>
    );
  }
}

export default App;
