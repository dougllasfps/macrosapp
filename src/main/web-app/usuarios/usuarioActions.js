import axios from 'axios';
import {withRouter} from 'react-router'

const URL = "http://localhost:8080/usuarios"

export const signup = (login, senha) => {
    const usuarioRequest = {login,senha}
    return dispatch => {
        axios.post(URL, usuarioRequest)
            .then(resp => dispatch({
                type : '_SIGNIN', 
                payload: resp.data
            }))
            .then(resp=> withRouter.push("/home"))
    }    
}