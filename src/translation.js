import React, { Component } from 'react';
const translators=[];
let lang="";
const translations={};
export class Translator extends Component{
  constructor(props){
    super(props);
    translators.push(this);
  }
  render(){
    return(<div>{this.props.children}</div>);
  }
  changeLang(){
    this.props.onTranslate();
    this.forceUpdate();
  }
}
export function setLanguage(l){
  lang=l;
  for(const t of translators){
    t.changeLang();
  }
}
export function addTranslation(id,t){
  translations[id]=t;
}
export default function translate(id){
  if(!translations[id]) return id.toUpperCase();
  if(!translations[id][lang])return translations[id][Object.keys(translations[id])[0]];
  return translations[id][lang];
}
