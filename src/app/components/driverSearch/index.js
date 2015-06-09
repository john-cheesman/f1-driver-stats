import angular from 'angular';
import {driverSearchController} from './driverSearchController';
import {driverSearchFactory} from './driverSearchFactory';

driverSearchController.$inject = ['driverSearchFactory', 'driverService'];
driverSearchFactory.$inject = ['config', '$http'];

angular
    .module('f1-driver-stats')
    .controller('driverSearchController', driverSearchController)
    .factory('driverSearchFactory', driverSearchFactory);


