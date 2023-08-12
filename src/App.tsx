import React, {FC, ChangeEvent, useState} from 'react';
import './App.css';
import{ITask} from './Interfaces';
import TodoTask from './components/TodoTask';


const App = () => {

const [task,setTask] = useState<string>("")
const [todoList,setTodoList] = useState<ITask[]>([]);



const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
  /*if (event.target.name=="task"){
    setTask(event.target.value)
  } else{

  }*/
  setTask(event.target.value)
};

const addTask = (): void => {
  const newTask = {taskName: task};
  setTodoList([...todoList, newTask])
  setTask("")
}

  return (
    <div className="App">
    <div className='header'>
      <div className='inputContainer'>
        <input type='text' placeholder='Task...' name="task" value={task} onChange={handleChange}/>
      </div>
    <button onClick={addTask}>Add Task</button>
    </div>
    <div className='todoList'>
      {todoList.map(() => {
        return <TodoTask/>;
      })}
    </div>
    </div>
  );
}

export default App;
