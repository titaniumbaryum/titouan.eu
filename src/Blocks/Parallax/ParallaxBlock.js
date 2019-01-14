import React from 'react';
import './ParallaxBlock.css';
import BlockWrapper from '../Generic/BlockWrapper';

export default function ParallaxBlock(props){
  return (
    <BlockWrapper fullWidth={true} noMargin={true} anchor={props.anchor} className="ParallaxBlock">
      <div className="ParallaxBlock-Image" style={{backgroundImage:`url(${props.img})`}}/>
      <div className="ParallaxBlock-Text" style={{color:props.textColor}}>{props.text}</div>
    </BlockWrapper>
  );
}
