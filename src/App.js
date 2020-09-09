import React from 'react';
import Form from './components/Form'
import TodoList from './components/TodoList';
import './App.css'

function App() {

  return (
    <div className="App">
      <h2>Restaurante</h2>
      <br/>
      <Form/>
      <TodoList className=""/>
    </div>
  );
}

export default App;
