import angular from 'angular';
import digitComponent from './digit.component';

let digitModule = angular.module('digit', [])

.component('digit', digitComponent)

.name;

export default digitModule;
