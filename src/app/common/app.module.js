angular
  .module('app', [
    'ui.router',
    'angular-loading-bar',
    'ui.bootstrap',
    'ui.bootstrap.tooltip',
    'ui.bootstrap.collapse'
  ])
  .run(function($transitions, cfpLoadingBar) {
    $transitions.onStart({}, cfpLoadingBar.start);
    $transitions.onSuccess({}, cfpLoadingBar.complete);
  });