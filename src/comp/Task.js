import React from 'react';
import moment from 'moment';
import DisplayOrEdit from './DisplayOrEdit';

const Task = ({ task, onTaskAction, onKeyDown, onTaskDelete }) => {
    const { done, dueOn, starred, id, noteOpen } = task;
    const classTaskCompleted = (done ? 'taskCompleted' : '');
    const dueOnText = (dueOn === '' ? '' : moment(dueOn, 'YYYY-MM-DD').calendar().split(' at')[0]);
    const classDueToday = (dueOnText === 'Today' ? 'dueToday' : '');

    return (
        <li>
            <form>
                <div className='flexRow'>
                    <input
                        className='check pointer'
                        type='checkbox'
                        checked={done}
                        onChange={e => onTaskAction(e, id, 'taskDone')} />
                    <button 
                        className={`collapsibleButton ${noteOpen ? 'showing' : 'hiding'}`}
                        type='button'
                        onClick={e => onTaskAction(e, id, 'clickCollapsible')} />
                    <span
                        className={`taskFlexGrow ${classTaskCompleted}`}>
                        {DisplayOrEdit('theText', task, onTaskAction, onKeyDown)}
                    </span>
                    <span
                        className={`${classTaskCompleted} ${classDueToday}`}>
                        {DisplayOrEdit('theDate', task, onTaskAction, onKeyDown)}
                    </span>
                    <input
                        className='star pointer'
                        type='checkbox'
                        checked={starred}
                        onChange={e => onTaskAction(e, id, 'taskStarred')} />
                    <button
                        className='deleteButton pointer'
                        type='button'
                        onClick={() => onTaskDelete(id)}>
                        x
                    </button>
                </div>
                <div className={`noteSection ${noteOpen ? '' : 'hiding'}`}>
                    {DisplayOrEdit('theNote', task, onTaskAction, onKeyDown)}
                </div>
            </form>
        </li>
    );
};

export default Task; 