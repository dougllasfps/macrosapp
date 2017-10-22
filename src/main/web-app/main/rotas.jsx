import {Router, Route, hashHistory,IndexRoute, Redirect} from 'react-router'
import AlimentosForm from '../alimentos/alimentosform'
import Login from '../login/login'
import Home from '../templates/home'
import React from 'react'

import {connect} from 'react-redux'

class Rotas extends React.Component{
  
    constructor(props){
      super(props);
    }

    render(){
        return (
          <Router history={hashHistory}>
            <Route path="/" component={Login} />
            <Route path="/home" component={Home}/>
          </Router>
        );
    }
}

const mapStateToProps = (state) => ({
    isLogged : state.usuarios.usuarioLogado != null
})

export default connect(mapStateToProps)(Rotas)