import React from 'react';

const Task = props => {
    const { task, onTaskDone, onTaskStarred, onTaskDelete } = props;
    const { done, starred, id } = task;
    const classTaskCompleted = done ? 'taskCompleted' : 'taskNotCompleted';

    return (
        <li>
            <form className='flexRow'>
                <input 
                    type='checkbox'
                    checked={done}
                    onChange={() => onTaskDone(id)} />
                <span
                    className={`taskFlexGrow ${classTaskCompleted}`}>
                    {task.task}
                </span>
                <input
                    className='star'
                    type='checkbox'
                    checked={starred}
                    onChange={() => onTaskStarred(id)} />
                <button
                    type='button'
                    onClick={e => onTaskDelete(e, id)}>
                    x
                </button>
            </form>
        </li>
    );
};

export default Task;