/*
Components structure:

- App
    - Title
    - NewTaskBar
    - UserDisplayPreference
        - ViewBar
        - OrderByBar
        - SearchBar
    - ClearTasks
    - TotalTasksToDo
    - TaskList
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

    handleKeyDown = (e, taskId, keyDownFor) => {
        if (e.key === 'Enter') {
            if (keyDownFor === 'keyDownToAddNewTask') this.handleAddNewTask(e);
            if (keyDownFor === 'keyDownToEditText') this.handleTaskAction(e, taskId, 'saveText');
            if (keyDownFor === 'keyDownToEditDate') this.handleTaskAction(e, taskId, 'saveDate');
        }
        // } else if (e.key === 'Escape') {
    }

    handleAddNewTask = e => {
        e.preventDefault();
        const { newTask, dueOn } = this.state;
        
        if (newTask.trim() === '') {
            alert('▶ Please write a task');
            return;
        }
        
        const newItem = {
            id: Date.now(),
            text: newTask.trim(),
            postedOn: Date.now(),
            done: false,
            note: '',
            dueOn: dueOn,
            starred: false,
            editingText: false,
            editingDate: false,
            editingNote: false,
            noteOpen: false,
            // color: null,
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
                    /* Use `if (action === 'done') return Object.assign({}, task, { done: !task.done })` or syntax below */
                    if (action === 'taskDone') return { ...task, done: !task.done };
                    if (action === 'taskStarred') return { ...task, starred: !task.starred };

                    if (action === 'clickText') return { ...task, editingText: true };
                    if (action === 'saveText') return { ...task, editingText: false };
                    if (action === 'editText') return { ...task, text: value };

                    if (action === 'clickDate') return { ...task, editingDate: true };
                    if (action === 'saveDate') return { ...task, editingDate: false };
                    if (action === 'editDate') return { ...task, dueOn: value };

                    if (action === 'clickNote') return { ...task, editingNote: true };
                    if (action === 'saveNote') return { ...task, editingNote: false };
                    if (action === 'editNote') return { ...task, note: value };

                    if (action === 'clickCollapsible') return { ...task, noteOpen: !task.noteOpen };
                    return task;
                } else {
                    return task;
                }
            })
        }));
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
                        onKeyDown={this.handleKeyDown} 
                        onAddNewTask={this.handleAddNewTask} />
                    <div className='flexRow'>
                        <UserDisplayPreference
                            viewOptions={viewOptions}
                            orderByOptions={orderByOptions}
                            viewValue={viewValue}
                            orderByValue={orderByValue}
                            searchValue={searchValue}
                            onChange={this.handleChange} />
                        <ClearTasks
                            onClearCompletedTasks={this.handleClearCompletedTasks}
                            onClearAllTasks={this.handleClearAllTasks} />
                        <TotalTasksToDo
                            totalTasksToDo={amountTasksToDo(todoList)} />
                    </div>
                </div>
                <TasksList
                    userPreferenceToDoList={updateTasksList(todoList, viewValue, orderByValue, searchValue)}
                    onTaskAction={this.handleTaskAction}
                    onKeyDown={this.handleKeyDown}
                    onTaskDelete={this.handleTaskDelete} />
            </div>
        );
    }
}

export default App;