import React from 'react';

const NewTaskBar = ({ newTask, dueOn, onChange, onKeyDown }) => {
    return (
        <form
            className='flexRow'
            onKeyDown={e => onKeyDown(e, undefined, 'keyDownToAddNewTask')}>
            <input
            	className='newTask taskFlexGrow'
            	name='newTask'
            	type='text'
            	placeholder='I need to...'
            	value={newTask}
            	onChange={onChange} />
            <input 
                className='dueOn'
                name='dueOn'
                type='date'
                value={dueOn}
                onChange={onChange} />
        </form>
    );
};

export default NewTaskBar;