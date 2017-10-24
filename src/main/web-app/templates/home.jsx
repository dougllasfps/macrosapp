import React from 'react';
import {connect} from 'react-redux';
import {hashHistory} from 'react-router'

class Home extends React.Component{

    componentWillMount(){
        const { usuarioLogado } = this.props;
        if(!usuarioLogado){
            hashHistory.push('/login');
        }
    }

    render(){
        console.log("home")
        return (
            <div>
                <h1>
                    Bem vindo {this.props.usuarioLogado} !
                </h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
       usuarioLogado : state.usuarios.usuarioLogado
    }
}

export default connect(mapStateToProps)(Home)
