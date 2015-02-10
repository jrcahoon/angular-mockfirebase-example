exampleApp.factory('TodoService', [function () {
    var todoList = ['Wash the dog', 'Vacuum the cat'];
    return {
        addTodo: function (todo) {
            todoList.push(todo);
        },
        getTodoList: function () {
            return todoList;
        }
    };
}])
