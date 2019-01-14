import React from 'react';
import MdiIcon from '@mdi/react';
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

export default function Footer(props){
  return(
    <RowBlock anchor={props.anchor} background={palette.dark} color={text.light}>
      <Column padding="20px">
        <a onClick={()=>window.open("mailto:"+["gmail.com","titouan.baillon"].reverse().join("@"))}>E-mail: titouan.baillon<Icon src={mdiAt} title="fake @ to avoid spam"/>gmail.com</a><br/>
        <a onClick={()=>window.open("tel:"+["+33","6","29","10","01","08"].join(""))}>Phone: +33(0)6 29 10 01 08</a><br/>
        <a onClick={()=>window.open("https://fr.linkedin.com/in/titouan-baillon")}>LinkedIn: titouan-baillon</a><br/>
      </Column>
      <Column padding="20px">
        Made with ❤ and React.<br/>
        © 2019 Titouan Baillon,<br/>
        all right reserved.<br/>
      </Column>
    </RowBlock>
  );
}
