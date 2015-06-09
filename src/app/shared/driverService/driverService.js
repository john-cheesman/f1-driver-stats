export function driverService() {
    this.id = '';
    this.fullName = '';
    this.dob = '';
    this.nationality = '';

    this.update = (driver) => {
        this.id = driver.driverId;
        this.fullName = `${driver.givenName} ${driver.familyName}`;
        this.dob = driver.dateOfBirth;
        this.nationality = driver.nationality;
    }
}
