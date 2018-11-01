import React from 'react';

const TotalTasksToDo = ({totalTasksToDo}) => {
	return (
	    <p className='totalTasks'>
	        I have <span className='emphasis'>{totalTasksToDo}</span> {totalTasksToDo === 1 ? 'thing' : 'things'} to do
	    </p>
	);
};

export default TotalTasksToDo;