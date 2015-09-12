export default class TodoDirective {
    constructor() {
        this.template = require('./List.directive.html');
        this.restrict = 'E';
        this.scope = {
        	listItems:'=',
            onDelete:'='
        };
   
    }

     static directiveFactory(){
        TodoDirective.instance = new TodoDirective();
        return TodoDirective.instance;
    }

}

