import React from 'react';
import './RowBlock.css';
import BlockWrapper from '../Generic/BlockWrapper';

export default function RowBlock(props){
  return (
    <BlockWrapper fullWidth={props.fullWidth} noMargin={true} anchor={props.anchor} background={props.background} color={props.color} className="RowBlock">
      {props.children}
    </BlockWrapper>
  );
}
