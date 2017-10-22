import {combineReducers} from 'redux';
import usuarioReducers from '../usuarios/usuarioReducers'

export const appReducers = combineReducers({
    usuarios: usuarioReducers
});