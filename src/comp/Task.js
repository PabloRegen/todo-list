import React from 'react';

const Task = props => {
    const { task, onTaskDone, onTaskDelete } = props;
    const { done, id } = task;

    return (
        <li className={done ? 'taskCompleted' : 'taskNotCompleted'}>
            <form className='flexRow'>
                <input
                    type='checkbox'
                    checked={done}
                    onChange={() => onTaskDone(id)} />
                <span className='taskFlexGrow'>{task.task}</span>
                <button type='button' onClick={e => onTaskDelete(e, id)}>x</button>
            </form>
        </li>
    );
};

export default Task;