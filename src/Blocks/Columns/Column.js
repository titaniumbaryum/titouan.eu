import React from 'react';

export default function Column(props){
  let children = props.children;
  if(props.centered){
    // style={{padding:props.padding}}
    children = (
      <div>
        {props.children}
      </div>
    );
  }
  return (
    <div className={"Column"+(props.centered?" Column-VCenter":"")} style={{background:props.background,color:props.color,padding:props.padding}}>
      {children}
    </div>
  );
}
