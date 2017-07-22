import angular from 'angular';
import recordsComponent from './records.component';

let recordsModule = angular.module('records', [])

.component('records', recordsComponent)

.name;

export default recordsModule;
