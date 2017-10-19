import React from 'react';
import {enviaValor} from './actions';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class AlimentosForm extends React.Component{

    constructor(props){
        super(props);
        this.state = { inputValue: ''};
    }

    changeInput(event){
        this.setState({inputValue:event.target.value});
    }

    render(){
        return (
          <form>
              <label>Label</label>
              <input type="text" placeholder="In" onChange={this.changeInput.bind(this)} value={this.state.inputValue} />
              <input type="text" placeholder="Out" value={this.props.out} />
              <button onClick={() => this.props.enviaValor(this.state.inputValue)}>Clica Porra</button>
          </form>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        out: state.alimentoReducer.valor
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({enviaValor}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AlimentosForm)
