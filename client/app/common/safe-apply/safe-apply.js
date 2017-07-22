import angular from 'angular';
import SafeApplyFactory from './safe-apply.factory';

let safeApplyModule = angular.module('safe-apply', [])

.factory('safeApplyFactory', SafeApplyFactory)

.name;

export default safeApplyModule;
