import React, { useState, useRef, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseRef = (props) => {
    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")
    const count = useRef(0)
    const myInput1 = useRef(null)
    const myInput2 = useRef(null)
    const merge = []


    useEffect(function () {
        count.current++
        myInput2.current.focus()
    }, [value1])

    useEffect(function () {
        count.current++
        myInput1.current.focus()
    }, [value2])


    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SectionTitle title="Execício #01" />
            <div className="center">
                <div>
                    <span className="text">Valor:</span>
                    <span className="text">{merge} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>
                <input type="text" ref={myInput1} value={value1} className="input" />
            </div>
            <SectionTitle title="Execício #02" />
            <div className="center">
                <input type="text" ref={myInput2} className="input" value={value2}/>
            </div>
        </div>
    )
}

export default UseRef
