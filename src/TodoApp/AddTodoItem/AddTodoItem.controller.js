import TodoModel from "../TodoModel.js";

export default class AddTodoItemController {
  constructor() {
    this.model = TodoModel;
	this.todo = this.newTodo();
   }
   newTodo(){
   	return {
   		text : null,
   		status : 'incomplete'
   	};
   }
 

   save(todo){
   		if(todo)this.model.addTodo(todo);
   		this.todo=this.newTodo();
    }

}
