import React from 'react';
import Task from './Task';

const TasksList = ({ userPreferenceToDoList, onTaskDone, onTaskClicked, onTaskEdit, onSaveEditedTask, onTaskStarred, onTaskDelete }) => {
    const listTasks = userPreferenceToDoList.map(task => (
        <Task
            key={task.id}
            task={task}
            onTaskDone={onTaskDone}
            onTaskClicked={onTaskClicked}
            onTaskEdit={onTaskEdit}
            onSaveEditedTask={onSaveEditedTask}
            onTaskStarred={onTaskStarred}
            onTaskDelete={onTaskDelete} />
    ));
    
    return <ul>{listTasks}</ul>;
};

export default TasksList;