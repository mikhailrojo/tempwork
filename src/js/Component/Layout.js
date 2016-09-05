import React from 'react';
import RightSection from './RightSection';


require("../../css/main.scss");
require("../../css/smallSize.scss");

import Router from 'react-router';
var RouteHandler = Router.RouteHandler;


export default class Layout extends React.Component{
    constructor(){
        super();

    }
    render(){
        return(
            <div class="content">
             <RouteHandler />
             <RightSection>Привет Винигред</RightSection>
            </div>
        )
    }
}
