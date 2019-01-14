import React from 'react';
import Icon from '@mdi/react';
import SubPeg from './SubPeg'

export default function Peg(props){
  let subPegs=[];
  if(props.children){
    let children = props.children;
    if(!(children instanceof Array)) children = [children];
    let i=0;
    for(let child of children){
      if(child.props && child.props.icon) subPegs.push(<SubPeg icon={child.props.icon} text={child.props.text} color={props.color} angle={i++/children.length*Math.PI*2-Math.PI/2}/>);
    }
  }
  let clipPath = "polygon(50% 50%, 50% 0%,";
  if(props.percentage){
    //in order to create a proper radial progress with a clip path, we have to add the frame corner when they are in the filled area
    const corners =["110% -10%,","110% 110%,","-10% 110%,","-10% -10%,"];//upper right,lower right,lower left,upper left
    for(let i=0;i<4;i++) if(props.percentage>100/8+100/4*i) clipPath += corners[i];
    const angle = props.percentage/100*2*Math.PI-Math.PI/2;// WARNING: since y increase as you go down the rotation is clockwise but start a x=0 y=1
    clipPath += `${50+Math.cos(angle)*100}% ${50+Math.sin(angle)*100}%)`;
  }
  return (
    <div className="Peg">
      <div className="Peg-Circle-Holder">
        {props.percentage?<div className="Peg-progress" style={{clipPath}}></div>:null}
        <div className="Peg-SubPegs">{subPegs}</div>
        <div className="Peg-Circle" style={{background:props.color}}>
          <Icon path={props.icon} color="white" size="30px"/>
        </div>
      </div>
      <div className="Peg-Description" /*style={{color:props.color}}*/>{props.description}</div>
    </div>
  );
}
