export interface Root {
  event: Event[];
}

export interface Event {
  idEvent: string;
  idSoccerXML: any;
  idAPIfootball: string;
  strEvent: string;
  strEventAlternate: string;
  strFilename: string;
  strSport: string;
  idLeague: string;
  strLeague: string;
  strSeason: string;
  strDescriptionEN?: string;
  strHomeTeam: string;
  strAwayTeam: string;
  intHomeScore?: string;
  intRound: string;
  intAwayScore?: string;
  intSpectators: any;
  strOfficial: string;
  strTimestamp: string;
  dateEvent: string;
  dateEventLocal?: string;
  strTime: string;
  strTimeLocal?: string;
  strTVStation: any;
  idHomeTeam: string;
  idAwayTeam: string;
  intScore: any;
  intScoreVotes: any;
  strResult?: string;
  strVenue: string;
  strCountry: string;
  strCity?: string;
  strPoster: string;
  strSquare: string;
  strFanart: any;
  strThumb: string;
  strBanner: string;
  strMap: any;
  strTweet1?: string;
  strTweet2?: string;
  strTweet3?: string;
  strVideo?: string;
  strStatus: string;
  strPostponed: string;
  strLocked: string;
}
