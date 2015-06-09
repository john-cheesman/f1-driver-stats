export function driverSearchController(driverSearchFactory, driverService) {
    let vm;

    vm = this;

    vm.driver = null;
    vm.driverList = [];
    vm.selectDriver = selectDriver;

    function getDriverList() {
        driverSearchFactory
            .getDriverList()
            .success((data) => {
                vm.driverList = data.MRData.DriverTable.Drivers;
            });
    }

    function selectDriver(driver) {
        driverService.update(driver);
        console.log(driverService);
    }

    getDriverList();
}
