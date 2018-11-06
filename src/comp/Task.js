import React from 'react';
import moment from 'moment';
import EditText from './EditText';

const Task = ({ task, onTaskAction, onKeyDown, onTaskDelete }) => {
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
                    onChange={e => onTaskAction(e, id, 'done')} />
                <span
                    className={`taskFlexGrow ${classTaskCompleted}`}>
                    {isWritable
                        ? <EditText
                            text={text}
                            id={id}
                            onTaskAction={onTaskAction}
                            onKeyDown={onKeyDown} />
                        : <span onClick={e => onTaskAction(e, id, 'click')}>{text.trim()}</span>
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
                    onChange={e => onTaskAction(e, id, 'star')} />
                <button
                    type='button'
                    onClick={() => onTaskDelete(id)}>
                    x
                </button>
            </form>
        </li>
    );
};

export default Task;