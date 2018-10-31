import moment from 'moment';

export const updateTasksList = (todoList, viewValue, orderByValue, searchValue) => {
    let updatedTasksList;
    
    if (viewValue === 'current') {
        updatedTasksList = todoList.filter(task => !task.done);
    } else if (viewValue === 'completed') {
        updatedTasksList = todoList.filter(task => task.done);
    } else if (viewValue === 'starred') {
        updatedTasksList = todoList.filter(task => task.starred);
    } else if (viewValue === 'notStarred') {
        updatedTasksList = todoList.filter(task => !task.starred);
    } else if (viewValue === 'dated') {
        updatedTasksList = todoList.filter(task => task.dueOn);
    } else if (viewValue === 'notDated') {
        updatedTasksList = todoList.filter(task => !task.dueOn);
    } else {
        updatedTasksList = todoList;
    }
    
    if (orderByValue === 'newestFirst') {
        updatedTasksList = updatedTasksList.sort((a, b) => b.postedOn - a.postedOn);
    } else if (orderByValue === 'oldestFirst') {
        updatedTasksList = updatedTasksList.sort((a, b) => a.postedOn - b.postedOn);
    } else if (orderByValue === 'dueEarlier') {
        updatedTasksList = updatedTasksList.sort((a, b) => moment(a.dueOn) - moment(b.dueOn));
    } else {
        updatedTasksList = updatedTasksList.sort((a, b) => moment(b.dueOn) - moment(a.dueOn));
    }

    if (searchValue.trim !== '') {
        updatedTasksList = updatedTasksList.filter(task => task.task.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1);
    }
    
    return updatedTasksList;
};