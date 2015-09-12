import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './TodoApp.routes';
import ListController from './ListView/List.controller';
import ListDirective from './ListView/directives/List.directive';
import AddTodoItemController from './AddTodoItem/AddTodoItem.controller';
import ListItem from './AddTodoItem/directives/ListItem.directive';
import Filter from './Filter';


export default angular.module('app.todoList', [uirouter])
  .config(routing)
  .controller('listController', ListController)
  .controller('addTodoItemController', AddTodoItemController)
  .filter('completed',Filter.completed)
  .filter('incomplete',Filter.incomplete)
  .directive('todoList',ListDirective.directiveFactory)
  .directive('listItem',ListItem.directiveFactory)
  .name;