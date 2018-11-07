import React from 'react';

const EditText = ({ dueOn, id, onTaskAction, onKeyDown }) => (
    <input
        className='editDate'
        type='date'
        value={dueOn}
        onChange={e => onTaskAction(e, id, 'editDate')}
        onBlur={e => onTaskAction(e, id, 'saveDate')}
        onKeyDown={e => onKeyDown(e, id, 'keyDownEditDate')}
        autoFocus />
);

export default EditText;