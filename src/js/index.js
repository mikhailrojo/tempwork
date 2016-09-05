import React from 'react';
import ReactDom from 'react-dom';

import Router from 'react-router';
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

require("../css/normalize.css");

import Layout from './Component/Layout.js';
import LeftSection from './Component/LeftSection.js';
import VED from './Component/directions/VED.js';
import Marketing from './Component/directions/Marketing.js';
import CorpStyle from './Component/directions/CorpStyle.js';
import Patents from './Component/directions/Patents.js';
import Web from './Component/directions/Web.js';
import Examples from './Component/directions/Examples.js';
import NotFound from './Component/404.js';

var routes = (
  <Route handler ={Layout}>
    <DefaultRoute handler={LeftSection} />
    <Route name="marketing" path="marketing" handler={Marketing} />
    <Route name="corpstyle" path="corpstyle" handler={CorpStyle} />
    <Route name="speaker" path="ved" handler={VED} />
    <Route name="patents" path="patents" handler={Patents} />
    <Route name="web" path="web" handler={Web} />
    <Route name="examples" path="examples" handler={Examples} />
    <NotFoundRoute handler={NotFound}/>
  </Route>
)

Router.run(routes, (Handler)=>{
    ReactDom.render(<Handler />, document.getElementById("app"));
})
