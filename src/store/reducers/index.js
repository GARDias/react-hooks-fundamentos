export function reducer(state, action) {
    switch(action.type) {
        case 'numberAdd2':
            return {...state, number: state.number + 2}
        case 'login':
            return {...state, user: { name: action.payload }}
        case 'multi7':
            return {...state, number: state.number * 7}
        case 'dividir25':
            return {...state, number: state.number / 25}
        case 'arredondar':
            return {...state, number: parseInt(state.number)}
        case 'addNumber':
            return {...state, number: state.number + action.payload}
        default:
            return state
    }
}