export default function (timestampProvider) {
  'ngInject';

  return {
    link: () => {
      window.addEventListener('storage', (event) => {
        const newValue = JSON.parse(event.newValue);
        switch (event.key) {
          case 'currentTime':
            timestampProvider.setCurrentTime(newValue);
            break;
          case 'stopped':
            timestampProvider.stopTimer(newValue);
            break;
          case 'started':
            timestampProvider.startTimer(newValue);
            break;
          case 'reset':
            timestampProvider.resetTimer(true, newValue);
            break;
          case 'records':
            timestampProvider.setRecords(newValue);
            break;
        }
      });
    },
    scope: false,
    restrict: 'A'
  };

}
