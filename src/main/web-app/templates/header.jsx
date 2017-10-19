import React from 'react'

import {connect} from 'react-redux';

class Header extends React.Component{
    render(){
        return (
            <header className="header">
                <h1>App Header {this.props.header}</h1>
            </header>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        header: state.alimentoReducer.valor
    }
}

export default connect(mapStateToProps)(Header)