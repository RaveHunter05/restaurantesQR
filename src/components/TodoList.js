import React, {useState, useEffect} from 'react'
import firebase from '../util/firebase'

import Todo from './Todo'

function TodoList() {
    const [todoList, setTodoList] = useState()

    useEffect(() => {
        const todoRef = firebase.database().ref("QR")
        todoRef.on('value', (snapshot)=>{
          const todos = snapshot.val()
          const todoList = []
          for (let id in todos) {
            todoList.push({id, ...todos[id]})
          }
          setTodoList(todoList)
        })
    }, [])
    return (
        <div>
            <h1>Categorías</h1>
            {todoList
            ? todoList.map((todo,index)=>(
                <Todo Todo={todo} key={index}/>
            ))
        : null}
        </div>
    )
}

export default TodoList
