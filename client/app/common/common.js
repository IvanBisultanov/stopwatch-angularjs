import angular from 'angular';
import ClockFace from './clock-face/clock-face';
import Digit from './digit/digit';
import Records from './records/records';
import SafeApply from './safe-apply/safe-apply';
import Storage from './storage/storage';
import Timestamp from './timestamp/timestamp';
import Timer from './timer/timer';

let commonModule = angular.module('app.common', [
  ClockFace,
  Digit,
  Records,
  SafeApply,
  Storage,
  Timestamp,
  Timer,
])

.name;

export default commonModule;
