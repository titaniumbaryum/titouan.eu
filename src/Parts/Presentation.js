import React from 'react';
import MdiIcon from '@mdi/react';
import t, {addTranslation} from '../translation';
import {palette,text} from '../colors';

//Blocks
import RowBlock from '../Blocks/Columns/RowBlock';
import Column from '../Blocks/Columns/Column';

//Bits
import Text from '../Bits/Text/Text';

//Media
import portrait from '../assets/img/portrait2.jpg';

//Icons
import { mdiAngular,mdiReact,mdiLinkedinBox,mdiGithubBox } from '@mdi/js';
function Icon({src,title,size="15px",onClick=()=>{}}){
  return(<a title={title} onClick={onClick}><MdiIcon path={src} size={size} color={text.light}/></a>);
}

//translations
const translations=[
  ["PresentationText",{en:(
    <Text>
      <h1>Titouan Baillon</h1>
      <p>French engineering student at ENIB, with interest in AR/VR technologies, education, ergonomy and robotics.<br/>
        Able to use the latest web technologies (ES 2018, <Icon src={mdiAngular} title="Angular 6"/><Icon src={mdiReact} title="React/React native"/>, node.js).<br/>
        Participated to <a href="http://www.eurobot.org/" target="_blank">Eurobot</a> at the national level and qualified to the european level once.</p>
    </Text>
  ),fr:(
    <Text>
      <h1>Titouan Baillon</h1>
      <p>Élève-ingénieur ENIB, passionné par les technologies VR/AR, l'éducation, l'ergonomie et la robotique.<br/>
        Maîtrise les technologies WEB modernes (ES 2018, <Icon src={mdiAngular} title="Angular 6"/><Icon src={mdiReact} title="React/React native"/>, node.js).<br/>
        A participé 3 fois à la <a href="https://www.coupederobotique.fr/" target="_blank">coupe de France de robotique</a> et s'est qualifié une fois à <a href="http://www.eurobot.org/" target="_blank">Eurobot</a>.</p>
    </Text>
  )}],
];
for(const [id,translation] of translations) addTranslation(id,translation);

export default function Presentation(props){
  return(
    <RowBlock anchor={props.anchor} background={palette.dark} color={text.light}>
      <Column>
        <img src={portrait} style={{width:"100%",height:"100%"}}/>
      </Column>
      <Column background={palette.light} padding="20px" centered={true}>
        {t("PresentationText")}
        <p>
          <Icon src={mdiLinkedinBox} title="LinkedIn" size="50px" onClick={()=>window.open("https://fr.linkedin.com/in/titouan-baillon")}/>
          <Icon src={mdiGithubBox} title="GitHub" size="50px" onClick={()=>window.open("https://github.com/titaniumbaryum")}/>
        </p>
      </Column>
    </RowBlock>
  );
}
