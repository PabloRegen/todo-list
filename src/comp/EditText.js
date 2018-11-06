import React from 'react';

const EditText = ({ text, id, onTaskEdit, onKeyDown, onSaveEditedTask }) => (
    <input
        className='editText'
        type='text'
        value={text}
        onChange={e => onTaskEdit(e, id)}
        onKeyDown={e => onKeyDown(e, id)}
        onBlur={e => onSaveEditedTask(e, id)} 
        autoFocus />
);

export default EditText;