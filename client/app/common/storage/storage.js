import angular from 'angular';
import storage from './storage.directive';

let storageModule = angular.module('storage', [])

.directive({ storage })

.name;

export default storageModule;
