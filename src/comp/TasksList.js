import React from 'react';
import Task from './Task';

const TasksList = props => {
	const { userPreferenceToDoList, onTaskDone, onTaskStarred, onTaskDelete} = props;

    const listTasks = userPreferenceToDoList.map(task => (
        <Task
            key={task.id}
            task={task}
            onTaskDone={onTaskDone}
            onTaskStarred={onTaskStarred}
            onTaskDelete={onTaskDelete} />
    ));
    
    return <ul>{listTasks}</ul>;
};

export default TasksList;