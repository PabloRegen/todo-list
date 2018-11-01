import React from 'react';

const EditText = ({ text, id, onTaskEdit, onSaveEditedTask }) => (
    <span>
        <input
            type='text'
            value={text}
            onChange={e => onTaskEdit(e, id)} />
        <button
            type='button'
            onClick={e => onSaveEditedTask(e, id)}>
            Save
        </button>
    </span>
);

export default EditText;