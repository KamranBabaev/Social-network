import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./components/Todolist/Todolist";
import {v1} from "uuid";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}
export type FilterValuesType = 'ALL' | 'ACTIVE' | 'DONE'

const App = () => {

    let [tasks, setTasks] = useState([
        {id: v1(), title: 'HTML', isDone: true},
        {id: v1(), title: 'HTML', isDone: true},
        {id: v1(), title: 'HTML', isDone: true},
    ])

    let [filter, setFilter] = useState<FilterValuesType>('ALL')


    const removeTask = (id: string) => {
        let filteredTasks = tasks.filter(t => t.id !== id)
        setTasks(filteredTasks)
    }

    const addTask = (title: string) => {
        let newTask = {id: v1(), title, isDone: false}
        let newTasks = [newTask, ...tasks]
        setTasks(newTasks)
    }

    let tasksForTodolist = tasks;
    if (filter === 'ACTIVE') {
        tasksForTodolist = tasks.filter(t => !t.isDone)
    }
    if (filter === 'DONE') {
        tasksForTodolist = tasks.filter(t => t.isDone)
    }

    const changeFilter = (value: FilterValuesType) => {
        setFilter(value)
    }


    return (
        <div className='appWrapper'>
            <Todolist tasks={tasksForTodolist}
                      title='План на сегодня:'
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}
            />
        </div>
    )
}

export default App;
