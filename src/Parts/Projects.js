import React, { Component } from 'react';
import {palette,text} from '../colors';
import t, {addTranslation} from '../translation';

//Blocks
import GridBlock from '../Blocks/Grid/GridBlock';
import GridItem from '../Blocks/Grid/GridItem';
//Bits
import SubSpaceGate from '../Bits/SubSpace/SubSpaceGate';
//Posts
import {DarwinRocketPost,EnibCalPost,PolyVRPost,EnigmaPost} from './Projects.posts';

//Media
import gridMiniBots from '../assets/img/grid/miniBots.jpg';
import gridDarwinRockets from '../assets/img/grid/darwinRockets.jpg';
import gridEnibcal from '../assets/img/grid/enibcal.jpg';
import gridEnigma from '../assets/img/grid/enigma.jpg';
import gridFilm from '../assets/img/grid/film.jpg';
import gridMinimalVR from '../assets/img/grid/minimalVR.jpg';
import gridPanoVR from '../assets/img/grid/panoVR.jpg';
import gridRobot from '../assets/img/grid/robot.jpg';
import gridSplatter from '../assets/img/grid/splatter.jpg';
import gridVintageVR from '../assets/img/grid/vintageVR.jpg';
import gridPong from '../assets/img/grid/pong.jpg';

//Translations
const translations=[
  ["LearnMore",{en:"More",fr:"Plus"}],
  ["Launch",{en:"Launch",fr:"Lancer"}],
  ["Play",{en:"Play",fr:"Jouer"}],
  ["Visit",{en:"Visit",fr:"Visiter"}],

  ["MinibotsDesc",{
    en:"Educative game to learn the bases of logic and programming by creating a node mesh.",
    fr:"Jeu éducatif pour apprendre les bases de la logique et du code via un réseau de nodes."}],
  ["DarwinRocketsDesc",{
    en:"Educative App on darwinian evolution ... with rockets.",
    fr:"Application éducative sur l'évolution darwinienne ... avec des fusées."}],
  ["EnibCalDesc",{
    en:"ENIB's unofficial calendar. Used by more than a hundred people.",
    fr:"Calendrier non officiel de l'ENIB. Utilisé par plus de 100 utilisateurs."}],
  ["EnigmaDesc",{
    en:"3d point&click demo made with three.js",
    fr:"Démo point&click 3d fait avec three.js"}],
  ["ArenibDesc",{
    en:"Took part in the french robotics cup, became president and obtained the jury's price.",
    fr:"Participation à la coupe de robotique. Présidence de l'association. Obtention du prix du jury."}],
  ["VintageVRDesc",{
    en:"Numerisation of stereoscopic film plates to be watched on a Google Cardboard.",
    fr:"Numérisation de plaques stéréoscopiques pour être regardées sur un Cardboard."}],
  ["PolyVRDesc",{
    en:"Small mobile VR game in WebGL.",
    fr:"Petit jeu pour mobile et Cardboard fait en webgl."}],
  ["PongDesc",{
    en:"Imposed project with an added efficient & advanced 2d collision system.",
    fr:"Projet imposé avec ajout d'un système de collision de solides réaliste et optimisé."}],
  ["FilmDesc",{
    en:"Student Film, obtained the first price in the competition. (storyboard, lighting, edit, FX)",
    fr:"Film réalisé en 3ème année à l'ENIB. A obtenu le prix meilleur film du concours interne. (storyboard, lighting, montage, FX)"}],
  ["PanoVRDesc",{
    en:"Cardboard VR Virtualtour Engine.",
    fr:"Moteur de Visite Virtuelle en VR Cardboard."}],
  ["SplatterDesc",{
    en:"Small drop-painting App.",
    fr:"Petite App de drop-painting."}],
];
for(const [id,translation] of translations) addTranslation(id,translation);

export default class Projects extends Component{
  constructor(props){
    super(props);
    this.state={post:null};
    this.setPost = this.setPost.bind(this);
    this.popup = this.popup.bind(this);
  }
  popup(url){
    window.open(url);
  }
  setPost(post){
    this.setState((s,p)=>({post}));
  }
  render(){
    return (
      <div>
        <SubSpaceGate post={this.state.post} onClose={()=>this.setPost(null)} background={palette.dark} color={text.light}/>
        <GridBlock anchor={this.props.anchor}>
          <GridItem
            color="#f0932b"
            background={gridMiniBots}
            title="Minibots"
            tags={["react","education","visual scripting"]}
            callToAction={t("Play")}
            onClick={()=>this.popup("http://minibots.titouan.eu")}>
            {t("MinibotsDesc")}
          </GridItem>
          <GridItem
            color="#d65b73"
            background={gridDarwinRockets}
            title="DarwinRockets"
            tags={["vanillaJS","workers","education","genetic algorithms"]}
            callToAction={t("LearnMore")}
            onClick={()=>{this.setPost(<DarwinRocketPost/>)}}>
            {t("DarwinRocketsDesc")}
          </GridItem>
          <GridItem
            color="rgb(120, 200, 150)"
            background={gridEnibcal}
            title="EnibCal"
            tags={["angular 5","nodeJS","express","mySQL","downloadable webapp"]}
            callToAction={t("LearnMore")}
            onClick={()=>{this.setPost(<EnibCalPost/>)}}>
            {t("EnibCalDesc")}
          </GridItem>
          <GridItem
            color="#25CCF7"
            background={gridEnigma}
            title="point&click webgl"
            tags={["threeJS","game"]}
            callToAction={t("LearnMore")}
            onClick={()=>this.setPost(<EnigmaPost/>)}>
            {t("EnigmaDesc")}
          </GridItem>
          <GridItem
            color="rgb(70, 250, 70)"
            background={gridRobot}
            whiteTitle
            title="ARENIB"
            tags={["C++","nodeJS","Arduino","VHDL","robotics","Pathfinding","control loops","computer vision","retro-engineering"]}
            callToAction={t("Visit")}
            onClick={()=>this.popup("http://arenib.com")}>
            {t("ArenibDesc")}
          </GridItem>
          <GridItem
            color="rgb(200, 200, 0)"
            background={gridVintageVR}
            title="Vintage VR"
            tags={["threeJS","cardboard"]}
            callToAction={t("Launch")}
            onClick={()=>this.popup("http://titouan.eu/projects/vintagevr/")}>
            {t("VintageVRDesc")}
          </GridItem>
          <GridItem
            color="rgb(255, 50, 200)"
            background={gridMinimalVR}
            title="PolyVR"
            tags={["threeJS","cardboard","game"]}
            callToAction={t("LearnMore")}
            onClick={()=>{this.setPost(<PolyVRPost/>)}}>
            {t("PolyVRDesc")}
          </GridItem>
          <GridItem
            color="rgb(0, 0, 0)"
            background={gridPong}
            title='"Pong"'
            tags={["vanillaJS","collisions"]}
            callToAction="Github"
            onClick={()=>this.popup("https://github.com/Haukain/pong")}>
            {t("PongDesc")}
          </GridItem>
          <GridItem
            color="rgb(190, 0, 0)"
            background={gridFilm}
            whiteTitle
            title="Film étudiant"
            callToAction={t("Play")}
            onClick={()=>this.popup("https://www.youtube.com/watch?v=pVKcnVkYOBc&feature=youtu.be")}>
            {t("FilmDesc")}
          </GridItem>
          <GridItem
            color="purple"
            background={gridPanoVR}
            whiteTitle
            title="VR pano"
            tags={["threeJS","cardboard"]}
            callToAction={t("Launch")}
            onClick={()=>this.popup("http://titouan.eu/projects/vrpano/")}>
            {t("PanoVRDesc")}
          </GridItem>
          <GridItem
            color="rgb(100, 100, 220)"
            background={gridSplatter}
            title="Pollock"
            tags={["vanillaJS"]}
            callToAction={t("Launch")}
            onClick={()=>this.popup("http://titouan.eu/projects/splatter/")}>
            {t("SplatterDesc")}
          </GridItem>
        </GridBlock>
      </div>
    );
  }
}
