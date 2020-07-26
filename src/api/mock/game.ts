import { GameItem } from "../games/types";

export const getMockGame = (): GameItem => ({
  homeTeamFullName: "Los Angeles Dodgers",
  homeTeamScore: 4,
  homeTeamLogoUrl: "https://s.yimg.com/cv/apiv2/default/mlb/20190311/70x70/dodgers_wbgs.png",
  homeTeamConferenceAbbr: "NL",
  homeTeamDivisionName: "Central",
  homeTeamDivisionRank: "1st",
  awayTeamFullName: "Boston Red Sox",
  awayTeamScore: 1,
  awayTeamLogoUrl: "https://s.yimg.com/cv/apiv2/default/mlb/20190311/70x70/redsox_wbgs.png",
  awayTeamConferenceAbbr: "AL",
  awayTeamDivisionName: "East",
  awayTeamDivisionRank: "2nd",
  statusDisplay: "Bot 9",
  homeStreamUrl: "http://6stream.xyz/video/rangers-vs-rockies/",
  awayStreamUrl: "http://6stream.xyz/video/rangers-vs-rockies-2/",
});
