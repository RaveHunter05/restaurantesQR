import React, {useState} from 'react'
import firebase from '../util/firebase'

import AddNegocio from './AddNegocio'
import AddCategory from './AddCategory'

function Form() {

    return (
        <div>
            <AddNegocio/>
            <AddCategory/>
        </div>
    )
}

export default Form
