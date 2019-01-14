import React from 'react';

export default function GridItem(props){
  return (
    <div className="GridItem" style={{backgroundImage:`url(${props.background})`,backgroundColor:props.color}}>
      <div className="GridItem-inner">
        <h1 className={props.whiteTitle?"GridItem-whiteTitle":""}style={{color:props.color}}>{props.title}</h1>
        <div className="GridItem-hoverReveal">
          <p>{props.children}</p>
          {(props.tags?(<div className="GridItem-tags">{props.tags.map(t=>(<div>#{t}</div>))}</div>):null)}
          {(props.callToAction&&props.onClick)?(<button onClick={props.onClick}>{props.callToAction}</button>):null}
        </div>
      </div>
    </div>
  );
}
