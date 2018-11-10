import React from 'react';

const textChanging = {
	className: 'editText',
	type: 'text',
	onChange: 'editText',
	onBlur: 'saveText',
	onKeyDown: 'keyDownToEditText'
};

const noteChanging = {
	className: 'editNote',
	type: 'text',
	onChange: 'editNote',
	onBlur: 'saveNote',
	onKeyDown: 'keyDownToEditNote'
};

const dateChanging = {
	className: 'editDate',
	type: 'date',
	onChange: 'editDate',
	onBlur: 'saveDate',
	onKeyDown: 'keyDownToEditDate'
};

const EditTask = ({ changing, task, onTaskAction, onKeyDown }) => {
	const { text, note, dueOn, id } = task;

	const whatIsChanging = changing => {
		if (changing === 'theText') return { ...textChanging, value: text };
		if (changing === 'theNote') return { ...noteChanging, value: note };
		if (changing === 'theDate') return { ...dateChanging, value: dueOn};
	};

	const change = whatIsChanging(changing);

	return (
	    <input
	        className={ `${change.className} fontFamily` }
	        type={ change.type }
	        value={ change.value }
	        onChange={ e => onTaskAction(e, id, change.onChange) }
	        onBlur={ e => onTaskAction(e, id, change.onBlur) }
	        onKeyDown={ e => onKeyDown(e, id, change.onKeyDown) }
	        autoFocus />
	);
};

export default EditTask;