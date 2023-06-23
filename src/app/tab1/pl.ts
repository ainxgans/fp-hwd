export interface Root {
  table: Table[];
}

export interface Table {
  idStanding: string;
  intRank: string;
  idTeam: string;
  strTeam: string;
  strTeamBadge: string;
  idLeague: string;
  strLeague: string;
  strSeason: string;
  strForm: string;
  strDescription: string;
  intPlayed: string;
  intWin: string;
  intLoss: string;
  intDraw: string;
  intGoalsFor: string;
  intGoalsAgainst: string;
  intGoalDifference: string;
  intPoints: string;
  dateUpdated: string;
}
