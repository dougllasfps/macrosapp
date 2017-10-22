import React from 'react'

import {connect} from 'react-redux';

class Header extends React.Component{
    render(){
        return (
            <header className="header">
                <h1>{this.props.header}</h1>
                <h2>Usuario Logado: {this.props.usuarioLogado ? this.props.usuarioLogado.nome : null}</h2>
            </header>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        usuarioLogado: state.usuarios.usuarioLogado
    }
}

export default connect(mapStateToProps)(Header)