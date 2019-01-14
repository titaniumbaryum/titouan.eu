import React, { Component } from 'react';
import {palette,text} from '../colors';

//Blocks
import ParallaxBlock from '../Blocks/Parallax/ParallaxBlock';

//Media
import boxes from '../assets/img/parallax/boxes.jpg';
import film from '../assets/img/parallax/film.jpg';
import cable from '../assets/img/parallax/cable1.jpg';

export function BoxesParallax(props) {
  return (
    <ParallaxBlock img={boxes} textColor={text.light} text={props.text} anchor={props.anchor}/>
  );
}
export function FilmParallax(props) {
  return (
    <ParallaxBlock img={film} textColor={text.light} text={props.text} anchor={props.anchor}/>
  );
}
export function CableParallax(props) {
  return (
    <ParallaxBlock img={cable} textColor={text.light} text={props.text} anchor={props.anchor}/>
  );
}
