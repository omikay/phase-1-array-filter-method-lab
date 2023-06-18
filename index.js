// Code your solution here
function findMatching (drivers, driverName) {
    return drivers.filter(driver => driver.toUpperCase() === driverName.toUpperCase());
}

function fuzzyMatch (drivers, initial) {
    return drivers.filter(driver => driver.toUpperCase().startsWith(initial.toUpperCase()));
}

function matchName (drivers, name) {
    const upperName = name.toUpperCase();
    return drivers.filter(driver => driver.name.toUpperCase() === upperName);
}