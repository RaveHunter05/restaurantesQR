import React, {useEffect, useState} from 'react'
import firebase from '../util/firebase'

function AddProducto() {
    const [Product, setProduct] = useState('')
    useEffect(() => {
        const categoryRef = firebase.database().ref("NEGOCIOS")
        categoryRef.on('value', (snapshot) =>{
            const valoresNegocios = snapshot.val()
            if(valoresNegocios){
                const negocios = Object.keys(snapshot.val())
                const negociosVal = []
                let a = negocios.map(x=>{
                    let valores={
                        key: x,
                        negocio: valoresNegocios[x]
                    }
                    negociosVal.push(valores)
                })
                setProduct(negociosVal)
                console.log(negociosVal)
            }else{
               return null
            }
            
        })
    }, [])
    return (
        <div>
            <h2>Agregar producto</h2>
            <label htmlFor="">Seleccione un negocio</label>
            <select name="" id="">
            <option key="giornoGiovanna"> </option>
             {Product?
             Product.map(x=>(
                <option 
                value={x.key} 
                key={x.key}> 
                    {x.negocio.Nombre} 
                </option>
            ))
            : ''}
            </select>
        </div>
    )
}

export default AddProducto
