import React from 'react';


import Router from 'react-router';
var Link = Router.Link;



export default class Layout extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <section class="left slideInDown animated">
              <h3>Такой страницы не существует: </h3>
              <p>Переход к домашней странице:</p>
              <Link to="/">Переход к домашней странице:</Link><br/>

            </section>
        )
    }
}
