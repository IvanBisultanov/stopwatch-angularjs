let SafeApplyFactory = function () {
  let safeApply = ($scope, fn) => {
    const phase = $scope.$root.$$phase;
    if (phase === '$apply' || phase === '$digest') {
      if (fn && typeof fn === 'function') {
        fn();
      }
    } else {
      $scope.$apply(fn);
    }
  };

  return { safeApply };
};

export default SafeApplyFactory;
