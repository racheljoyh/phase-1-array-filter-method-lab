// Code your solution here


function findMatching (drivers, name) {
  return drivers.filter( (possibleMatch) => (possibleMatch.toLowerCase() === name.toLowerCase()) 
  )
}

function fuzzyMatch (drivers, string) {
  return drivers.filter((possibleMatch) => possibleMatch.toLowerCase().indexOf(string.toLowerCase()) === 0 );
}

function matchName (drivers, newString) {
  return drivers.filter((possibleMatch) => possibleMatch.name === newString);
}