import React, {FC, ChangeEvent, useState} from 'react';
import './App.css';

const App = () => {

const [task,setTask] = useState<string>("")
const [todo,setTodoList] = useState([]);

const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
  /*if (event.target.name=="task"){
    setTask(event.target.value)
  } else{

  }*/
  setTask(event.target.value)
};

  return (
    <div className="App">
    <div className='header'>
      <div className='inputContainer'>
        <input type='text' placeholder='Task...' name="task" onChange={handleChange}/>
      </div>
    <button>Add Task</button>
    </div>
    <div className='todoList'></div>
    </div>
  );
}

export default App;
