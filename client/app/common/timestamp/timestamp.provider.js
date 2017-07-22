let TimestampProvider = function () {

  this.$get = () => {

    let self = this;

    self.addRecord = addRecord;
    self.removeRecord = removeRecord;
    self.setRecords = setRecords;

    self.resetTimer = resetTimer;
    self.startTimer = startTimer;
    self.stopTimer = stopTimer;
    self.toggleTimerState = toggleTimerState;

    self.setCurrentTime = setCurrentTime;
    self.updateCurrentTime = updateCurrentTime;

    function addRecord() {
      self.records.unshift(self.timer.currentTime);
      _updateRecordsInLS();
    }

    function removeRecord(index) {
      if (index < 0) return;
      self.records.splice(index, 1);
      _updateRecordsInLS();
    }

    function setRecords(records) {
      self.records = records;
    }

    function resetTimer(resetStorage = false, notEmitReset) {
      self.timer = {
        isStopped: true,
        currentTime: 0,
        startTimestamp: 0,
        lastStoppedTime: 0,
        isDelimitersVisible: true
      };
      self.records = [];
      !notEmitReset && localStorage.setItem('reset', Date.now());
      resetStorage && _resetStorage();
    }

    function startTimer(storageData) {
      self.timer.startTimestamp = storageData ? storageData : Date.now();
      self.timer.isStopped = false;
      localStorage.setItem('isStopped', false);
      localStorage.setItem('started', self.timer.startTimestamp);
    }

    function stopTimer(storageData) {
      self.timer.lastStoppedTime = storageData ? storageData : self.timer.currentTime;
      self.timer.isStopped = true;
      self.timer.isDelimitersVisible = true;
      localStorage.setItem('isStopped', true);
      localStorage.setItem('stopped', self.timer.lastStoppedTime);
    }

    function toggleTimerState() {
      self.timer.isStopped = !self.timer.isStopped;
    }

    function setCurrentTime(value) {
      if (self.timer.isStopped) return;
      self.timer.currentTime = +value;
    }

    function updateCurrentTime() {
      if (self.timer.isStopped) return;
      self.timer.currentTime = self.timer.lastStoppedTime + Date.now() - self.timer.startTimestamp;
      localStorage.setItem('currentTime', self.timer.currentTime);
      self.timer.isDelimitersVisible = self.timer.currentTime % 1000 >= 500;
    }

    function _checkStorage() {
      let isStopped = JSON.parse(localStorage.getItem('isStopped'));
      self.timer.isStopped = typeof(isStopped) === 'boolean' ? isStopped : true;
      self.timer.currentTime = JSON.parse(localStorage.getItem('currentTime')) || 0;
      self.timer.startTimestamp = JSON.parse(localStorage.getItem('started')) || 0;
      self.timer.lastStoppedTime = JSON.parse(localStorage.getItem('stopped')) || 0;
      self.records = JSON.parse(localStorage.getItem('records')) || [];
      if (!self.timer.isStopped) {
        self.timer.currentTime = self.timer.lastStoppedTime + Date.now() - self.timer.startTimestamp;
      }
    }

    function _resetStorage() {
      ['isStopped', 'currentTime', 'started', 'stopped', 'records'].map(item => localStorage.removeItem(item));
    }

    function _updateRecordsInLS() {
      localStorage.setItem('records', JSON.stringify(self.records));
    }

    resetTimer(false, true);
    _checkStorage();

    return {
      get timer() {
        return self.timer;
      },
      get records() {
        return self.records;
      },
      addRecord,
      removeRecord,
      setRecords,
      resetTimer,
      setCurrentTime,
      toggleTimerState,
      startTimer,
      stopTimer,
      updateCurrentTime
    }
  };
};

export default TimestampProvider;
