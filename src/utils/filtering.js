const constants = require('./constants');

function isMIBRPlaying (match) {
  const mibrInTeams = match.teams.find(function (team) {
    return team.name === constants.MIBR_TEAM_NAME;
  });
  return mibrInTeams !== undefined;
}


module.exports = {
  isMIBRPlaying
};