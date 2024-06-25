export function numberAdd2(dispatch){
    dispatch({type: 'numberAdd2'})
}

export function multi7(dispatch){
    dispatch({type: 'multi7'})
}

export function dividir25(dispatch){
    dispatch({type: 'dividir25'})
}
export function arredondar(dispatch){
    dispatch({type: 'arredondar'})
}
export function addNumber(dispatch, value){
    dispatch({type: 'addNumber', payload: value})
}