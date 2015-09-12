import TodoModel from "../TodoModel.js";

export default class TodoListController {
  constructor() {
    this.model = TodoModel;
    var that = this;
    this.onDelete = function(index){
    	that.model.removeTodoAtIndex(index);
    };

   }


}