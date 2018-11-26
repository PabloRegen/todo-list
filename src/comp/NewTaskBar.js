import React from 'react';

const NewTaskBar = ({ newTask, dueOn, onChange, onKeyDown, onAddNewTask }) => {
    return (
        <form
            className='flexRow'
            onKeyDown={e => onKeyDown(e, undefined, 'keyDownToAddNewTask')}>
            <input
                className='newTask'
            	name='newTask'
            	type='text'
            	placeholder='I need to...'
            	value={newTask}
            	onChange={onChange} />
            <span
                className='due'>
                Due:
            </span>
            <input
                className='dueOn fontFamily'
                name='dueOn'
                type='date'
                value={dueOn}
                onChange={onChange} />
            <button className='addBtn' type='button' onClick={onAddNewTask}>ADD</button>
        </form>
    );
};

export default NewTaskBar;