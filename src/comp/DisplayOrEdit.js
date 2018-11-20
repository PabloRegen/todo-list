import React from 'react';
import moment from 'moment';
import EditTask from './EditTask';

const textCalling = {
    className: 'textContent',
    onClick: 'clickText'
};

const noteCalling = {
    className: 'noteContent',
    onClick: 'clickNote'
};

const dateCalling = {
    className: 'dateContent',
    onClick: 'clickDate'
};

const DisplayOrEdit = (calling, task, onTaskAction, onKeyDown) => {
    const { id, text, note, dueOn, editingText, editingNote, editingDate } = task;
    const dueOnCalendarStyle = (dueOn === '' ? '' : moment(dueOn, 'YYYY-MM-DD').calendar().split(' at')[0]);

    const whoIsCalling = calling => {
        if (calling === 'theText') return { ...textCalling, content: text, editing: editingText };
        if (calling === 'theNote') return { ...noteCalling, content: note, editing: editingNote };
        if (calling === 'theDate') return { ...dateCalling, content: dueOnCalendarStyle, editing: editingDate };
    }

    const displayEdit = whoIsCalling(calling);

    if (displayEdit.editing) {
        return (
            <EditTask
                changing={calling}
                task={task}
                onTaskAction={onTaskAction}
                onKeyDown={onKeyDown} />
        );
    } else {
        return (
            <span
                className={`${displayEdit.className} pointer`}
                onClick={e => onTaskAction(e, id, displayEdit.onClick)}>
                {displayEdit.content || ':'}
            </span>
        );
    }
}

export default DisplayOrEdit;