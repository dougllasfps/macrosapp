import {Router, Route,hashHistory} from 'react-router'
import AlimentosForm from '../alimentos/alimentosform'
import React from 'react'


export default class Rotas extends React.Component{
    render(){
        return (
          <Router history={hashHistory}>
            <Route path="/alimentos"  component={AlimentosForm} />
          </Router>
        );
    }
}