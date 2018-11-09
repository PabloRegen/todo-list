import React from 'react';
import moment from 'moment';
import EditTask from './EditTask';

const Task = ({ task, onTaskAction, onKeyDown, onTaskDelete }) => {
    const { text, done, note, dueOn, starred, id, editingText, editingDate, editingNote, noteOpen } = task;
    const classTaskCompleted = (done ? 'taskCompleted' : '');
    const dueOnText = (dueOn === '' ? '' : moment(dueOn, 'YYYY-MM-DD').calendar().split(' at')[0]);
    const classDueToday = (dueOnText === 'Today' ? 'dueToday' : '');

    const noteOrEditNote = () => {
        if (editingNote) {
            return (
                <EditTask
                    changing='theNote'
                    note={note}
                    id={id}
                    onTaskAction={onTaskAction}
                    onKeyDown={onKeyDown} />
            );
        } else {
            return (
                <span
                    className='note pointer'
                    onClick={e => onTaskAction(e, id, 'clickNote')}>
                    {note || '->'}
                </span>
            );
        }
    }

    return (
        <li>
            <form>
                <div className='flexRow'>
                    <input
                        className='check pointer'
                        type='checkbox'
                        checked={done}
                        onChange={e => onTaskAction(e, id, 'done')} />
                    <button 
                        className='collapsible'
                        type='button'
                        onClick={e => onTaskAction(e, id, 'clickCollapsible')}/>
                    <span
                        className={`taskFlexGrow ${classTaskCompleted}`}>
                        {editingText
                            ? <EditTask
                                changing='theText'
                                text={text}
                                id={id}
                                onTaskAction={onTaskAction}
                                onKeyDown={onKeyDown} />
                            : <span
                                className='content pointer'
                                onClick={e => onTaskAction(e, id, 'click')}>
                                {text.trim() || '-'}
                            </span>
                        }
                    </span>
                    <span
                        className={`${classTaskCompleted} ${classDueToday}`}>
                        {editingDate
                            ? <EditTask
                                changing='theDate'
                                dueOn={dueOn}
                                id={id}
                                onTaskAction={onTaskAction}
                                onKeyDown={onKeyDown} />
                            : <span
                                className='content pointer'
                                onClick={e => onTaskAction(e, id, 'clickDate')}>
                                {dueOnText || ':'}
                            </span>
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
                </div>
                <div className={'collapse' + (noteOpen ? 'In' : '')}>
                    <div>
                        {noteOrEditNote()}
                    </div>
                </div>
            </form>
        </li>
    );
};

export default Task;