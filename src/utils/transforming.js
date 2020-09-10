function normalizeMatchResults (match) {
  const teams = [];
  teams.push(match.team1);
  teams.push(match.team2);

  return {
    teams: teams,
  }
}

module.exports = {
  normalizeMatchResults
}