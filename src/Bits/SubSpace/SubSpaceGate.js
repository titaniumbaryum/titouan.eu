import React from 'react';
import "./SubSpace.css";
import { mdiClose } from '@mdi/js';
import Icon from '@mdi/react';

export default function SubSpaceGate(props){
  return(
    props.post?<div className="SubSpaceGate">
      <div className="SubSpaceGate-bg" onClick={props.onClose}></div>
      <div className="SubSpaceGate-popup" style={{background:props.background,color:props.color}}>
        <div className="SubSpaceGate-close" onClick={props.onClose}><Icon path={mdiClose} color={props.color} size="30px"/></div>
        {props.post}
        </div>
      </div>:null
  );
}
