import angular from 'angular';

// this is a nice way to create components
class FirstComponentClass {


  // @ngInject
  constructor($scope, WebapiService) {
    this.name = 'World';
    this.WebapiService = WebapiService;
    this.errorMessage = '';
    this.dataFromServer = null;

  }


  $onInit() {
    console.log('on init called on body');
    this.loading = true;
    this.WebapiService
      .getValue()
      .then(result => {
        console.log(result);
        this.dataFromServer = result.data;
      }, error => {
        this.errorMessage = error;
        console.error(this.errorMessage);
      })
      .finally(() => {
        this.loading = false;
      });
  }

}

// here you start the component in the same module, in this case  AnimalApp.
angular.module('AnimalApp').component('firstComponent', {
  template: require('./firstComponent.html'),
  bindings: {},
  controllerAs: '$ctrl',
  controller: FirstComponentClass
});
