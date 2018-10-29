import React from 'react';

const NewTaskBar = props => {
    const {newTask, onChange, onAddNewTask } = props;

    return (
        <form className='flexRow'>
            <input 
            	className='newTask'
            	name='newTask'
            	type='text'
            	placeholder='I need to...'
            	value={newTask}
            	onChange={onChange} />
            <button className='addBtn' type='button' onClick={onAddNewTask}>ADD</button>
        </form>
    );
};

export default NewTaskBar;