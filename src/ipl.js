// importing csvToJson Function
let csvToJson = require('./csvToJson');

//converting matches.csv to json

let matchesData = csvToJson('../data/matches.csv');
//converting deliveries.csv to json
let deliveryData = csvToJson('../data/deliveries.csv');


// Task 
const getNoOfMatchesPlayed = () => {
  //write your code here
}
const getNoOfMatchesWonPerTeamPerYear = () => {
  //write your code here
}
const getExtraRunsPerTeamForYear = () => {
 //write your code here
}
const getEconomicalBowlersForYear = () => {
 //write your code here
}


//Function Exports
module.exports.getNoOfMatchesPlayed = getNoOfMatchesPlayed;
module.exports.getNoOfMatchesWonPerTeamPerYear = getNoOfMatchesWonPerTeamPerYear;
module.exports.getExtraRunsPerTeamForYear = getExtraRunsPerTeamForYear;
module.exports.getEconomicalBowlersForYear = getEconomicalBowlersForYear;
