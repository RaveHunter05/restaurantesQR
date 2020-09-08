import React, {useState} from 'react'
import firebase from '../util/firebase'

function Form() {
    const [Title, setTitle] = useState('')

    const handleOnChange = (e) =>{
        setTitle(e.target.value)
    }

    const createTodo = (e) =>{
        e.preventDefault()
        const todoRef = firebase.database().ref("QR")
        const todo = {
            Title,
            completed: false
        }
        todoRef.push(todo)
        setTitle('')
    }
    return (
        <form onSubmit={createTodo}>
            <input type="text" onChange={handleOnChange} value={Title}/>
            <button type="submit" >
                Add Todo
            </button>
        </form>
    )
}

export default Form
