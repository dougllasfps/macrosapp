import {ENVIA_VALOR} from './alimentoConstants'

export const alimentoReducer = (state={valor:''}, action) =>{
    switch (action.type){
        case ENVIA_VALOR:
            return {...state, valor: action.payload};
        default:
            return state;
    }
}