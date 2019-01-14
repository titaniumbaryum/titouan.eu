import React from 'react';
import './PegHolder.css';

export default function PegHolder(props){
  return (
    <div className={"PegHolder PegHolder-"+(props.columns||2)}>
      {props.children}
    </div>
  );
}
