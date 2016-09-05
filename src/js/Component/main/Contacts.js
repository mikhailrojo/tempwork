import React from 'react';


export default class Contacts extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
          <div class="innerLeft">
            <p>
            <strong>Бюро "Нужные люди"</strong>:<br />
            Санкт-Петербург,ул Елейная 12 <br />
            Тел: +7-921-311-98-82 <br />
            Email: tempwork@tempwork.ru <br />
            </p>
            <img src="/img/map.png" />
          </div>
        )
    }
}
