import React from 'react';


export default class Layout extends React.Component{
    constructor(){
        super();
    }
    render(){
      var vedTasks = [
        "Нейминг",
        "Разработка логотипа",
        "Разработка бренд-бука",
        "Разработка дизайна сайта",
        "Разработка и верстка упаковки",
        "Разработка рекламного модуля",
        "Разработка стандарта по фотографированию товаров для каталога",
        "Разработка каталога",
        "Разработка буклета",
        "Разработка презентации на заданную тему",
        "Промышленный дизайн (нанесение на товар рисунка)",
        "Фотографирование товара для каталога",
        "Организация студийной фотосессии для каталога"
      ];
      var key =0;
      return(
          <section class="left departments" >
            <div>
            <h1>Отдел фирменного стиля</h1>
            <img src="/img/big/corpStyle-sm.jpg"/>
            <ul>
              {vedTasks.map((i)=>{return <li key={key++}> {i} </li>})}
            </ul>
            <p>Подробнее узнайте в нашем <a href="/prices/corpStyle.pdf">прайлисте</a></p>
            </div>
            <span class="back"><a href="#"><img src="/img/home.png"/></a></span>
          </section>
      )
    }
}
