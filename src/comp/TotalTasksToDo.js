import React from 'react';

const TotalTasksToDo = props => {
	const {totalTasksToDo} = props;

	return (
	    <p className='totalTasks'>
	        I have <span className='emphasis'>{totalTasksToDo}</span> {totalTasksToDo === 1 ? 'thing' : 'things'} to do
	    </p>
	);
};

export default TotalTasksToDo;