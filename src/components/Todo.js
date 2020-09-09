import React from 'react'
import firebase from '../util/firebase'

function Todo({Todo}) {
    const deleteTodo = ()=>{
        const todoRef = firebase.database().ref('QR').child(Todo.id)
        todoRef.remove()
    }

    // const completeTodo =()=>{
    //     const todoRef = firebase.database().ref('QR').child(Todo.id)
    //     todoRef.update({
    //         completed: !Todo.completed
    //     })
    // }
    return (
        <div>
            <ul> 
                    <li style={{textDecoration:(Todo.completed?'line-through':'none'), listStyle:'none'}}>
                        <span style={{marginRight:'1rem'}}>{Todo.Category}</span>
                        <button onClick={deleteTodo} style={estilos.boton}>X</button>
                    </li>
                </ul>
        </div>
    )
}

const estilos={
    boton:{
        backgroundColor: '#ff0000',
        color: 'white',
        border: 'none',
        padding: '5px 9px',
        borderRadius: '15px',
        cursor: 'pointer'
    }
}

export default Todo
