import React from 'react';
import emojis from '../lib/emojis';

const emojisQty = emojis.length;

const TotalTasksToDo = ({totalTasksToDo}) => {
	const anythingToDo = totalTasksToDo === 0 ? 'Nothing' : totalTasksToDo;
	const thingOrThings = totalTasksToDo === 0 ? '' : (totalTasksToDo === 1 ? 'thing' : 'things');
	const displayEmoji = totalTasksToDo < emojisQty ? emojis[totalTasksToDo] : emojis[emojisQty - 1];

	return <span className='totalTasks'>{anythingToDo} {thingOrThings} to do {displayEmoji}</span>;
};

export default TotalTasksToDo;