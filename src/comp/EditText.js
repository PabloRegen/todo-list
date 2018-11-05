import React from 'react';

const EditText = ({ text, id, onTaskEdit, onSaveEditedTask }) => (
    <input
        className='editText'
        type='text'
        value={text}
        onChange={e => onTaskEdit(e, id)}
        onBlur={e => onSaveEditedTask(e, id)} 
        autoFocus />
);

export default EditText;