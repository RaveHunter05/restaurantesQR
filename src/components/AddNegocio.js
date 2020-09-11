import React, {useState} from 'react'
import firebase from '../util/firebase'

function AddNegocio() {
    const [Negocio, setNegocio] = useState('')

    const agregarNegocio = (e)=>{
        e.preventDefault()
        const negocioRef = firebase.database().ref("NEGOCIOS")
        const negocio = {
            'Nombre':Negocio
        }
        negocioRef.push(negocio)
        setNegocio('')
    }

    const handleNegocio = (e)=>{
        setNegocio(e.target.value)
    }
    return (
        <div>
            <h2>Agregar negocio</h2>
            <form action="" onSubmit={agregarNegocio}>
                <label htmlFor="">Nombre del negocio</label>
                <input type="text" value={Negocio} onChange={handleNegocio}/>
                <button type="submit">
                    Agregar negocio
                </button>
            </form>
        </div>
    )
}

export default AddNegocio
