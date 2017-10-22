const defaultState = {usuario:{}};

const usuarioReducers = (state = {defaultState}, action) =>{
    switch(action.type){
        case '_SIGNIN':
            return {...state, usuarioLogado: action.payload}
        default:
            return state
    }
}

export default usuarioReducers;