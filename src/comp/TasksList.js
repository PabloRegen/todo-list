import React from 'react';
import Task from './Task';

const TasksList = props => {
	const { userPreferenceToDoList, onTaskDone, onTaskDelete} = props;

    const listTasks = userPreferenceToDoList.map(task => (
        <Task
            key={task.id}
            task={task}
            onTaskDone={onTaskDone}
            onTaskDelete={onTaskDelete} />
    ));
    
    return <ul>{listTasks}</ul>;
};

export default TasksList;