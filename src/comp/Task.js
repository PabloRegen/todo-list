import React from 'react';
import moment from 'moment';
import EditText from './EditText';
import EditDate from './EditDate';

const Task = ({ task, onTaskAction, onKeyDown, onTaskDelete }) => {
    const { text, done, dueOn, starred, id, editingText, editingDate } = task;
    const classTaskCompleted = (done ? 'taskCompleted' : '');
    const dueOnText = (dueOn === '' ? '' : moment(dueOn, 'YYYY-MM-DD').calendar().split(' at')[0]);
    const classDueToday = (dueOnText === 'Today' ? 'dueToday' : '');

    return (
        <li>
            <form className='flexRow'>
                <input
                    className='check pointer'
                    type='checkbox'
                    checked={done}
                    onChange={e => onTaskAction(e, id, 'done')} />
                <span
                    className={`taskFlexGrow ${classTaskCompleted}`}>
                    {editingText
                        ? <EditText
                            text={text}
                            id={id}
                            onTaskAction={onTaskAction}
                            onKeyDown={onKeyDown} />
                        : <div className='content pointer' onClick={e => onTaskAction(e, id, 'click')}>{text.trim() || '-'}</div>
                    }
                </span>
                <span
                    className={`${classTaskCompleted} ${classDueToday}`}>
                    {editingDate
                        ? <EditDate
                            dueOn={dueOn}
                            id={id}
                            onTaskAction={onTaskAction}
                            onKeyDown={onKeyDown} />
                        : <span className='content pointer' onClick={e => onTaskAction(e, id, 'clickDate')}>{dueOnText || ':'}</span>
                    }
                </span>
                <input
                    className='star pointer'
                    type='checkbox'
                    checked={starred}
                    onChange={e => onTaskAction(e, id, 'star')} />
                <button
                    className='pointer'
                    type='button'
                    onClick={() => onTaskDelete(id)}>
                    x
                </button>
            </form>
        </li>
    );
};

export default Task;