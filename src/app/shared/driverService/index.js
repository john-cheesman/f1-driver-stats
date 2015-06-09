import angular from 'angular';
import {driverService} from './driverService';

angular
    .module('f1-driver-stats')
    .service('driverService', driverService);
