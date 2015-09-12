import 'bootstrap/dist/css/bootstrap.css';
import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './app.config';
import todoApp from './TodoApp';


angular.module('app', [uirouter,todoApp])
.config(routing);