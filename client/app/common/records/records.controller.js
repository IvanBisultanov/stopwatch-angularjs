class RecordsController {
  constructor(timestampProvider) {
    'ngInject';
    this.timestampProvider = timestampProvider;

    this.removeRecord = (index) => {
      timestampProvider.removeRecord(index);
    }
  }
}

export default RecordsController;
