import angular from 'angular';
import timerComponent from './timer.component';

let timerModule = angular.module('timer', [])

.component('timer', timerComponent)

.name;

export default timerModule;
