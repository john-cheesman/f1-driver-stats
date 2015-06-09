export function driverSearchFactory(config, $http) {
    return {
        getDriverList: getDriverList
    };

    function getDriverList() {
        return $http.get(`${config.apiUrl}drivers.json?limit=1000`);
    }
}
