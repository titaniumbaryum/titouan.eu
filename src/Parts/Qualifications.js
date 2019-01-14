import React from 'react';
import {palette,orange,text} from '../colors';
import t, {addTranslation} from '../translation';

//Blocks
import RowBlock from '../Blocks/Columns/RowBlock';
import Column from '../Blocks/Columns/Column';

//Bits
import CardHolder from '../Bits/Card/CardHolder';
import Card from '../Bits/Card/Card';

//Media
import enib from '../assets/img/logos/enib.png';
import artmen from '../assets/img/logos/art-men.svg';
import eca from '../assets/img/logos/eca.png';
import _3douest from '../assets/img/logos/3douest.png';

//translations
const translations=[
  ["Education",{en:"Education",fr:"Formation"}],
  ["References",{en:"References",fr:"Expériences professionnelles"}],
  ["months",{en:"months",fr:"mois"}],
  ["month",{en:"month",fr:"mois"}],
  ["ENIB",{en:"ENIB: french general engineering school",fr:"Ecole Nationale d'Ingénieur de Brest"}],
  ["ENIBProgress",{en:"4 years /5",fr:"4 ans /5"}],
  ["ENIBDesc",{en:"Working on it.",fr:"En cours d'obtention"}],
  ["artmen",{en:"Programming / Video editing",fr:"Programmation / Montage vidéo"}],
  ["artmenDesc",{en:(<div>
    Websites creation<br/>
    Video editing and animatics<br/>
    Mobile App development
  </div>),fr:(<div>
    Création de sites internet<br/>
    Montage et effets vidéo<br/>
    Création d’applications web & mobiles
  </div>)}],
  ["eca",{en:"Data treatment script creation",fr:"Création de script de traitement de données"}],
  ["ecaDesc",{en:"Excel scripting to optimise order of parts unsuported by the ERP",fr:"Création de filtres d’intercroisement Excel afin d’optimiser les achats de pièces non prises en charge par l’ERP"}],
  ["3dOuest",{en:"USB Serial Implementation",fr:"Implémentation USB Serial"}],
  ["3dOuestDesc",{en:(<div>
    Exploration of the USB capabilities of the freescale kinetis range<br/>
    Creation of a USB Bulk benchmark software
  </div>),fr:(<div>
    Exploration des capacités USB de la gamme freescale kinetis<br/>
    Création d’un logiciel de benchmark pour l’échange de paquet bulk USB
  </div>)}],
];
for(const [id,translation] of translations) addTranslation(id,translation);

export default function Experiences(props){
  return(
    <RowBlock anchor={props.anchor} background={palette.dark} color={text.light}>
      <Column padding="20px">
      <h2>{t("Education")}:</h2>
      <CardHolder>
        <Card year="2015" title={t("ENIB")} progress={70} progressText={t("ENIBProgress")} logo={enib} background={palette.off} accent={palette.accentLight}>
          {t("ENIBDesc")}
        </Card>
      </CardHolder>
      <h2>{t("References")}:</h2>
      <CardHolder>
        <Card year="2015" title={t("artmen")} progress={80} progressText={`3*3 ${t("months")}`} logo={artmen} background={palette.light} accent={palette.accent}>
          {t("artmenDesc")}
        </Card>
        <Card year="2017" title={t("eca")} progress={10} progressText={`1 ${t("month")}`} logo={eca} background={palette.light} accent={palette.accent}>
          {t("ecaDesc")}
        </Card>
        <Card year="2015" title={t("3dOuest")} progress={10} progressText={`1 ${t("month")}`} logo={_3douest} background={palette.light} accent={palette.accent}>
          {t("3dOuestDesc")}
        </Card>
      </CardHolder>
      </Column>
    </RowBlock>
  );
}
