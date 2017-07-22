import angular from 'angular';
import TimestampProvider from './timestamp.provider';

let timestampModule = angular.module('timestamp', [])

.provider('timestampProvider', TimestampProvider)

.name;

export default timestampModule;
