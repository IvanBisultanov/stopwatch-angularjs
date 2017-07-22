import angular from 'angular';
import clockFaceComponent from './clock-face.component';

let clockFaceModule = angular.module('clock-face', [])

.component('clockFace', clockFaceComponent)

.name;

export default clockFaceModule;
