export const amountTasksToDo = todoList => {
	return todoList.filter(task => task.done === false).length;
};