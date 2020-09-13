import React, {useState, useEffect} from 'react'

import firebase from '../util/firebase'

function AddCategory() {
    const [Category, setCategory] = useState('')
    const [negocios, setNegocios] = useState('')
    const [IdNegocio, setIdNegocio] = useState('');

    const handleOnChange = (e) =>{
        setCategory(e.target.value)
    }

    const handleIdNegocio = (e) =>{
        setIdNegocio(e.target.value)
    }

    const createTodo = (e) =>{
        e.preventDefault()
        const todoRef = firebase.database().ref("NEGOCIOS").child(IdNegocio).child('Categorias')

        let objetoCategoria = {
            "nombre": Category
        }
        todoRef.push(objetoCategoria)
        setCategory('')
    }

    useEffect(() => {
        const categoryRef = firebase.database().ref("NEGOCIOS")
        categoryRef.on('value', (snapshot) =>{
            const valoresNegocios = snapshot.val()
            if(valoresNegocios){
                const negocios = Object.keys(snapshot.val())
                const negociosVal = []
                negocios.map(x=>{
                    let valores={
                        key: x,
                        negocio: valoresNegocios[x]
                    }
                    negociosVal.push(valores)
                    return null
                })
                setNegocios(negociosVal)
            }else{
               return null
            }
            
        })
    }, [])
    
    return (
        <div>
            <h2>Agregar categorías</h2>
            <form onSubmit={createTodo}>
                <label htmlFor="negocios"></label>
                <select name="negocios" id="negocios" onChange={handleIdNegocio}>
                    <option value="" key='giornogiovana'>

                    </option>
                    {negocios
                    ? negocios.map((x)=>(
                        <option value={x.key} key={x.key}>
                            {x.negocio.Nombre}
                        </option>
                    ))
                    :   ''}
                </select>
                <label htmlFor="Category">Categoría</label>
                <input name="Category" type="text" onChange={handleOnChange} value={Category}/>
                <button type="submit" >
                    Agregar categoría
                </button>
            </form>
        </div>
    )
}

export default AddCategory
