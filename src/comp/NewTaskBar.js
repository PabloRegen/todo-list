import React from 'react';

const NewTaskBar = props => {
    const {newTask, dueOn, onChange, onAddNewTask } = props;

    return (
        <form className='flexRow'>
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
                // placeholder='due...'
                value={dueOn}
                onChange={onChange} />
            <button className='addBtn' type='button' onClick={onAddNewTask}>ADD</button>
        </form>
    );
};

export default NewTaskBar;