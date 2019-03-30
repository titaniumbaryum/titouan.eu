import React from 'react';
import SubSpacePost from '../Bits/SubSpace/SubSpacePost';
import t, {addTranslation} from '../translation';
//Media
import imgProsthesis from '../assets/img/posts/prosthesis/prosthesis.jpg';
import imgProsthesisCad0 from '../assets/img/posts/prosthesis/cad0.jpg';
import imgProsthesisCad1 from '../assets/img/posts/prosthesis/cad1.jpg';
import imgProsthesisCad2 from '../assets/img/posts/prosthesis/cad2.jpg';
import imgProsthesisCad3 from '../assets/img/posts/prosthesis/cad3.jpg';
import imgProsthesisCad4 from '../assets/img/posts/prosthesis/cad4.jpg';
import imgProsthesisFab1 from '../assets/img/posts/prosthesis/fab1.jpg';
import imgProsthesisFab2 from '../assets/img/posts/prosthesis/fab2.jpg';
import imgProsthesisFab3 from '../assets/img/posts/prosthesis/fab3.jpg';
import imgProsthesisFab4 from '../assets/img/posts/prosthesis/fab4.jpg';
import imgProsthesisFab5 from '../assets/img/posts/prosthesis/fab5.jpg';
import imgDarwinRockets from '../assets/img/posts/darwinrockets.jpg';
import imgENIBCal1 from '../assets/img/posts/enibcal-1.jpg';
import imgENIBCal2 from '../assets/img/posts/enibcal-2.jpg';
import imgENIBCal3 from '../assets/img/posts/enibcal-3.jpg';
import videoPolyVR from '../assets/video/polyVR.mp4';
import videoEnigma from '../assets/video/enigma.mp4';

import imgRobots from '../assets/img/posts/robots/boxes.jpg';
import imgClarti from '../assets/img/posts/robots/cable1.jpg';
import imgClartiIA from '../assets/img/posts/robots/clarti-ai.svg';
import imgWinter from '../assets/img/posts/robots/winter.png';
import imgWinterIA from '../assets/img/posts/robots/winter-ai.svg';
import imgWinterBoard from '../assets/img/posts/robots/action-board.png';
import imgSummer from '../assets/img/posts/robots/summer.jpg';
import imgSummerIA from '../assets/img/posts/robots/summer-ai.svg';
import imgSummerBoard from '../assets/img/posts/robots/summer-board.png';
import imgVive from '../assets/img/posts/robots/vive.png';
import imgVive1 from '../assets/img/posts/robots/vive1.jpg';
import imgViveBoard from '../assets/img/posts/robots/vive-board.png';

const translations=[
  ["PlayDemo",{en:"Play Demo",fr:"Ouvrir la Démo"}],
  ["VisitWebsite",{en:"Visit Website",fr:"Visiter le site"}],
];
for(const [id,translation] of translations) addTranslation(id,translation);

const DarwinRocketTranslations=[
  ["EnglishExcerpt",{en:"Excerpt:",fr:"Résumé du projet en anglais:"}],
];
for(const [id,translation] of DarwinRocketTranslations) addTranslation(id,translation);
export function DarwinRocketPost(props){
  return(
    <SubSpacePost img={imgDarwinRockets}>
      <h1>Darwin Rockets</h1>
      <p><button onClick={()=>window.open("http://darwinrockets.fr/")}>{t("PlayDemo")}</button><button onClick={()=>window.open("https://github.com/Haukain/DarwinRockets")}>GitHub</button></p>
      <br/>
      <p>{t("EnglishExcerpt")}</p>
      <h2>A tool to toy with evolutionary concepts.</h2>
      <p>
        The goal of this app is to allow you to discover how <a href="https://en.wikipedia.org/wiki/Natural_selection" target="_blank">natural selection</a> can produce the fittest organisms from unfit organisms over time. <br/>
        This process is what we call <a href="https://en.wikipedia.org/wiki/Evolution" target="_blank">evolution</a>.
      </p>
      <h2>A simple model.</h2>
      <p>The app centers around vessels that we call rockets.<br/>
          Each rocket has a number of reactors to move around.<br/>
          These reactors are defined by their position on the rocket, angle, thrust, activation time and fuel quantity.<br/>
          These numbers are what describes the blueprint of a reactor like a <a href="https://en.wikipedia.org/wiki/Gene" target="_blank">gene</a> can describe a certain property of an organism.<br/>
          When it comes time to make a new generation rocket reproduce to form a baby rocket with new genes that are a mix of their parent genes but also part random.<br/>
          Not every rocket have a chance of making a baby though, only those who survive can.<br/>
          To be more likely to survive you must have a high fitness score.<br/>
          the fitness score is defined by the user and assess how the rocket perform.
      </p>
    </SubSpacePost>
  );
}

const RobotTranslations=[
  ["ClartiPost",{
    en:"ClArTi is a holonomous robot with 3 axis arm using UWB and computer-vision.",
    fr:"ClArTi est un robot holonome avec un bras 3 axes se repérant grace à de la CV et de l'UWB."}],
  ["WinterPost",{
    en:"winterbot is a closed loop differential motion robot with a single purpose arm using the IRoise system",
    fr:"WinterBot est un robot a déplacement différential en boucle fermée muni d'un bras spécifiquement conçu pour une action. Il se positionne grace au système IRoise"}],
  ["SummerPost",{
    en:"summerbot is an open loop differential motion robot with a single purpose arm. It is an assist bot for the winterbot",
    fr:"SummerBot est un robot a déplacement différential en boucle ouverte muni d'un bras spécifiquement conçu pour une action. Il est le robot secondaire du winterbot."}],
  ["VivePost",{
    en:"A low profile high accuracy IR 3D tracker working with the htc vive 1.0 base stations.",
    fr:"Un tracker 3D infrarouge compacte et précis communiquant avec les base station v1.0 du htc vive."}],
];
for(const [id,translation] of RobotTranslations) addTranslation(id,translation);
export function RobotPost(props){// TODO: finish
  return(
    <SubSpacePost img={imgRobots}>
      <h1>Robots</h1>
      <p><button onClick={()=>window.open("http://bdi-enib.fr/")}>{t("VisitWebsite")}</button></p>
      <h2 style={{textAlign:'center'}}>ClArTi</h2>
      <img src={imgClarti} style={{width:"100%"}}/>
      <p>{t("ClartiPost")}</p>
      <img src={imgClartiIA} style={{width:"100%"}}/>
      <h2 style={{textAlign:'center'}}>WinterBot</h2>
      <img src={imgWinter} style={{width:"100%"}}/>
      <p>{t("WinterPost")}</p>
      <img src={imgWinterIA} style={{width:"80%"}}/>
      <img src={imgWinterBoard} style={{width:"20%"}}/>
      <h2 style={{textAlign:'center'}}>SummerBot</h2>
      <img src={imgSummer} style={{width:"100%"}}/>
      <p>{t("SummerPost")}</p>
      <img src={imgSummerIA} style={{width:"50%"}}/>
      <img src={imgSummerBoard} style={{width:"50%"}}/>
      <h2 style={{textAlign:'center'}}>IRoise</h2>
      <img src={imgVive} style={{width:"100%"}}/>
      <p>{t("VivePost")}</p>
      <img src={imgVive1} style={{width:"50%"}}/>
      <img src={imgViveBoard} style={{width:"50%"}}/>
    </SubSpacePost>
  );
}

const ProsthesisTranslations=[
  ["ProsthesisPost",{
    en:"",
    fr:""}],
];
for(const [id,translation] of ProsthesisTranslations) addTranslation(id,translation);
export function ProsthesisPost(props){// TODO: finish
  return(
    <SubSpacePost img={imgProsthesis}>
      <h1>Prosthesis</h1>
      <p>{t("ProsthesisPost")}</p>
      <img src={imgProsthesisCad0} style={{width:"50%"}}/>
      <img src={imgProsthesisCad1} style={{width:"50%"}}/>
      <img src={imgProsthesisCad2} style={{width:"50%"}}/>
      <img src={imgProsthesisCad3} style={{width:"50%"}}/>
      <img src={imgProsthesisCad4} style={{width:"100%"}}/>
      <br/>
      <img src={imgProsthesisFab1} style={{width:"50%"}}/>
      <img src={imgProsthesisFab2} style={{width:"50%"}}/>
      <img src={imgProsthesisFab3} style={{width:"50%"}}/>
      <img src={imgProsthesisFab5} style={{width:"50%"}}/>
      <img src={imgProsthesisFab4} style={{width:"100%"}}/>
    </SubSpacePost>
  );
}

const EnibCalTranslations=[
  ["EnibCalPost",{
    en:"ENIB's unofficial calendar. Used by more than a hundred people. It can be used to display upcomming courses and also manage group events and homeworks. It has a variety of themes and options to suit the needs of every students.",
    fr:"Calendrier non officiel de l'ENIB. Utilisé par plus de 100 utilisateurs. Il gère le planning et les devoirs et possède une grande variété de thèmes afin de satisfaire tous les utilisateurs."}],
];
for(const [id,translation] of EnibCalTranslations) addTranslation(id,translation);
export function EnibCalPost(props){// TODO: finish
  return(
    <SubSpacePost img={imgENIBCal3}>
      <h1>EnibCal</h1>
      <p><button onClick={()=>window.open("https://github.com/titaniumbaryum/enibcal")}>GitHub</button></p>
      <p>{t("EnibCalPost")}</p>
      <img src={imgENIBCal1} style={{width:"50%"}}/><img src={imgENIBCal2} style={{width:"50%"}}/><img src={imgENIBCal3} style={{width:"50%"}}/>
    </SubSpacePost>
  );
}

const PolyVRTranslations=[
  ["PolyVRPost",{
    en:"A mobile VR game for cardboard with minimal graphics and calming soundtrack. The project is currently on hold but will release soon.",
    fr:"Un jeu mobile VR pour le cardboard avec des graphismes minimalistes et une bande son reposante. Le projet est actuellement en pause mais sera disponible bientôt."}],
];
for(const [id,translation] of PolyVRTranslations) addTranslation(id,translation);
export function PolyVRPost(props){// TODO: finish
  return(
    <SubSpacePost video={videoPolyVR}>
      <h1>PolyVR</h1>
      <p>{t("PolyVRPost")}</p>
    </SubSpacePost>
  );
}

const EnigmaTranslations=[
  ["EnigmaPost",{
    en:"A point&click made with three.js displaying various shader and blend mode tests. It was originally made for a creativity contest a few years back. You can play it live in your browser or watch the walkthrough video.",
    fr:"Un jeu point&click fait avec three.js contenant divers tests sur les shader et les modes de fusion. Cette démo a été créée pour un concours créatif. Vous pouvez l'essayer dans votre navigateur ou regarder la vidéo walkthrough."}],
];
for(const [id,translation] of EnigmaTranslations) addTranslation(id,translation);
export function EnigmaPost(props){// TODO: finish
  return(
    <SubSpacePost video={videoEnigma}>
      <h1>point&click webgl</h1>
      <p><button onClick={()=>window.open("http://titouan.eu/projects/webnigma/")}>{t("PlayDemo")}</button><button onClick={()=>window.open("https://www.youtube.com/watch?v=-zu7sRHLFps")}>Walkthrough</button></p>
      <p>{t("EnigmaPost")}</p>
    </SubSpacePost>
  );
}
