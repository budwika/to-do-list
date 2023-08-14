import React, { ChangeEvent, useState} from 'react';
import './App.css';
import{ITask} from './interface/tasks';
import TodoTask from './components/TodoTask';


const SELECT_ITEM = [
  {name: "All Tasks", value:0},
  {name: "Completed", value:2},
  {name: "Incomplete", value:1},
];

const App = () => {


const [task,setTask] = useState<string>("");
const [filter,setFilter] = useState<number>(0);
const [todoList,setTodoList] = useState<ITask[]>([]);
const [id, setId] = useState<number>(0);


const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
  setTask(event.target.value)
};

const addTask = (): void => {
  const newTask : ITask = {
    taskName: task,
    taskIndex: id+1,
    completed: 1,
  };
  setTodoList([...todoList, newTask]);
  setId( id + 1 );
  setTask("");
};

const deleteTask = (taskIndex: number): void => {
  setTodoList(todoList.filter((task) => task.taskIndex !== taskIndex));
}

const completeTask = (taskIndex: number, value: number) => {
  const index = todoList.map((task) => task.taskIndex).indexOf(taskIndex);
    todoList[index].completed = value;
    setTodoList([...todoList]);
  };

  const editTask = (taskIndex: number, value: string) => {
    const index = todoList.map((task) => task.taskIndex).indexOf(taskIndex);
    todoList[index].taskName = value;
    setTodoList([...todoList]);
  };

  return (
    <div className="App">
    <div className='header'>
    <h1>Add Task</h1>
      <div className='inputContainer'>
        <input
            type="text"
            placeholder="Task..."
            name="task"
            value={task}
            onChange={handleChange}/>
          <button onClick={addTask}>Add Task</button>
      </div>

      <label htmlFor="status">Select status:</label>
      <select id="status" onChange={(e) => setFilter(+e.target.value)}>
          {SELECT_ITEM.map((item, i) => (
            <option value={item.value} key={item.name + `-${i}`}>
              {item.name}
            </option>
          ))}
      </select>
    
    </div>
    <div className="todoList">
      <h2>Todo List</h2>
        {todoList
          .filter((item) => {
            if (filter === 0) return true;
            return item.completed === filter;
          })
          .map((task: ITask) => {
            return (
              <div key={task.taskIndex}>
                <TodoTask
                  task={task}
                  deleteTask={deleteTask}
                  completeTask={completeTask}
                  editTask={editTask}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default App;
