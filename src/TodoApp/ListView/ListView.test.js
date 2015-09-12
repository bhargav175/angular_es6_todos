import todoApp from '../index';
import todoModel from '../TodoModel';

describe('Controller: listController', function() {
  let $controller;

  beforeEach(angular.mock.module(todoApp));

  beforeEach(angular.mock.inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  it('Model is loaded', function() {
    expect(todoModel.todos.length).toBe(1);
  });

  it('List Controller : Model ', function() {
     var ctrl = $controller('listController');
     expect(ctrl.model).toBe(todoModel);
  });
  it('List Controller : onDelete ', function() {
     var ctrl = $controller('listController');
     ctrl.onDelete(0);
     expect(ctrl.model.todos.length).toBe(0);
  });

});