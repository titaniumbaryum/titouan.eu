import React from 'react';
import "./CardHolder.css";

export default function CardHolder(props){
  return (
    <div className="CardHolder">
      {props.children}
    </div>
  );
}
