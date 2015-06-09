import angular from 'angular';
import config from './config';

angular
    .module('f1-driver-stats', [])
    .constant('config', config)
    .run(($rootScope) => {
        $rootScope.config = config;
    });

import './shared/driverService';
import './components/driverSearch';
import './components/driverSummary';
