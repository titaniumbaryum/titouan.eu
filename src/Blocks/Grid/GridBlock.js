import React from 'react';
import './GridBlock.css';
import BlockWrapper from '../Generic/BlockWrapper';

export default function GridBlock(props){
  return (
    <BlockWrapper fullWidth={true} noMargin={true} anchor={props.anchor} className="GridBlock">
      {props.children}
    </BlockWrapper>
  );
}
