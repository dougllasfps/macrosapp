import React, {Component} from 'react';
import {signup} from '../usuarios/usuarioActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';
import '../css/login.css';

import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class Login extends Component{

    constructor(props){
        super(props)
        this.state = {login:'',senha:''}
    }

    setLogin(event){
        this.setState({login: event.target.value});
    }

    setSenha(event){
        this.setState({senha: event.target.value});
    }

    render(){
        let {usuarioLogado} = this.props;
        return (
            <Container>
                <div className="card card-container">
                 <img id="profile-img" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
                 <p id="profile-name" className="profile-name-card"></p>
                    <Form className="form-signin">
                    <span id="reauth-email" className="reauth-email"></span>
                            <FormGroup>
                                <Input  type="text" id="inputEmail" className="form-control" 
                                        placeholder="Login" onChange={this.setLogin.bind(this)}/>
                            </FormGroup>

                            <FormGroup >
                                <Input type="password" id="inputPassword" 
                                        className="form-control" placeholder="Senha"
                                        onChange={this.setSenha.bind(this)} />
                            </FormGroup>

                            <FormGroup >
                                <label>
                                    <Input type="checkbox" value="remember-me" /> lembrar-me
                                </label>
                            </FormGroup>

                            <FormGroup >
                                <Button color="primary" 
                                        onClick={() => this.props.signup(this.state.login, this.state.senha)}>
                                        Entrar
                                </Button>
                            </FormGroup>

                    </Form>
                    </div>
            </Container> 
        )
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({signup}, dispatch);

const mapStatetoProps = (state) => {
    return {
        usuario: state.usuarios.usuarioLogado
    }
}

export default connect(mapStatetoProps,mapDispatchToProps)(Login)