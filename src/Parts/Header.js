import React from 'react';
import MdiIcon from '@mdi/react';
import {setLanguage} from '../translation';
import {palette,text} from '../colors';

//Blocks
import RowBlock from '../Blocks/Columns/RowBlock';
import Column from '../Blocks/Columns/Column';

//Bits
import Text from '../Bits/Text/Text';

//Media
import portrait from '../assets/img/portrait2.jpg';

//Icons
import { mdiAt } from '@mdi/js';
function Icon({src,title}){
  return(<a title={title}><MdiIcon path={src} size="15px" color={text.light}/></a>);
}

export default function Header(props){
  return(
    <RowBlock anchor={props.anchor} background={text.dark} color={text.light}>
      <Column padding="5px">
        <a onClick={()=>setLanguage("en")} style={{margin:"5px"}}>En</a>
        <a onClick={()=>setLanguage("fr")} style={{margin:"5px"}}>Fr</a>
      </Column>
    </RowBlock>
  );
}
