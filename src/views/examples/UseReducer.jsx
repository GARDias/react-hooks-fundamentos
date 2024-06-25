import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { initialState, reducer} from '../../store'
import { numberAdd2, multi7, dividir25, arredondar, addNumber, login } from '../../store/actions'




const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)


    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                {state.user ? <span className="text">{state.user.name}</span> : <span className="text">Sem Usúario</span>}
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" onClick={() => login(dispatch, 'João')}>Login</button>
                    <button className="btn" onClick={() => numberAdd2(dispatch)}>+2</button>
                    <button className="btn" onClick={() => multi7(dispatch)}>x7</button>
                    <button className="btn" onClick={() => dividir25(dispatch)}>Dividir por 25</button>
                    <button className="btn" onClick={() => arredondar(dispatch)}>Arredondar</button>
                    <input type="text" className="input" onChange={(e) => addNumber(dispatch, parseInt(e.target.value))}/>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
