exampleApp.directive('todoList', ['TodoService', function (TodoService) {
    return {
        template: '<ul><li ng-repeat="todo in todoList">{{todo}}</li></ul>',
        replace: true,
        restrict: 'E',
        link: function postLink(scope, iElement, iAttrs) {
            scope.todoList = TodoService.getTodoList();
        }
    };
}])
