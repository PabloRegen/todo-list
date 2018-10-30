export const updateTasksList = (todoList, viewValue, orderByValue, searchValue) => {
    let updatedTasksList;
    
    if (viewValue === 'current') {
        updatedTasksList = todoList.filter(task => !task.done);
    } else if (viewValue === 'completed') {
        updatedTasksList = todoList.filter(task => task.done);
    } else if (viewValue === 'starred') {
        updatedTasksList = todoList.filter(task => task.starred);
    } else {
        updatedTasksList = todoList;
    }
    
    if (orderByValue === 'newestFirst') {
        updatedTasksList = updatedTasksList.sort((a, b) => b.postedOn - a.postedOn);
    } else {
        updatedTasksList = updatedTasksList.sort((a, b) => a.postedOn - b.postedOn);
    }
    
    if (searchValue.trim !== '') {
        updatedTasksList = updatedTasksList.filter(task => task.task.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1);
    }
    
    return updatedTasksList;
};