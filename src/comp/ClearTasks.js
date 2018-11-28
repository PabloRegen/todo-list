import React from 'react';

const ClearTasks = ({ onClearCompletedTasks, onClearAllTasks }) => {
    return (
        <div className='flexRow'>
            <button
                className='clearBtn pointer'
            	type='button'
            	onClick={onClearCompletedTasks}>
            	Clear completed
            </button>
            <button
                className='clearBtn pointer'
            	type='button'
            	onClick={onClearAllTasks}>
            	Clear all
            </button>
        </div>
    );
};

export default ClearTasks;