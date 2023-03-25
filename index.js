// Code your solution here
function findMatching(array, string) {
    const matchingDrivers = array.filter(item => item.toLowerCase() === string.toLowerCase());
    return matchingDrivers;
}

function fuzzyMatch(array, string) {
    const matchingDrivers = array.filter(item => item.startsWith(string));
    return matchingDrivers;
}

function matchName(array, string) {
    const matchingDrivers = array.filter(item => item.name === string);
    return matchingDrivers;
}