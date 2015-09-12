export default {
	todos : [{
		text: "Finish Evernym Assignment",
		status: 'completed'
	}],
	addTodo : function(todo){
		this.todos.push(todo);
	},
	removeTodo : function(todo){
		var i = this.getIndexOf(todo);
		i >= 0 ? this.todos.splice(i,1) : i = null;
	},
	removeTodoAtIndex : function(index){
		if(index<this.todos.length && index>=0){
			this.todos.splice(index,1);	
		}
	},
	getIndexOf : function(todo){
		return  this.todos.indexOf(todo);
	},
	completeTodo: function(index) {
		if(this.todos.length>index){
			this.todos[index].status = 'completed';
		}
	},
	undoCompleteTodo: function(index) {
		if(this.todos.length>index){
			this.todos[index].status = 'inCompleted';
		}
	}
};