import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

//const App = ()=> {
function App() {

  const [todo,setTodo] = useState([])  // starts with an empty array []

  // do this only once. when we first open the app.
   useEffect(()=>{
    // do what? do this only once...
    fetch("http://localhost:8000") // get request to localhost:8000
    .then(res=> res.json()) // tell the system we will get JSON
    .then(data => { // ok. and here's the "data"
      // ok we have "data" now update the "todo" variable
      setTodo(data)
    })

  },[])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
        <ul>
        {todo.map(t => {
          return <li>{t}</li>
        })}
        </ul>
      </header>
    </div>
  );
}

export default App;
