import React, {useState} from 'react'
import { ITask } from '../interface/tasks'
import '../App.css';

interface Props{
    task: ITask;
    deleteTask(taskNameToDelete: number): void;
    completeTask(taskNameToDelete: number, value: number): void;
    editTask(taskIndex: number, value: string): void;
}

const TodoTask = ({task, deleteTask, completeTask, editTask}: Props) => {
    const [edit, setEdit] = useState<string>(task.taskName);
    const [title, setTitle] = useState<boolean>(false);
    
    return (
        <div className="task">
            <div className="checkbox"
              style={{
                  backgroundColor: task.completed === 2 ? "green" : "red",
                }}
                onClick={() =>
                  completeTask(task.taskIndex, task.completed === 1 ? 2 : 1)
                }>
            </div> 
                <input
                    type="text"
                    disabled={!title}
                    value={edit}
                    onChange={(e) => (title ? setEdit(e.target.value) : null)}
                />
              <button
                onClick={() => {
                setTitle(!title);
                editTask(task.taskIndex, edit);
        }}
      >
                {title ? "Done" : "Edit"}
              </button>
              <button
                onClick={() => {
                  deleteTask(task.taskIndex);
                }}
              >
                X
              </button>
            </div>
    )
}

export default TodoTask