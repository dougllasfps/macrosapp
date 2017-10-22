import React from 'react';
import Header from '../templates/header'
import Footer from '../templates/footer'
import Menu from '../templates/menu'

import Rotas from './rotas'


export default class App extends React.Component{
    render(){
        return (
            <div className="container">
                <Menu />
                <Rotas/>
                <Footer/>
            </div>
        );
    }
}