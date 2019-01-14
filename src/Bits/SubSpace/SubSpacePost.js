import React from 'react';

export default function SubSpacePost(props){
  return(
    <div className="SubSpacePost">
      {props.video?<video controls src={props.video} poster={props.img}/>:(props.img?<img src={props.img}/>:null)}
      <div className="SubSpacePost-content">
        {props.children}
      </div>
    </div>
  );
}
