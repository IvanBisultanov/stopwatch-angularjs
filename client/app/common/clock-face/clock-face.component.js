import template from './clock-face.html';
import controller from './clock-face.controller';
import './clock-face.scss';

let clockFaceComponent = {
  bindings: {
    timestamp: '<',
    timer: '<',
  },
  controllerAs: 'vm',
  template,
  controller
};

export default clockFaceComponent;
