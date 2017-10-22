import React from 'react';
import {connect} from 'react-redux';

class Home extends React.Component{
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
