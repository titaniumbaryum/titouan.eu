import React from 'react';
import './BlockWrapper.css';

export default function BlockWrapper(props){
  return (
    <div className={"BlockWrapper "+props.className} id={props.anchor} style={{background:props.background,color:props.color}}>
      <div className={
        "BlockWrapper-inner"
        +(props.fullWidth?" BlockWrapper-inner-fullWidth":"")
        +(props.noMargin?" BlockWrapper-inner-noMargin":"")
      }>
        {props.children}
      </div>
    </div>
  );
}
