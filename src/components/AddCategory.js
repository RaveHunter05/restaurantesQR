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
        const todoRef = firebase.database().ref("CATEGORIAS")
        const todo = {
            Category
        }
        todoRef.push(todo)
        setCategory('')
    }

    useEffect(() => {
        const categoryRef = firebase.database().ref("NEGOCIOS")
        categoryRef.on('value', (snapshot) =>{
            const negocios = snapshot.val()
            const negociosVal = []
            for (const i in negocios) {
                negociosVal.push(negocios[i])
            }
            setNegocios(negociosVal)
        })
    }, [])
    
    return (
        <div>
            <h2>Agregar categorías</h2>
            <form onSubmit={createTodo}>
                <label htmlFor="negocios"></label>
                <select name="negocios" id="negocios" onChange={handleIdNegocio}>
                    {negocios
                    ? negocios.map((x, key)=>(
                        <option value={key} key={key}>
                            {x.Negocio}
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
