import React from 'react';
import Task from './Task';

const TasksList = ({ userPreferenceToDoList, onTaskAction, onKeyDown, onTaskDelete }) => {
    const listTasks = userPreferenceToDoList.map(task => (
        <Task
            key={task.id}
            task={task}
            onTaskAction={onTaskAction}
            onKeyDown={onKeyDown}
            onTaskDelete={onTaskDelete} />
    ));
    
    return <ul>{listTasks}</ul>;
};

export default TasksList;