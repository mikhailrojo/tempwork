import React from 'react';
import Navigation from './Navigation';

export default class Layout extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <section class="left slideInDown animated">
              <Navigation id="mi" />
            </section>
        )
    }
}
