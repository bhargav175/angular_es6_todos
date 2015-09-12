export default class TodoDirective {
    constructor() {
        this.template = require('./ListItem.directive.html');
        this.restrict = 'E';
        this.scope = {
        	obj:'=',
            edit:'=',
            onDelete: '=',
            index: '='
        };
        this.link = function($scope,elem,attrs){
            $scope.editFn = function(){
                $scope.edit = true;
            };  
             $scope.doneEditFn = function(){
                $scope.edit = false;
            };  
             $scope.deleteFn = function(){
                console.log($scope.index);
                $scope.onDelete($scope.index);
            }; 
        };
    }

     static directiveFactory(){
        TodoDirective.instance = new TodoDirective();
        return TodoDirective.instance;
    }

}

