var accordion = {

  templateUrl: './accordion.html',
  transclude: {
    title: 'ul',
    content: 'div'
  }
};

angular
  .module('components.utils')
  .component('accordion', accordion)
  ;
