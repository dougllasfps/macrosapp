import If from '../../commom/components/if'
import React from 'react'

import {connect} from 'react-redux'

class Autenticated extends React.Component{
    
    constructor(props){
        super(props);
    }

    render(){
        return(
            <If test={this.props.usuarioLogado}>
                return(
                    this.props.children
                )
            </If>
        )
    }
}

const mapStateToProps = (state) => ({
    usuarioLogado: state.usuarios.usuarioLogado
})

export default connect(mapStateToProps)(Autenticated)