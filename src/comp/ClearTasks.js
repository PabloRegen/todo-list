import React from 'react';

const ClearTasks = props => {
    const { onClearCompletedTasks, onClearAllTasks } = props;

    return (
        <div className='flexRow clearBtns'>
            <button 
            	className='clearBtn'
            	type='submit'
            	onClick={onClearCompletedTasks}>
            	Clear completed
            </button>
            <button
            	className='clearBtn'
            	type='submit'
            	onClick={onClearAllTasks}>
            	Clear all
            </button>
        </div>
    );
};

export default ClearTasks;