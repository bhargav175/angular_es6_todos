routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      views:{
      	'list' : {
			template: require('./ListView/List.html'),
			controller: 'listController',
			controllerAs: 'list'
      	},
      	'addTodoItem' :{
			template: require('./AddTodoItem/AddTodoItem.html'),
			controller: 'addTodoItemController',
			controllerAs: 'todoItem'
      	}
      }
    });
}