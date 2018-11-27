import React from 'react';
import emojis from '../lib/emojis';

const emojisQty = emojis.length;

const TotalTasksToDo = ({totalTasksToDo}) => {
	const thingOrThings = totalTasksToDo === 1 ? 'thing' : 'things';
	const displayEmoji = totalTasksToDo < emojisQty ? emojis[totalTasksToDo] : emojis[emojisQty - 1];

	return (
	    <p className='totalTasks'>
	        I have <span className='emphasis'>{totalTasksToDo}</span> {thingOrThings} to do {displayEmoji}
	    </p>
	);
};

export default TotalTasksToDo;