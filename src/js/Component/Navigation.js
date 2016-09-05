import React from 'react';
require("./../../css/Navigation.scss");
import WhoAreWe from './main/WhoAreWe';
import OurObjectives from './main/OurObjectives';
import WhyUs from './main/WhyUs';
import Contacts from './main/Contacts';

export default class Navigation extends React.Component{
    constructor(){
        super();
        this.state= {
          chosen: 'Бюро "Нужные люди"'
        }
    }
    showProperMenu(menu){

      switch(menu){
        case 'Бюро "Нужные люди"':
          return (<WhoAreWe />);
          break;
        case "Почему мы":
          return (<WhyUs />);
          break;
        case "Наши цели":
          return (<OurObjectives />);
          break;
        case "Контакты":
          return (<Contacts />);
          break;
      }

    }
    changeNavigation(nav){
      if(nav.target.tagName === "A" || "IMG" ){
        this.setState({
          chosen: nav.target.innerText || 'Бюро "Нужные люди"'
        });
      }
    }
    render(){
        return(
            <div>
              <nav onClick={this.changeNavigation.bind(this)}>
                <a href="#"><img src="/img/logo2.png" /></a>

                <div>
                <span><a class={this.state.chosen == "Наши цели"? "active" : ""} href="#">Наши цели</a></span>
                <span><a class={this.state.chosen == "Почему мы"? "active" : ""} href="#">Почему мы</a></span>
                <span><a class={this.state.chosen == "Контакты"? "active" : ""} href ="#">Контакты</a></span>
                </div>
              </nav>
              {this.showProperMenu(this.state.chosen)}
            </div>
        )
    }
}
