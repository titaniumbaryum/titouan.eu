import React, {Component} from 'react';


export default class Card extends Component{
  constructor(props){
    super(props);
    this.state={open:false}
  }
  render(){
    console.log(this.props.children)
    return (
      <div className="Card" style={{background:this.props.background}}>
        <div className="Card-header">
          <div className="Card-header-year" style={{color:this.props.accent}}>{this.props.year}</div>
          <div className="Card-header-middle">
            <div className="Card-header-title">{this.props.title}</div>
            <div className="Card-header-progress">
              <div className="Card-header-progress-bar" style={{width:`${this.props.progress}%`,background:this.props.accent}}></div>
              <div className="Card-header-progress-text" style={{color:this.props.accent}}>{this.props.progressText}</div>
            </div>
          </div>
          <img className="Card-header-logo" src={this.props.logo}/>
        </div>
        {this.state.open?
          <div className="Card-content">{this.props.children}</div>:
          <div className="Card-content">{this.props.children}</div>
        }
      </div>
    );
  }
}
