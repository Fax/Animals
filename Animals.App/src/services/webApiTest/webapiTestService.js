import angular from 'angular';

// this is the URL used by the visual studio server
const APIURL = "http://localhost:63733"

class WebapiService {

  constructor($http) {
    this.$http = $http;
  }

  getValue() {
    return this.$http
      .get(APIURL+'/api/values')
  }

}


angular.module('AnimalApp').service('WebapiService',WebapiService);
