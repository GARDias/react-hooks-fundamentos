import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'


function calcFatorial(num) {
    const n = parseInt(num)
    if(n < 0) return -1
    if(n === 0) return 1
    return calcFatorial(n - 1) * n
}

function isPar(num) {
    const n = parseInt(num)
    if (n % 2 === 0){
        return 'Par'
    } else {
        return 'Impar'
    }
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(100)
    const [text, setText] = useState('')
    useEffect(function () {
        setFatorial(calcFatorial(number))
    }, [number])

    useEffect(function() {
        setText(isPar(fatorial))
    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                    <span className="text">Fatorial:</span>
                    <span className="text red">{fatorial === -1 ? 'Não existe' : fatorial}</span>
                </div>

                <input type="number" value={number} onChange={e => setNumber(e.target.value)} className="input" />
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <span className="text red">{text}</span>
            </div>
        </div>
    )
}

export default UseEffect
