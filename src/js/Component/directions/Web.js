import React from 'react';


export default class Layout extends React.Component{
    constructor(){
        super();
    }
    render(){
      var vedTasks = [
        "Разработка сайта если уже есть дизайн сайта",
        "Разработка сайта с нуля",
        "Разработка мобильных приложений при наличии дизайна",
        "Разработка мобильных приложений с нуля"
      ];
      var key =0;
      return(
          <section class="left departments">
            <div>
            <h2>Отдел WEB-программирования</h2>
            <img src="/img/big/web-sm.jpg"/>
            <ul>
              {vedTasks.map((i)=>{return <li key={key++}> {i} </li>})}
            </ul>
            <p>Подробнее узнайте в нашем <a href="/prices/web.pdf">прайлисте</a></p>
            </div>
            <span class="back"><a href="#"><img src="/img/home.png"/></a></span>
          </section>
      )
    }
}
