import React from 'react';
import moment from 'moment';

const Task = props => {
    const { task, onTaskDone, onTaskStarred, onTaskDelete } = props;
    const { done, dueOn, starred, id } = task;
    const classTaskCompleted = (done ? 'taskCompleted' : '');
    const dueOnText = (dueOn === '' ? '' : moment(dueOn, 'YYYY-MM-DD').calendar().split(' at')[0]);
    const classDueToday = (dueOnText === 'Today' ? 'dueToday' : '');

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
                <span
                    className={`${classTaskCompleted} ${classDueToday}`}>
                    {dueOnText}
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