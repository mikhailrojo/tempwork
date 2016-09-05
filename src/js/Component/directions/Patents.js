import React from 'react';


export default class Layout extends React.Component{
    constructor(){
        super();
    }
    render(){
      var vedTasks = [
        "Экспресс- поиск по базе зарегистрированных  обозначений",
        "Анализ вероятности регистрации логотипа в Роспатенте",
        "Заявка в Роспатент на регистрацию ТЗ",
        "Работа с запросами Роспатента"
      ];
      var key =0;
      return(
          <section class="left departments">
          <div>
            <h1>Отдел патентоведения</h1>
            <img src="/img/big/patent-sm.jpg"/>
            <ul>
              {vedTasks.map((i)=>{return <li key={key++}> {i} </li>})}
            </ul>
            <p>Подробнее узнайте в нашем <a href="/prices/patent.pdf">прайлисте</a></p>
            </div>
            <span class="back"><a href="#"><img src="/img/home.png"/></a></span>
          </section>
      )
    }
}
