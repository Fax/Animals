require('./firstComponent.scss');
import angular from 'angular';


// this is a nice way to create components
class FirstComponentClass {


  // @ngInject
  constructor($scope, WebapiService) {
    this.name = 'World';
    this.WebapiService = WebapiService;
    this.errorMessage = '';
    this.dataFromServer = null;
    this.options = {
      chart: {
        type: 'discreteBarChart',
        height: 450,
        margin: {
          top: 20,
          right: 20,
          bottom: 60,
          left: 55
        },
        x: function (d) {
          return d.label;
        },
        y: function (d) {
          return d.value;
        },
        showValues: true,
        valueFormat: function (d) {
          return d3.format(',.4f')(d);
        },
        transitionDuration: 500,
        xAxis: {
          axisLabel: 'X Axis'
        },
        yAxis: {
          axisLabel: 'Y Axis',
          axisLabelDistance: 30
        }
      }
    };
    this.data = [{
      key: "Cumulative Return",
      values: [{
          "label": "A",
          "value": -29.765957771107
        },
        {
          "label": "B",
          "value": 0
        },
        {
          "label": "C",
          "value": 32.807804682612
        },
        {
          "label": "D",
          "value": 196.45946739256
        },
        {
          "label": "E",
          "value": 0.19434030906893
        },
        {
          "label": "F",
          "value": -98.079782601442
        },
        {
          "label": "G",
          "value": -13.925743130903
        },
        {
          "label": "H",
          "value": -5.1387322875705
        }
      ]
    }];
  }

  click() {
    this.name = "faxette"
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
  bindings: {
    name: "@",
  },
  controllerAs: '$ctrl',
  controller: FirstComponentClass
});