class ClockFaceController {
  constructor(timestampProvider) {
    'ngInject';
    this.timestampProvider = timestampProvider;
  }

  getMinutes(digit = 0) {
    const minutes = new Date(this.timestamp).getMinutes();
    if (digit === 0) {
      return minutes > 9 ? minutes.toString()[0] : 0;
    }
    return minutes > 9 ? minutes.toString()[1] : minutes;
  }

  getSeconds(digit = 0) {
    const seconds = new Date(this.timestamp).getSeconds();
    if (digit === 0) {
      return seconds > 9 ? seconds.toString()[0] : 0;
    }
    return seconds > 9 ? seconds.toString()[1] : seconds;
  }

  getMs(digit = 0) {
    const ms = Math.floor(new Date(this.timestamp).getMilliseconds() / 10);
    if (digit === 0) {
      return ms > 9 ? ms.toString()[0] : 0;
    }
    return ms > 9 ? ms.toString()[1] : ms;
  }

}

export default ClockFaceController;
