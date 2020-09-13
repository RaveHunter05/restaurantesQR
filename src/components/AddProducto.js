import React, {useEffect, useState} from 'react'
import firebase from '../util/firebase'

function AddProducto() {
    const [Negocio, setNegocio] = useState('')
    const [Category, setCategory] = useState('')
    const [IdNegocio, setIdNegocio] = useState('')
    const [IdCategoria, setIdCategoria] = useState('')
    const [NombreProducto, setNombreProducto] = useState('')
    const [PrecioProducto, setPrecioProducto] = useState(0);
    const [TipoMoneda, setTipoMoneda] = useState('C$');

    const handleNegocio = (e) =>{
        setIdNegocio(e.target.value)
    }
    useEffect(() => {
        // Agregar las categorías
        const negocioRef = firebase.database().ref("NEGOCIOS")
        negocioRef.on('value', (snapshot) =>{
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
                setNegocio(negociosVal)
            }else{
               return null
            }
            
        })
    }, [])

    useEffect(() => {
        if(IdNegocio){
            const categoryRef = firebase.database().ref("NEGOCIOS").child(IdNegocio).child('Categorias')
            categoryRef.on('value', (snapshot) =>{
                const valoresCategorias = snapshot.val()
                if(valoresCategorias){
                    const categorias = Object.keys(snapshot.val())
                    const categoriasVal = []
                    categorias.map(x=>{
                        let valores={
                            key: x,
                            categorias: valoresCategorias[x]
                        }
                        categoriasVal.push(valores)
                        return null
                    })
                    setCategory(categoriasVal)
                }
            })
        }
    }, [IdNegocio])

    const handleIdCategoria = (e) =>{
        setIdCategoria(e.target.value)
    }

    const handleNombreProducto = (e) =>{
        setNombreProducto(e.target.value)
    }

    const handlePrecioProducto = (e) =>{
        setPrecioProducto(e.target.value)
    }

    const handleTipoMoneda = (e) =>{
        setTipoMoneda(e.target.value)
        console.log(e.target.value)
    }
    
    const agregarProducto = (e)=>{
        e.preventDefault()
        const categoryRef = firebase.database().ref("NEGOCIOS").child(IdNegocio).child('Categorias').child(IdCategoria).child('Productos')

        let producto = {
            'nombre':NombreProducto,
            'precio':PrecioProducto,
            'moneda': TipoMoneda
        }

        categoryRef.push(producto)
        setNombreProducto('')
        setPrecioProducto(0)
        setTipoMoneda('C$')
    }
    return (
        <div>
            <h2>Agregar producto</h2>
            <label htmlFor="negocios">Seleccione un negocio</label>
            <select name="negocios" onChange={handleNegocio}>
                <option key="giornoGiovanna"> </option>
                {
                Negocio?
                Negocio.map(x=>(
                    <option 
                    value={x.key} 
                    key={x.key}> 
                        {x.negocio.Nombre} 
                    </option>
                ))
                : ''
                }
            </select>
            <label htmlFor="categoria">Seleccione una categoría</label>
            <select name="categoria" onChange={handleIdCategoria}>
                <option key="giornoGiovana"></option>
                {
                Category?
                Category.map(x=>(
                    <option
                    value={x.key}
                    key={x.key}>
                        {x.categorias.nombre}
                    </option>
                ))
                :''
                }
            </select>
            {
                Category?
                <form onSubmit={agregarProducto}>
                    <label htmlFor="producto">Ingrese un producto</label>
                    <input name="producto" value={NombreProducto} onChange={handleNombreProducto} type="text"/>
                    <input type="number" value={PrecioProducto} onChange={handlePrecioProducto}/>
                    <select name="moneda" value={TipoMoneda} onChange={handleTipoMoneda}>
                        <option value="" disabled={true}></option>
                        <option value="C$">C$</option>
                        <option value="$">$</option>
                    </select>
                    <button type="submit">
                        Agregar producto
                    </button>
                </form>
                :''
            }
        </div>
    )
}

export default AddProducto
