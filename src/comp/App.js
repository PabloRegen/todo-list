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
        dueOn: '',
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
        const { newTask, dueOn } = this.state;
        
        if (newTask.trim() === '') {
            return;
        }
        
        const newItem = {
            id: Date.now(),
            text: newTask.trim(),
            postedOn: Date.now(),
            done: false,
            dueOn: dueOn,
            starred: false,
            isWritable: false,
            // color: null,
            // notes: null,
        };
        
        this.setState(state => ({
            newTask: '',
            dueOn: '',
            todoList: state.todoList.concat([newItem]),
        }));
    }

    handleTaskAction = (e, taskId, action) => {
        const { value } = e.target;

        this.setState(state => ({
            todoList: state.todoList.map(task => {
                if (task.id === taskId) {
                    /* if (action === 'done') return Object.assign({}, task, { done: !task.done }) or syntax below */
                    if (action === 'done') return { ...task, done: !task.done };
                    if (action === 'star') return { ...task, starred: !task.starred };
                    if (action === 'click') return { ...task, isWritable: true };
                    if (action === 'save') return { ...task, isWritable: false };
                    if (action === 'edit') return { ...task, text: value };
                    return task;
                } else {
                    return task;
                }
            })
        }));
    }

    handleKeyDown = (e, taskId) => {
        if (e.key === 'Enter') {
            this.handleTaskAction(e, taskId, 'save');
        }
        // } else if (e.key === 'Escape') {
    }
    
    handleTaskDelete = taskId => {
        this.setState(state => ({
            todoList: state.todoList.filter(task => task.id !== taskId)
        }));
    }
    
    handleClearCompletedTasks = () => {
        this.setState(state => ({ 
            todoList: state.todoList.filter(task => !task.done)
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
        const { todoList, newTask, dueOn, searchValue, viewValue, orderByValue } = this.state;

        return (
            <div>
                <div className='header'>
                    <Title />
                    <NewTaskBar
                        newTask={newTask}
                        dueOn={dueOn}
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
                    totalTasksToDo={amountTasksToDo(todoList)} />
                <TasksList
                    userPreferenceToDoList={updateTasksList(todoList, viewValue, orderByValue, searchValue)}
                    onTaskAction={this.handleTaskAction}
                    onKeyDown={this.handleKeyDown}
                    onTaskDelete={this.handleTaskDelete} />
                <ClearTasks
                    onClearCompletedTasks={this.handleClearCompletedTasks}
                    onClearAllTasks={this.handleClearAllTasks} />
            </div>
        );
    }
}

export default App;