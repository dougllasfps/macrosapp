import {ENVIA_VALOR} from './alimentoConstants'

export const enviaValor  = (value) => {
    return {
        type: ENVIA_VALOR,
        payload: value
    }
}