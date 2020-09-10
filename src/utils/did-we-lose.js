const constants = require('./constants');

function isMIBR(t) {
  return t.name === constants.MIBR_TEAM_NAME;
}

function isNotMIBR(t) {
  return t.name !== constants.MIBR_TEAM_NAME;
}

const didWeLose = (match) => {
  const mibr = match.teams.find(isMIBR);
  const team = match.teams.find(isNotMIBR);
  return team.result > mibr.result;
};

module.exports = didWeLose;