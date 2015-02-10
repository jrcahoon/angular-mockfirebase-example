exampleApp.directive('todoEntryForm',['TodoService', function(TodoService){
    return {
        template: '<form class="todoEntryForm"><input type="text" ng-model="entry" id=""/><input type="submit" value="Add Todo" ng-click="addTodo()" value=""/></form>',
        restrict: 'E',
        replace: true,
        link: function postLink(scope,iElements, iAttrs){
            scope.addTodo = function () {
                TodoService.addTodo(scope.entry);
            }
        }
    }
}]);
