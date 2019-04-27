const fs = require('fs');
const functions = require('./ipl');
const getNoOfMatchesPlayed = functions.getNoOfMatchesPlayed;
const getNoOfMatchesWonPerTeamPerYear = functions.getNoOfMatchesWonPerTeamPerYear;
const getExtraRunsPerTeamForYear = functions.getExtraRunsPerTeamForYear;
const getEconomicalBowlersForYear = functions.getEconomicalBowlersForYear;

let jsonData = {};
jsonData["MatchesPlayed"] = getNoOfMatchesPlayed();
jsonData["MatchesWonPerTeamPerYear"] = getNoOfMatchesWonPerTeamPerYear();
jsonData["ExtraRunsPerTeam"] = getExtraRunsPerTeamForYear();
jsonData["EconomicalBowler"] = getEconomicalBowlersForYear();

fs.writeFile('../public/data.json',
   JSON.stringify(jsonData, null,4), 
   err => 
       {
       if( err){
         console.log(err);
       }
})