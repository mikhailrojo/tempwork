import React from 'react';


export default class Layout extends React.Component{
    constructor(){
        super();
    }
    render(){
      
      var key =0;
      return(
          <section class="left departments">
          <div>
            <h1>Примеры работ</h1>
            <img src="/img/big/portfolio-sm.jpg"/>
            <ul>
              <li><a href="http://benovy.ru">Benovy</a>(сайт, брендбук, упаковка, маркетинговые исследования рынка перчаток)</li>
              <li><a href="http://medicosm.ru">Medicosm</a>(сайт, брендбук)</li>
            </ul>
          </div>
        <span class="back"><a href="#"><img src="/img/home.png"/></a></span>
          </section>
      )
    }
}
