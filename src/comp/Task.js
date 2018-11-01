import React from 'react';
import moment from 'moment';
import EditText from './EditText';

const Task = ({ task, onTaskDone, onTaskClicked, onTaskEdit, onSaveEditedTask, onTaskStarred, onTaskDelete }) => {
    const { text, done, dueOn, starred, id, isWritable } = task;
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
                    {isWritable
                        ? <EditText
                            text={text}
                            id={id}
                            onTaskEdit={onTaskEdit}
                            onSaveEditedTask={onSaveEditedTask} />
                        : <span onClick={() => onTaskClicked(id)}>{text}</span>
                    }
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