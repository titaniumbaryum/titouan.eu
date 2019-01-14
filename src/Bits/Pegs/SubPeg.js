import React from 'react';
import Icon from '@mdi/react';

export default function SubPeg(props){
  const dist = 100;
  return (
    <a title={props.text}><div className="SubPeg" style={{background:props.color,left:`${50+Math.cos(props.angle)*dist}%`,top:`${50+Math.sin(props.angle)*dist}%`}}>
      <Icon path={props.icon} color="white" size="15px"/>
    </div></a>
  );
}
