export interface Root {
  events: Event[];
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
  strDescriptionEN: any;
  strHomeTeam: string;
  strAwayTeam: string;
  intHomeScore: any;
  intRound: string;
  intAwayScore: any;
  intSpectators: any;
  strOfficial: string;
  strTimestamp: string;
  dateEvent: string;
  dateEventLocal: any;
  strTime: string;
  strTimeLocal: any;
  strTVStation: any;
  idHomeTeam: string;
  idAwayTeam: string;
  intScore: any;
  intScoreVotes: any;
  strResult: any;
  strVenue: string;
  strCountry: string;
  strCity: any;
  strPoster: string;
  strSquare: string;
  strFanart: any;
  strThumb: string;
  strBanner: string;
  strMap: any;
  strTweet1: any;
  strTweet2: any;
  strTweet3: any;
  strVideo: any;
  strStatus: string;
  strPostponed: string;
  strLocked: string;
}
