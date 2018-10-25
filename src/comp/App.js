/*
Components structure:

- App
    - Title
    - NewTaskBar
    - UserDisplayPreference
        - ViewBar
        - OrderByBar
        - SearchBar
    - TotalTasksToDo
    - TaskList
        - Task
    - ClearTasks
*/

import React, { Component } from 'react';
import Title from './Title';
import NewTaskBar from './NewTaskBar';
import UserDisplayPreference from './UserDisplayPreference';
import TotalTasksToDo from './TotalTasksToDo';
import TasksList from './TasksList';
import ClearTasks from './ClearTasks';
import { amountTasksToDo } from '../lib/amountTasksToDo';
import { updateTasksList } from '../lib/updateTasksList';
import { viewOptions, orderByOptions } from '../lib/viewAndOrderByOptions';

class App extends Component {
    state = {
        todoList: [],
        newTask: '',
        searchValue: '',
        viewValue: 'all',
        orderByValue: 'newestFirst'
    }
    
    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    handleAddNewTask = e => {
        e.preventDefault();
        const newTask = this.state.newTask;
        
        if (newTask.trim() === '') {
            return;
        }
        
        const newItem = {
            id: Date.now(),
            task: newTask.trim(),
            postedOn: Date.now(),
            done: false,
            // dueOn: null,
            // isStarred: false,
            // color: null,
            // notes: null,
        };
        
        this.setState(state => ({
            newTask: '', 
            todoList: state.todoList.concat([newItem]),
        }));
    }
    
    handleTaskDone = taskId => {
        this.setState(state => ({
            todoList: state.todoList.map(task => {
                if (task.id === taskId) {
                    return { ...task, done: !task.done };
                    // or return Object.assign({}, task, { done: !task.done });
                } else {
                    return task;
                }
            })
        }));
    }
    
    handleTaskDelete = (e, taskId) => {
        e.preventDefault();     
        this.setState(state => ({
            todoList: state.todoList.filter(task => task.id !== taskId)
        }));
    }
    
    handleClearCompletedTasks = () => {         
        this.setState(state => ({ 
            todoList: state.todoList.filter(task => task.done === false)
        }));
    }

    handleClearAllTasks = () => {
        this.setState({
            todoList: []
        });
    }
    
    handleLeavePage = () => {
        localStorage.setItem('todoList', JSON.stringify(this.state.todoList));
    }

    componentDidMount() {
        window.addEventListener('beforeunload', this.handleLeavePage);
        this.setState({
            todoList: JSON.parse(localStorage.getItem('todoList')) || []
        })
    }

    componentWillUnmount() {
        window.removeEventListener('beforeunload', this.handleLeavePage);
    }

    /* update localStorage on each & every state change. Different results than componentWillUnmount() when opening on more than 1 tab at once */
    // componentDidUpdate() {
    //  localStorage.setItem('todoList', JSON.stringify(this.state.todoList));
    // }

    render() {
        const { todoList, newTask, searchValue, viewValue, orderByValue } = this.state;

        return (
            <div>
                <div className='header'>
                    <Title />
                    <NewTaskBar
                        newTask={newTask}
                        onChange={this.handleChange}
                        onAddNewTask={this.handleAddNewTask} />
                    <UserDisplayPreference
                        viewOptions={viewOptions}
                        orderByOptions={orderByOptions}
                        viewValue={viewValue}
                        orderByValue={orderByValue}
                        searchValue={searchValue} 
                        onChange={this.handleChange} />
                </div>
                <TotalTasksToDo
                    totalTasksToDo={amountTasksToDo(todoList)}/>
                <TasksList
                    userPreferenceToDoList={updateTasksList(todoList, viewValue, orderByValue, searchValue)}
                    onTaskDone={this.handleTaskDone}
                    onTaskDelete={this.handleTaskDelete} />
                <ClearTasks 
                    onClearCompletedTasks={this.handleClearCompletedTasks}
                    onClearAllTasks={this.handleClearAllTasks} />
            </div>
        );
    }
}

export default App;