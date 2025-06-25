
function findMatching(drivers, searchString) {
  
  const lowerCaseSearchString = searchString.toLowerCase();

  return drivers.filter(driverName => {
 
    return driverName.toLowerCase() === lowerCaseSearchString;
  });
}


function fuzzyMatch(drivers, searchString) {
 
  const lowerCaseSearchString = searchString.toLowerCase();

 
  return drivers.filter(driverName => {
  
    return driverName.toLowerCase().startsWith(lowerCaseSearchString);
  });
}


function matchName(drivers, searchString) {

  const lowerCaseSearchString = searchString.toLowerCase();

 
  return drivers.filter(driverObject => {
  
    return driverObject.name.toLowerCase() === lowerCaseSearchString;
  });
}


const names1 = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby', 'bobby'];
console.log("findMatching('Bobby'):", findMatching(names1, 'Bobby'));

console.log("findMatching('Susan'):", findMatching(names1, 'Susan'));

const names2 = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
console.log("fuzzyMatch('Sa'):", fuzzyMatch(names2, 'Sa'));

console.log("fuzzyMatch('y'):", fuzzyMatch(names2, 'y'));

const driverObjects = [
  { name: 'Bobby', hometown: 'Pittsburgh' },
  { name: 'Sammy', hometown: 'New York' },
  { name: 'Sally', hometown: 'Cleveland' },
  { name: 'Annette', hometown: 'Los Angeles' },
  { name: 'Bobby', hometown: 'Tampa Bay' }
];
console.log("matchName('Bobby'):", matchName(driverObjects, 'Bobby'));


