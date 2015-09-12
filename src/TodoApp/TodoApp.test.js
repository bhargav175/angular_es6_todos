import todoModel from './TodoModel';

describe('Model: Todo Model', function() {
 

  it('Model is loaded', function() {
    expect(todoModel.todos.length).toBeDefined();
  });

 
});