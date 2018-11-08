import React from 'react';

const EditText = ({ text, id, onTaskAction, onKeyDown }) => (
    <input
        className='editText fontFamily'
        type='text'
        value={text}
        onChange={e => onTaskAction(e, id, 'edit')}
        onBlur={e => onTaskAction(e, id, 'save')}
        onKeyDown={e => onKeyDown(e, id, 'keyDownToEditText')}
        autoFocus />
);

export default EditText;