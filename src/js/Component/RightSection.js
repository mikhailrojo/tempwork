import React from 'react';
require("../../css/RightSection.scss");


export default class Layout extends React.Component{
    constructor(){
        super();
    }

    componentDidMount(){
      
    }
    render(){
        return(
              <section class="right slideInUp animated">
                <a href="#/marketing"><div class="firstBlock"><p>Отдел маркетинга</p></div></a>
                <a href="#/corpstyle"><div class="secondBlock"><p>Отдел фирменного стиля</p></div></a>
                <a href="#/ved"><div class="thirdBlock"><p>Отдел закупок и ВЭД</p></div></a>
                <a href="#/patents"><div class="fourthBlock"><p>Отдел патентоведения</p></div></a>
                <a href="#/web"><div class="fifthBlock"><p>Отдел WEB-программирования</p></div></a>
                <a href="#/examples"><div class="sixthBlock"><p>Примеры работ</p></div></a>
              </section>
        )
    }
}
