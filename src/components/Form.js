import React, {useState} from 'react'
import firebase from '../util/firebase'

import AddNegocio from './AddNegocio'
import AddCategory from './AddCategory'
import AddProducto from './AddProducto'

function Form() {

    return (
        <div>
            <AddNegocio/>
            <AddCategory/>
            <AddProducto/>
        </div>
    )
}

export default Form
