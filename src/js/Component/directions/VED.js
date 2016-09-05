import React from 'react';


export default class Layout extends React.Component{
    constructor(){
        super();
    }
    render(){
      var vedTasks = [
        "Экспресс поиск поставщиков Россия/импорт",
        "Мониторинг рынка поставщиков Россия/импорт",
        "Пилотный заказ продукции Россия/импорт",
        "Работа на выставках",
        "Разработка линейки товаров/коллекции на определенную ассортиментую группу",
        "Экспорт продукции: Оформление и организация экспорта "
      ];
      var key =0;
      return(
          <section class="left departments">
          <div>
            <h1>Отдел закупок и ВЭД</h1>
            <img src="/img/big/zakupka-sm.jpg"/>
            <ul>
              {vedTasks.map((i)=>{return <li key={key++}> {i} </li>})}
            </ul>
            <p>Подробнее узнайте в нашем <a href="/prices/ved.pdf">прайлисте</a></p>
          </div>
          <span class="back"><a href="#"><img src="/img/home.png"/></a></span>
          </section>
      )
    }
}
