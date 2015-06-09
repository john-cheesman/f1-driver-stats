import angular from 'angular';
import {driverSummaryController} from './driverSummaryController';

driverSummaryController.$inject = ['driverService'];

angular
    .module('f1-driver-stats')
    .controller('driverSummaryController', driverSummaryController);
