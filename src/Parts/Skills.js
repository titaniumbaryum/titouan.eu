import React from 'react';
import {red,cyan,yellow,orange,text,palette} from '../colors';
import t, {addTranslation} from '../translation';

//Blocks
import RowBlock from '../Blocks/Columns/RowBlock';
import Column from '../Blocks/Columns/Column';

//Bits
import PegHolder from '../Bits/Pegs/PegHolder';
import Peg from '../Bits/Pegs/Peg';
import SubPeg from '../Bits/Pegs/SubPeg';

//Icons
import { mdiMap } from '@mdi/js'
import { mdiCrown } from '@mdi/js'
import { mdiLanguageJavascript } from '@mdi/js'
import { mdiAngular } from '@mdi/js'
import { mdiReact } from '@mdi/js'
import { mdiVideo3d } from '@mdi/js'
import { mdiPrinter3d } from '@mdi/js'
import { mdiNodejs } from '@mdi/js'
import { mdiCordova } from '@mdi/js'
import { mdiLanguagePhp } from '@mdi/js'
import { mdiWordpress } from '@mdi/js'
import { mdiSymfony } from '@mdi/js'
import { mdiDatabase } from '@mdi/js'
import { mdiMapMarker } from '@mdi/js'
import { mdiLanguageCpp } from '@mdi/js'
import { mdiRobot } from '@mdi/js'
import { mdiFaceRecognition } from '@mdi/js'
import { mdiWeb } from '@mdi/js'
import { mdiLanguagePython } from '@mdi/js'
import { mdiBrain } from '@mdi/js'
import { mdiGpu } from '@mdi/js'
import { mdiLedOn } from '@mdi/js'
import { mdiMatrix } from '@mdi/js'
import { mdiChip } from '@mdi/js'
import { mdiKey } from '@mdi/js'
import { mdiUsb } from '@mdi/js'
import { mdiAdobe } from '@mdi/js'
import { mdiVideo } from '@mdi/js'
import { mdiCamera } from '@mdi/js'
import { mdiVectorTriangle } from '@mdi/js'
import { mdiFileWordBox } from '@mdi/js'
import { mdiCardBulleted } from '@mdi/js'
import { mdiBorderColor } from '@mdi/js'
import { mdiMovieRoll } from '@mdi/js'

//translations
const translations=[
  ["SpokenLanguages",{en:"Spoken Languages",fr:"Langues"}],
  ["French",{en:"French-C2",fr:"Français-C2"}],
  ["English",{en:"English-C1",fr:"Anglais-C1"}],
  ["Software",{en:"Software",fr:"Bureautique"}],
  ["AdobeSuite",{en:"Adobe Suite",fr:"Suite Adobe"}],
  ["Vector",{en:"Vector",fr:"Vectoriel"}],
  ["OfficeSuite",{en:"Office Suite",fr:"Suite Office"}],
  ["ProgrammingLanguages",{en:"Programming languages",fr:"Programmation"}],
  ["Robotics",{en:"Robotics",fr:"Robotique"}],
  ["Electronics",{en:"Electronics",fr:"Electronique"}],
  ["Design",{en:"Design",fr:"Conception"}],
  ["Routing",{en:"Routing",fr:"Routage"}],
];
for(const [id,translation] of translations) addTranslation(id,translation);

export default function Skills(props){
  return(
    <RowBlock anchor={props.anchor} background={palette.dark} color={text.light}>
      <Column background={palette.off} padding="20px 0">
        <div style={{width:"100%",maxWidth:"400px",margin:"auto"}}>
          <h2 style={{textAlign:"center"}}>{t("SpokenLanguages")}</h2>
          <PegHolder>
            <Peg color={palette.accentLight} icon={mdiMap} description={t("French")} percentage={100}/>
            <Peg color={palette.accentLight} icon={mdiCrown} description={t("English")} percentage={83}/>
          </PegHolder>
          <h2 style={{textAlign:"center"}}>{t("Software")}</h2>
          <PegHolder>
            <Peg color={palette.accent} icon={mdiAdobe} description={t("AdobeSuite")}  percentage={90}>
              <SubPeg icon={mdiVideo} text="Video/FX"/>
              <SubPeg icon={mdiCamera} text="Photo"/>
              <SubPeg icon={mdiVectorTriangle} text={t("Vector")}/>
            </Peg>
            <Peg color={palette.accent} icon={mdiMovieRoll} description="Cinema 4D" percentage={20}/>
            <Peg color={palette.accent} icon={mdiPrinter3d} description="Solidworks/Catia" percentage={70}/>
            <Peg color={palette.accent} icon={mdiFileWordBox} description={t("OfficeSuite")} percentage={80}/>
          </PegHolder>
        </div>
      </Column>
      <Column padding="20px 0">
        <div style={{width:"100%",maxWidth:"400px",margin:"auto"}}>
          <h2 style={{textAlign:"center"}}>{t("ProgrammingLanguages")}</h2>
          <PegHolder>
            <Peg color={palette.off} icon={mdiLanguageJavascript} description="Javascript" percentage={90}>
              <SubPeg icon={mdiAngular} text="Angular 6"/>
              <SubPeg icon={mdiReact} text="React (Web/Native)"/>
              <SubPeg icon={mdiVideo3d} text="WebGL"/>
              <SubPeg icon={mdiNodejs} text="NodeJS (Express)"/>
              <SubPeg icon={mdiCordova} text="Cordova"/>
            </Peg>
            <Peg color={palette.off} icon={mdiLanguageCpp} description="C/C++" percentage={80}>
              <SubPeg icon={mdiRobot} text={t("Robotics")}/>
              <SubPeg icon={mdiFaceRecognition} text="CV"/>
              <SubPeg icon={mdiUsb} text="USB"/>
              <SubPeg icon={mdiChip} text="STM32"/>
            </Peg>
            <Peg color={palette.off} icon={mdiLanguagePython} description="Python" percentage={90}>
              <SubPeg icon={mdiLedOn} text="RPI/IOT"/>
              <SubPeg icon={mdiGpu} text="Cuda"/>
              <SubPeg icon={mdiBrain} text="ML/Pytorch"/>
              <SubPeg icon={mdiMatrix} text="Numpy"/>
            </Peg>
            <Peg color={palette.off} icon={mdiLanguagePhp} description="PHP" percentage={70}>
              <SubPeg icon={mdiWordpress} text="Wordpress"/>
              <SubPeg icon={mdiSymfony} text="Symphony"/>
            </Peg>
            <Peg color={palette.off} icon={mdiDatabase} description="MySQL/MongoDB" percentage={50}>
              <SubPeg icon={mdiMapMarker} text="Geodata"/>
              <SubPeg icon={mdiKey} text="Encryption"/>
            </Peg>
            <Peg color={palette.off} icon={mdiChip} description="VHDL" percentage={30}/>
          </PegHolder>
          <h2 style={{textAlign:"center"}}>{t("Electronics")}</h2>
          <PegHolder>
            <Peg color={palette.light} icon={mdiBorderColor} description={t("Design")} percentage={30}/>
            <Peg color={palette.light} icon={mdiCardBulleted} description={t("Routing")} percentage={40}/>
          </PegHolder>
        </div>
      </Column>
    </RowBlock>
  );
}
