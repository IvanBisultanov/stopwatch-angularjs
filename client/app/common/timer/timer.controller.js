class TimerController {
  constructor(timestampProvider, $scope, $window, safeApplyFactory) {
    'ngInject';

    this.timestampProvider = timestampProvider;

    this.animate = () => {
      $window.requestAnimationFrame( this.animate );
      safeApplyFactory.safeApply($scope, timestampProvider.updateCurrentTime);
    };

    this.$onInit = () => {
      this.animate();
    }
  }

  isStopped() {
    return this.timestampProvider.timer.isStopped;
  }

  addTimestamp() {
    this.timestampProvider.addRecord();
  }

  toggleTimerState() {
    this.timestampProvider.timer.isStopped ? this.timestampProvider.startTimer() : this.timestampProvider.stopTimer();
  }

  resetTimer() {
    this.timestampProvider.resetTimer();
  }
}

export default TimerController;
